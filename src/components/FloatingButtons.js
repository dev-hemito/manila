'use client'
import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(true);

  const buttons = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      color: 'bg-green-500 hover:bg-green-600',
      link: 'https://wa.me/+639951582171'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Call',
      color: 'bg-blue-500 hover:bg-blue-600',
      link: 'tel:+639951582171'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Viber',
      color: 'bg-purple-500 hover:bg-purple-600',
      link: 'viber://chat?number=+639951582171'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-4 z-50">
      {/* Main buttons container */}
      <div className={`flex flex-col-reverse items-end space-y-reverse space-y-3 transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.link}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-white shadow-lg 
              transform transition-all duration-300 hover:scale-105 ${button.color}`}
          >
            <span className="text-sm font-medium">{button.label}</span>
            {button.icon}
          </a>
        ))}
      </div>

      {/* Toggle button */}
     
    </div>
  );
};

export default FloatingButtons;
