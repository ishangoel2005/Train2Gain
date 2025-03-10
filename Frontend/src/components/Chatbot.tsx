import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you with your fitness journey?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);
    // Add your chatbot logic here
    setMessages(prev => [...prev, { text: "Thanks for your message! Our team will assist you shortly.", isBot: true }]);
    setInput('');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <MessageCircle className="text-yellow-500 w-6 h-6" />
          <h3 className="text-yellow-500 font-semibold">Need Help?</h3>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-gray-700"
        >
          {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
        </button>
      </div>
      
      <div className={`chatbot-window ${!isOpen ? 'hidden' : ''}`}>
        <div className="h-[300px] overflow-y-auto p-4 space-y-4 bg-gray-50 rounded-lg mb-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.isBot
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'bg-yellow-500 text-white ml-auto'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSend}>
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;