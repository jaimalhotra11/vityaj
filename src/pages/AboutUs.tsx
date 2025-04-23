import React from 'react';
import { Globe, Award, Users, Target, BookOpen, Briefcase } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Students Placed" },
    { number: "100+", label: "Partner Universities" },
    { number: "50+", label: "Countries Served" }
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12 text-rose-600" />,
      title: "Our Mission",
      description: "To provide quality education opportunities to students worldwide through expert guidance and support"
    },
    {
      icon: <Globe className="w-12 h-12 text-rose-600" />,
      title: "Our Vision",
      description: "To be the leading global education consultancy, transforming lives through accessible quality education"
    },
    {
      icon: <Award className="w-12 h-12 text-rose-600" />,
      title: "Our Values",
      description: "Excellence, integrity, student success, and cultural understanding guide everything we do"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Williams",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "20+ years in international education"
    },
    {
      name: "Michael Chen",
      role: "Head of Admissions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "Expert in university admissions"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Academic Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "Former university dean"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Vityaz Global
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Your trusted partner in international education, helping students achieve their academic dreams since 2013
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-rose-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-rose-600 mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Journey With Us</h2>
          <p className="text-xl mb-8">Let us help you achieve your educational goals</p>
          <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;