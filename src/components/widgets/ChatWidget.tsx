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
    
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage]
    }));
    setInput('');

    // Get bot response
    const { text, newState } = await getChatResponse(userMessage.content, state);
    
    setTimeout(() => {
      setState({
        ...newState,
        messages: [...newState.messages, { id: Date.now().toString(), role: 'assistant', content: text }]
      });
    }, 500); // slight delay for realism
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-soft border border-gray-200 w-full sm:w-[380px] h-[500px] max-h-[80vh] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 origin-bottom-right">
          {/* Header */}
          <div className="bg-[var(--primary)] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-bold text-lg">AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="hover:text-gray-200">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-50">
            {state.messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.role === 'user' ? 'bg-[var(--chat-blue)] text-white rounded-br-none' : 'bg-white text-[var(--text)] shadow-sm border border-gray-100 rounded-bl-none'}`}>
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
        className="h-14 px-5 rounded-full bg-[var(--chat-blue)] text-white shadow-soft flex items-center justify-center gap-2 hover:bg-blue-700 transition-transform hover:scale-105"
        aria-label="Open chat"
        aria-expanded={isOpen}
      >
        <Sparkles className="w-5 h-5" />
        <span className="font-bold text-[15px]">Chat with AI</span>
      </button>
    </div>
  );
}
