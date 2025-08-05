
'use client';

import { useState } from 'react';

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const quickMessages = [
    {
      text: "I want a website for my business",
      message: "Hi! I want a professional website for my business. Can we discuss the options?"
    },
    {
      text: "Free consultation",
      message: "Hi! I'd like to schedule a free consultation to discuss my website needs."
    },
    {
      text: "View pricing",
      message: "Hi! Can you send me pricing information for website development?"
    },
    {
      text: "See portfolio",
      message: "Hi! I'd like to see more examples of your work and discuss my project."
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div 
          className="mb-4 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 max-w-xs border border-slate-700/50"
          style={{
            boxShadow: '0 0 40px rgba(15, 23, 42, 0.8), 0 0 80px rgba(34, 211, 238, 0.1), inset 0 1px 0 rgba(148, 163, 184, 0.1)'
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <h4 
              className="font-bold text-white text-sm"
              style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
              }}
            >
              Quick Start
            </h4>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors duration-300"
              style={{
                filter: 'drop-shadow(0 0 5px rgba(34, 211, 238, 0.3))'
              }}
            >
              <i className="ri-close-line"></i>
            </button>
          </div>

          <div className="space-y-2">
            {quickMessages.map((msg, index) => (
              <a
                key={index}
                href={`https://wa.me/254104613770?text=${encodeURIComponent(msg.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block text-sm text-gray-300 hover:text-green-400 hover:bg-green-500/10 p-3 rounded-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-green-500/20"
                style={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
                }}
              >
                <i className="ri-chat-3-line mr-2 group-hover:text-green-400"></i>
                {msg.text}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-700/50">
            <a
              href="https://wa.me/254104613770"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 font-medium cursor-pointer transition-colors duration-300"
              style={{
                textShadow: '0 0 10px rgba(34, 197, 94, 0.4)'
              }}
            >
              <i className="ri-whatsapp-line"></i>
              Open WhatsApp
            </a>
          </div>
        </div>
      )}

      <div className="flex items-end gap-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`group bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-cyan-400 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer border border-slate-600/50 hover:border-cyan-400/50 ${
            isExpanded ? 'scale-95' : 'scale-100 hover:scale-110'
          }`}
          style={{
            boxShadow: '0 0 20px rgba(15, 23, 42, 0.8), 0 0 40px rgba(34, 211, 238, 0.2)',
            filter: 'drop-shadow(0 4px 15px rgba(34, 211, 238, 0.3))'
          }}
        >
          <i className={`${isExpanded ? 'ri-close-line' : 'ri-chat-3-line'} text-xl group-hover:scale-110 transition-transform duration-300`}></i>
        </button>

        <a
          href="https://wa.me/254104613770?text=Hi! I'm interested in building a professional website for my business."
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-400 hover:to-emerald-300 text-white w-18 h-18 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer animate-pulse"
          style={{
            width: '72px',
            height: '72px',
            boxShadow: '0 0 30px rgba(34, 197, 94, 0.8), 0 0 60px rgba(16, 185, 129, 0.4), 0 0 90px rgba(34, 197, 94, 0.2)',
            filter: 'drop-shadow(0 4px 20px rgba(34, 197, 94, 0.6))'
          }}
        >
          <i className="ri-whatsapp-line text-3xl group-hover:scale-110 transition-transform duration-300"></i>
          
          {/* Pulsing Ring */}
          <div 
            className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"
            style={{
              animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
            }}
          ></div>
        </a>
      </div>
    </div>
  );
}
