'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X, Send } from 'lucide-react';
import { getChatResponse, ChatState, Message } from '@/lib/chat';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [input, setInput] = useState('');
  const [state, setState] = useState<ChatState>({
    messages: [
      { id: '1', role: 'assistant', content: 'Hi there! I am the AI assistant for Matic Global Solutions. How can I help you today?' }
    ],
    intent: 'initial',
    contactData: {}
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show bubble after a delay if not closed in this session
    const bubbleDismissed = sessionStorage.getItem('chat_bubble_dismissed');
    if (!bubbleDismissed && !isOpen) {
      const timer = setTimeout(() => setShowBubble(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

  const dismissBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowBubble(false);
    sessionStorage.setItem('chat_bubble_dismissed', 'true');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowBubble(false);
      sessionStorage.setItem('chat_bubble_dismissed', 'true');
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input.trim() };
    
    // 1. Update state immediately so the user sees their message
    const updatedState: ChatState = {
      ...state,
      messages: [...state.messages, userMessage]
    };
    setState(updatedState);
    setInput('');

    try {
      // 2. Pass the updated state (which includes the user's message) to the bot logic
      const { text, newState } = await getChatResponse(userMessage.content, updatedState);
      
      setTimeout(() => {
        setState({
          ...newState,
          messages: [...newState.messages, { id: Date.now().toString(), role: 'assistant', content: text }]
        });
      }, 500); // slight delay for realism
    } catch (error) {
      // 3. If there is an error (e.g. API not connected), append an error message to the current state
      setTimeout(() => {
        setState(prev => ({
          ...prev,
          messages: [...prev.messages, { id: Date.now().toString(), role: 'assistant', content: "Sorry, I'm having trouble connecting to the server right now. Please try again later or visit our Contact Us page." }]
        }));
      }, 500);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 w-full sm:w-[380px] h-[550px] max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300 origin-bottom-right">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0C5A96] to-[#22D3EE] text-white p-5 flex justify-between items-center shadow-md z-10">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-white/20 rounded-full">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-[16px] leading-tight">MATIC Assistant</h3>
                <p className="text-[11px] text-white/80 font-medium tracking-wide">ENTERPRISE AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="hover:bg-white/20 p-1.5 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 bg-gray-50/50">
            {state.messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${msg.role === 'user' ? 'bg-gradient-to-br from-[#0C5A96] to-[#2F7BFF] text-white rounded-br-sm' : 'bg-white text-gray-800 border border-gray-100 rounded-bl-sm'}`}>
                  <p className="text-[15px] whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-100 bg-white">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-[var(--primary)] transition-colors"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-transparent outline-none text-[var(--text)] text-[15px]"
                disabled={state.intent === 'contact_submitting' || state.intent === 'contact_done'}
              />
              <button 
                type="submit" 
                disabled={!input.trim() || state.intent === 'contact_submitting' || state.intent === 'contact_done'}
                className="text-[var(--primary)] disabled:text-gray-400 p-1"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Prompts Bubble (when closed) */}
      {!isOpen && showBubble && (
        <div className="mb-4 flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="bg-white rounded-2xl rounded-br-none shadow-soft border border-gray-100 p-3 pr-8 relative">
            <p className="text-[var(--text)] text-sm font-medium">Need help? Ask me anything.</p>
            <button onClick={dismissBubble} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" aria-label="Dismiss">
              <X className="w-4 h-4" />
            </button>
          </div>
          <button 
            onClick={() => {
              setInput('How can I contact you?');
              setIsOpen(true);
            }}
            className="bg-white border border-gray-200 text-[var(--text)] text-xs font-medium px-3 py-1.5 rounded-full shadow-sm hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
          >
            How can I contact you?
          </button>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={toggleChat}
        className="h-14 px-5 rounded-full bg-gradient-to-r from-[#0C5A96] to-[#2F7BFF] text-white shadow-[0_8px_30px_rgb(12,90,150,0.3)] flex items-center justify-center gap-2 hover:shadow-[0_8px_30px_rgb(12,90,150,0.5)] transition-all hover:scale-105"
        aria-label="Open chat"
        aria-expanded={isOpen}
      >
        <Sparkles className="w-5 h-5 animate-pulse" />
        <span className="font-bold text-[15px]">Chat with AI</span>
      </button>
    </div>
  );
}
