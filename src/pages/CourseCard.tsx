import React from 'react';
import { ChevronRight } from 'lucide-react';
import courses from '../pages/Courses';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  subcourses: Array<{
    name: string;
    duration: string;
    link: string;
  }>;
  bgColor: string;
  hoverColor: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  icon,
  subcourses,
  bgColor,
  hoverColor
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${isExpanded ? 'scale-102' : ''}`}>
      <div 
        className={`${bgColor} ${hoverColor} p-6 cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {icon}
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
          <ChevronRight 
            className={`w-6 h-6 text-white transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
          />
        </div>
        <p className="mt-2 text-white/90">{description}</p>
      </div>
      
      {isExpanded && (
        <div className="bg-white p-4">
          <div className="space-y-3">
            {subcourses.map((subcourse, index) => (
              <a
                key={index}
                href={subcourse.link}
                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{subcourse.name}</span>
                  <span className="text-sm text-gray-500">{subcourse.duration}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
