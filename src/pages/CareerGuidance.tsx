import React from 'react';
import { Briefcase, Target, Users, BookOpen, Award, Star, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareerGuidance = () => {
  const services = [
    {
      icon: <Target className="w-12 h-12 text-rose-600" />,
      title: "Career Planning",
      description: "Personalized career roadmap development"
    },
    {
      icon: <Users className="w-12 h-12 text-rose-600" />,
      title: "Interview Preparation",
      description: "Mock interviews and feedback sessions"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-rose-600" />,
      title: "CV Building",
      description: "Professional CV and cover letter writing"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-rose-600" />,
      title: "Job Placement",
      description: "Access to job opportunities and placement support"
    }
  ];

  const workshops = [
    {
      title: "Professional Development",
      topics: [
        "Communication Skills",
        "Leadership Training",
        "Time Management",
        "Problem Solving"
      ],
      duration: "4 weeks",
      schedule: "Weekly sessions"
    },
    {
      title: "Industry Preparation",
      topics: [
        "Technical Skills",
        "Industry Trends",
        "Project Management",
        "Team Collaboration"
      ],
      duration: "6 weeks",
      schedule: "Bi-weekly sessions"
    },
    {
      title: "Career Advancement",
      topics: [
        "Networking Skills",
        "Personal Branding",
        "Career Transitions",
        "Growth Strategies"
      ],
      duration: "8 weeks",
      schedule: "Monthly sessions"
    }
  ];

  const resources = [
    {
      icon: <BookOpen className="w-8 h-8 text-rose-600" />,
      title: "Career Library",
      description: "Access to career guides, industry reports, and research materials"
    },
    {
      icon: <Users className="w-8 h-8 text-rose-600" />,
      title: "Mentorship Network",
      description: "Connect with industry professionals and career mentors"
    },
    {
      icon: <Calendar className="w-8 h-8 text-rose-600" />,
      title: "Job Portal",
      description: "Exclusive access to job listings and internship opportunities"
    },
    {
      icon: <Award className="w-8 h-8 text-rose-600" />,
      title: "Skill Assessment",
      description: "Regular assessments and skill development tracking"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <Briefcase className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Career Guidance
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            Expert career guidance to help you achieve your professional goals
          </p>
          <Link
            to="/contact"
            className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors inline-flex items-center gap-2"
          >
            Get Career Support
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Career Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Career Development Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{workshop.title}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Key Topics:</h4>
                    <ul className="space-y-2">
                      {workshop.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <Star className="w-4 h-4 text-rose-600" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-300">
                    <span>Duration: {workshop.duration}</span>
                    <span>{workshop.schedule}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Career Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Career Development Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Career Assessment</h3>
                  <p className="text-gray-600 dark:text-gray-300">Evaluate your skills, interests, and career goals</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
                  <p className="text-gray-600 dark:text-gray-300">Enhance your professional and technical skills</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry Experience</h3>
                  <p className="text-gray-600 dark:text-gray-300">Gain practical experience through internships and projects</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Job Placement</h3>
                  <p className="text-gray-600 dark:text-gray-300">Connect with employers and secure your dream job</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Career Journey?</h2>
          <p className="text-xl mb-8">Let our career experts guide you towards success</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              Book Consultation
            </Link>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors">
              Download Career Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerGuidance;