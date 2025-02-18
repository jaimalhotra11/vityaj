import React, { useState, useRef } from 'react';
import {
  GraduationCap, Award, DollarSign, Globe, FileText, 
  CalendarClock, Coins, Building2, BookOpen, Microscope,
  Code, Palette, HeartPulse, Scale, Hotel, Camera, Wrench,
  Briefcase
} from 'lucide-react';

interface Course {
  name: string;
  description: string;
  duration: string;
  fees: string;
  eligibility: string;
  skills?: string[];
  specializations?: string[];
}

interface Career {
  title: string;
  salary: string;
  companies: string[];
}

const StudyInIndia = () => {
  const [selectedLevel, setSelectedLevel] = useState('diploma');
  const [selectedField, setSelectedField] = useState('engineering');
  const courseExplorerRef = useRef<HTMLElement>(null);

  const scrollToCourses = () => {
    courseExplorerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const educationLevels = {
    certificate: "Certificate Courses (3-6 months)",
    diploma: "Diploma Programs (1-3 years)",
    bachelor: "Bachelor's Degrees (3-5 years)",
    master: "Master's Degrees (2-3 years)",
    doctorate: "Doctoral Programs (3-5 years)"
  };

  const studyFields = {
    engineering: "Engineering & Technology",
    medical: "Medical & Healthcare",
    arts: "Arts & Humanities",
    science: "Science & Research",
    business: "Business & Management",
    law: "Law & Legal Studies",
    it: "Information Technology",
    design: "Design & Architecture",
    hospitality: "Hospitality & Tourism"
  };

  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 text-rose-600" />,
      title: "Diverse Education System",
      description: "From short-term certificates to doctoral programs across multiple disciplines"
    },
    {
      icon: <Award className="w-12 h-12 text-rose-600" />,
      title: "Global Recognition",
      description: "Degrees recognized worldwide with international collaboration opportunities"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-rose-600" />,
      title: "Affordable Education",
      description: "Quality education at competitive rates with scholarship opportunities"
    },
    {
      icon: <Globe className="w-12 h-12 text-rose-600" />,
      title: "Cultural Experience",
      description: "Rich cultural diversity and heritage with modern educational infrastructure"
    }
  ];

  const courseDatabase = {
    certificate: {
      engineering: {
        courses: [
          {
            name: "AutoCAD Design & 3D Modeling",
            description: "Learn professional CAD software for engineering design",
            duration: "6 months",
            fees: "₹50,000",
            eligibility: "10+2 with Mathematics",
            skills: ["AutoCAD", "3D Modeling", "Technical Drawing", "Design Principles"]
          },
          {
            name: "Web Development & Full Stack",
            description: "Comprehensive web development training",
            duration: "6 months",
            fees: "₹60,000",
            eligibility: "10+2 with basic computer knowledge",
            skills: ["HTML/CSS", "JavaScript", "Node.js", "React", "MongoDB"]
          }
        ],
        duration: "3-6 months",
        careers: [
          {
            title: "Technical Assistant",
            salary: "₹15,000 - ₹25,000 per month",
            companies: ["Engineering Firms", "Manufacturing Units", "Construction Companies"]
          }
        ]
      }
    }
  };

  const getFieldIcon = (field: string) => {
    const icons = {
      engineering: <Wrench className="w-6 h-6" />,
      medical: <HeartPulse className="w-6 h-6" />,
      arts: <Palette className="w-6 h-6" />,
      science: <Microscope className="w-6 h-6" />,
      business: <Building2 className="w-6 h-6" />,
      law: <Scale className="w-6 h-6" />,
      it: <Code className="w-6 h-6" />,
      design: <Camera className="w-6 h-6" />,
      hospitality: <Hotel className="w-6 h-6" />
    };
    return icons[field as keyof typeof icons] || <BookOpen className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-r from-rose-600 to-rose-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Future with Education in India
            </h1>
            <p className="text-xl mb-8">
              Discover world-class education opportunities at affordable costs
            </p>
            <button 
              onClick={scrollToCourses}
              className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      <section ref={courseExplorerRef} className="py-16 bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Education Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              >
                {Object.entries(educationLevels).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Field of Study
              </label>
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              >
                {Object.entries(studyFields).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>
          </div>

          {courseDatabase[selectedLevel as keyof typeof courseDatabase]?.[selectedField as keyof (typeof courseDatabase)[keyof typeof courseDatabase]] && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                {getFieldIcon(selectedField)}
                <h3 className="text-2xl font-semibold">
                  {studyFields[selectedField as keyof typeof studyFields]}
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-rose-600" />
                    Available Courses
                  </h4>
                  <div className="space-y-4">
                    {courseDatabase[selectedLevel as keyof typeof courseDatabase][selectedField as keyof (typeof courseDatabase)[keyof typeof courseDatabase]].courses.map((course: Course, index: number) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-rose-50 transition-colors">
                        <h5 className="font-semibold text-gray-900 mb-2">{course.name}</h5>
                        <p className="text-gray-600 text-sm mb-2">{course.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Duration:</span>
                            <span className="ml-2 text-gray-900">{course.duration}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Fees:</span>
                            <span className="ml-2 text-gray-900">{course.fees}</span>
                          </div>
                        </div>
                        {course.skills && (
                          <div className="mt-2">
                            <span className="text-gray-500 text-sm">Skills:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {course.skills.map((skill, idx) => (
                                <span key={idx} className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {course.specializations && (
                          <div className="mt-2">
                            <span className="text-gray-500 text-sm">Specializations:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {course.specializations.map((spec, idx) => (
                                <span key={idx} className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded">
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-rose-600" />
                    Career Opportunities
                  </h4>
                  <div className="space-y-4">
                    {courseDatabase[selectedLevel as keyof typeof courseDatabase][selectedField as keyof (typeof courseDatabase)[keyof typeof courseDatabase]].careers.map((career: Career, index: number) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-rose-50 transition-colors">
                        <h5 className="font-semibold text-gray-900 mb-2">{career.title}</h5>
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          <div>
                            <span className="text-gray-500">Salary Range:</span>
                            <span className="ml-2 text-gray-900">{career.salary}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Top Recruiters:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {career.companies.map((company, idx) => (
                                <span key={idx} className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded">
                                  {company}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default StudyInIndia;
