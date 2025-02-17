import React from 'react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  bgColor: string;
  hoverColor: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  description, 
  icon, 
  link, 
  bgColor, 
  hoverColor 
}) => {
  return (
    <Link to={link} className={`group relative overflow-hidden rounded-2xl shadow-xl ${bgColor} hover:${hoverColor} transition-all duration-300 ease-in-out transform hover:-translate-y-2`}>
      <div className="p-8">
        <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 group-hover:h-full transition-all duration-500 ease-in-out"></div>
    </Link>
  );
};

export default CourseCard;
