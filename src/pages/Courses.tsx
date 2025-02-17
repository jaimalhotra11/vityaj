import React from 'react';
import { GraduationCap, BookOpen, Clock, Users, Paintbrush, FlaskConical, Briefcase, Atom } from 'lucide-react';
import CourseCard from '../components/CourseCard';


export const courses = [

    {
      title: "Medical Courses",
      description: "Explore MBBS, MD, and specialized medical programs with global recognition",
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      link: "/courses/medical",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700"
    },
    {
      title: "Engineering Courses",
      description: "Discover cutting-edge engineering programs across various specializations",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      link: "/courses/engineering",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700"
    },
    {
      title: "Management Courses",
      description: "Develop leadership skills with our world-class management programs",
      icon: <Briefcase className="w-8 h-8 text-white" />,
      link: "/courses/management",
      bgColor: "bg-purple-600",
      hoverColor: "hover:bg-purple-700"
    },
    {
      title: "Arts Courses",
      description: "Explore creative arts programs in diverse artistic disciplines",
      icon: <Paintbrush className="w-8 h-8 text-white" />,
      link: "/courses/arts",
      bgColor: "bg-orange-600",
      hoverColor: "hover:bg-orange-700"
    },
    {
      title: "Science Courses",
      description: "Dive into innovative science programs with cutting-edge research",
      icon: <FlaskConical className="w-8 h-8 text-white" />,
      link: "/courses/science",
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700"
    }
];

const Courses = () => {



  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">

      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Courses</h1>
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
