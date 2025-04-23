import React, { useState } from 'react';

interface AnnouncementBarProps {
  messages: Array<{ text: string; link?: string }>;
  colorScheme?: 'default' | 'warning' | 'success';
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ messages, colorScheme = 'default' }) => {
  const [isVisible, setIsVisible] = useState(true);

  const colorClasses = {
    default: 'bg-rose-600 text-white',
    warning: 'bg-yellow-500 text-gray-900',
    success: 'bg-green-600 text-white'
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`${colorClasses[colorScheme]} w-full overflow-hidden relative`}>
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex-1 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            {messages.map((message, index) => (
              <span key={index} className="mx-4">
                {message.link ? (
                  <a 
                    href={message.link}
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {message.text}
                  </a>
                ) : (
                  <span>{message.text}</span>
                )}
              </span>
            ))}
          </div>
        </div>
        <button 
          onClick={handleClose}
          className="ml-4 p-1 hover:bg-black/10 rounded-full transition-colors"
          aria-label="Close announcement"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
