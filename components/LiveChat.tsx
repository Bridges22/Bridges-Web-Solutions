'use client';

import { useState, useEffect, useRef } from 'react';

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-responses for common questions
  const autoResponses = {
    greeting: [
      "Hello! 👋 Welcome to Bridges Web Solutions!",
      "I'm here to help you with any questions about our web development services.",
      "How can I assist you today?"
    ],
    pricing: [
      "Great question about pricing! 💰",
      "We offer three main packages:",
      "• Business Starter: Ksh 45,000 (Perfect for small businesses)",
      "• Business Professional: Ksh 85,000 (Most popular choice)",
      "• E-commerce Pro: Ksh 150,000 (Full online store)",
      "",
      "Would you like me to connect you with Bridges for a detailed quote? You can also check our pricing page for more details."
    ],
    timeline: [
      "Our typical project timelines are: ⏱️",
      "• Business websites: 2-3 weeks",
      "• Professional sites: 3-4 weeks", 
      "• E-commerce stores: 4-6 weeks",
      "",
      "The exact timeline depends on your specific requirements. Would you like to discuss your project?"
    ],
    services: [
      "We offer comprehensive web development services: 🚀",
      "• Custom website design & development",
      "• E-commerce platforms",
      "• Mobile-responsive design",
      "• SEO optimization",
      "• Ongoing support & maintenance",
      "",
      "What type of website are you looking to build?"
    ],
    contact: [
      "You can reach us through: 📞",
      "• WhatsApp: +254 104 613 770",
      "• Email: bridges.cybersec@gmail.com",
      "",
      "Or click the WhatsApp button to chat directly with Bridges!"
    ],
    default: [
      "Thanks for your message! 😊",
      "For detailed assistance, I'd recommend chatting directly with Bridges on WhatsApp.",
      "He'll be able to give you personalized advice for your specific needs.",
      "",
      "Click the WhatsApp button to get started!"
    ]
  };

  // Initialize with greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(autoResponses.greeting);
      }, 500);
    }
  }, [isOpen]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addBotMessage = (messageLines: string[]) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const newMessages = messageLines.map((line, index) => ({
        id: Date.now() + index,
        text: line,
        sender: 'bot' as const,
        timestamp: new Date()
      }));
      
      setMessages(prev => [...prev, ...newMessages]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Determine response based on keywords
    const lowerText = inputText.toLowerCase();
    let response = autoResponses.default;

    if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('how much')) {
      response = autoResponses.pricing;
    } else if (lowerText.includes('time') || lowerText.includes('long') || lowerText.includes('when')) {
      response = autoResponses.timeline;
    } else if (lowerText.includes('service') || lowerText.includes('what do you') || lowerText.includes('offer')) {
      response = autoResponses.services;
    } else if (lowerText.includes('contact') || lowerText.includes('phone') || lowerText.includes('email')) {
      response = autoResponses.contact;
    } else if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
      response = ["Hello! 👋 Great to hear from you!", "How can I help you with your website project today?"];
    }

    setInputText('');
    addBotMessage(response);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are your prices?",
    "How long does it take?",
    "What services do you offer?",
    "How can I contact you?"
  ];

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
            isOpen 
              ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400' 
              : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400'
          } hover:scale-110`}
          style={{
            boxShadow: '0 8px 32px rgba(34, 211, 238, 0.4)'
          }}
        >
          {isOpen ? (
            <i className="ri-close-line text-2xl text-white"></i>
          ) : (
            <i className="ri-chat-3-line text-2xl text-white animate-pulse"></i>
          )}
        </button>

        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-lg rounded-2xl border border-slate-700/50 shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold">Bridges Web Solutions</div>
              <div className="text-cyan-100 text-sm flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Online now
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-slate-700/50 text-gray-200 border border-slate-600/30'
                  }`}
                >
                  {message.text && (
                    <div className="text-sm leading-relaxed whitespace-pre-line">
                      {message.text}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-700/50 border border-slate-600/30 p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Questions */}
            {messages.length <= 3 && !isTyping && (
              <div className="space-y-2">
                <div className="text-gray-400 text-xs text-center">Quick questions:</div>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputText(question);
                      setTimeout(handleSendMessage, 100);
                    }}
                    className="w-full text-left p-2 text-sm text-gray-300 bg-slate-700/30 hover:bg-slate-700/50 rounded-lg border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-700/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-slate-700/50 border border-slate-600/50 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-colors duration-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-gray-600 disabled:to-gray-700 rounded-full flex items-center justify-center transition-all duration-200 disabled:cursor-not-allowed"
              >
                <i className="ri-send-plane-fill text-white"></i>
              </button>
            </div>
            
            {/* WhatsApp CTA */}
            <div className="mt-3 text-center">
              <a
                href="https://wa.me/254104613770?text=Hi! I'm interested in web development services and would like to discuss my project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors duration-200"
              >
                <i className="ri-whatsapp-line"></i>
                Chat directly on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
