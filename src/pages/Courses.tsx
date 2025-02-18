import React from 'react';
import { GraduationCap, BookOpen, Clock, Users, Paintbrush, FlaskConical, Briefcase, Atom } from 'lucide-react';
import CourseCard from '../components/CourseCard';


export const courses = [
    {
      title: "MBBS in Europe",
      description: "Complete 6-year medical programs in top European universities",
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      link: "/mbbs-europe",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700"
    },
    {
      title: "Specializations",
      description: "Choose from various medical specializations in European institutions",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      link: "/mbbs-europe#specializations",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700"
    },
    {
      title: "Clinical Training",
      description: "Hands-on clinical experience in European hospitals",
      icon: <Briefcase className="w-8 h-8 text-white" />,
      link: "/mbbs-europe#clinical",
      bgColor: "bg-purple-600",
      hoverColor: "hover:bg-purple-700"
    },
    {
      title: "Admission Process",
      description: "Step-by-step guide to European medical school admissions",
      icon: <Paintbrush className="w-8 h-8 text-white" />,
      link: "/mbbs-europe#admission",
      bgColor: "bg-orange-600",
      hoverColor: "hover:bg-orange-700"
    },
    {
      title: "Scholarships",
      description: "Financial aid opportunities for European medical studies",
      icon: <FlaskConical className="w-8 h-8 text-white" />,
      link: "/mbbs-europe#scholarships",
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700"
    }
];


const Courses = () => {



  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">

      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">MBBS/MD Programs in Europe</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              icon={course.icon}
              link={course.link}
              bgColor={course.bgColor}
              hoverColor={course.hoverColor}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Courses;
