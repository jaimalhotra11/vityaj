import React from 'react';
import { GraduationCap, BookOpen, Briefcase, Globe, Building2, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 text-rose-600" />,
      title: "Top Universities",
      description: "Partner with 100+ leading universities across India and Europe"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-rose-600" />,
      title: "Diverse Programs",
      description: "Wide range of courses including MBBS, MD, Engineering, and more"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-rose-600" />,
      title: "Career Support",
      description: "Comprehensive career guidance and placement assistance"
    },
    {
      icon: <Globe className="w-12 h-12 text-rose-600" />,
      title: "Global Recognition",
      description: "Internationally recognized degrees and certifications"
    },
    {
      icon: <Building2 className="w-12 h-12 text-rose-600" />,
      title: "Accommodation",
      description: "Secure and comfortable housing arrangements for students"
    },
    {
      icon: <Users className="w-12 h-12 text-rose-600" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all student needs"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Vityaz Global?</h2>
          <p className="text-xl text-gray-600">Your trusted partner in international education</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;