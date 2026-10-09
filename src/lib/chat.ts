export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export type ChatState = {
  messages: Message[];
  intent: 'initial' | 'faq' | 'contact_gathering' | 'contact_submitting' | 'contact_done';
  contactData: {
    name?: string;
    email?: string;
    message?: string;
  };
};

// Adapter for LLM / rule-based logic
export async function getChatResponse(
  input: string, 
  currentState: ChatState
): Promise<{ text: string; newState: ChatState }> {
  
  const state = { ...currentState };
  
  // Rule-based logic for this assignment
  const lowerInput = input.toLowerCase();
  
  if (state.intent === 'contact_gathering') {
    if (!state.contactData.name) {
      state.contactData.name = input;
      return {
        text: `Thanks ${input}. What is your work email?`,
        newState: state
      };
    }
    if (!state.contactData.email) {
      if (!input.includes('@')) {
        return {
          text: "That doesn't look like a valid email. Please provide your work email.",
          newState: state
        };
      }
      state.contactData.email = input;
      return {
        text: "Got it. How can we help you today? Please provide a brief message.",
        newState: state
      };
    }
    if (!state.contactData.message) {
      state.contactData.message = input;
      state.intent = 'contact_submitting';
      
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: state.contactData.name,
            email: state.contactData.email,
            message: state.contactData.message,
            source: 'chat'
          })
        });
        
        state.intent = 'contact_done';
        return {
          text: "Thank you! Your message has been sent successfully. One of our experts will contact you shortly.",
          newState: state
        };
      } catch (error) {
        return {
          text: "Oops, something went wrong while sending your message. Please try the Contact Us page instead.",
          newState: state
        };
      }
    }
  }

  // FAQ intent matching
  if (lowerInput.includes('contact') || lowerInput.includes('talk') || lowerInput.includes('help')) {
    state.intent = 'contact_gathering';
    return {
      text: "I can connect you with our experts. To get started, what is your full name?",
      newState: state
    };
  }

  if (lowerInput.includes('service') || lowerInput.includes('do you do')) {
    return {
      text: "We specialize in Application Development, AI and ML, ERP, Cybersecurity, Cloud Strategy, Compliances, and Accounting & Taxation. Which of these interests you?",
      newState: state
    };
  }

  if (lowerInput.includes('ai') || lowerInput.includes('machine learning')) {
    return {
      text: "Our AI and ML services cover NLP, MLOps, generative AI, and predictive analytics. Would you like to speak to an AI specialist?",
      newState: state
    };
  }

  return {
    text: "I can answer questions about our services or help you contact our team. What would you like to know?",
    newState: state
  };
}
