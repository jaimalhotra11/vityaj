import React from "react";
import { useState } from "react";

const DiscoverIndia = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex justify-center items-center min-h-48 bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="relative group">
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur ${isHovered ? 'opacity-75' : 'opacity-50'} transition-all duration-300 group-hover:opacity-75`} 
          style={{ transform: "translate(8px, 8px)" }}
        ></div>
        
        <button 
          className="relative bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-xl text-white font-bold shadow-lg flex items-center gap-3 hover:shadow-orange-400/40 hover:translate-y-1 transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="text-lg">Discover India in a Minute</span>
          <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DiscoverIndia;