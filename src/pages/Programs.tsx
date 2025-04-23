import React from 'react';
import { GraduationCap, Clock, Globe, Award, DollarSign, BookOpen, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      title: "MBBS in India",
      duration: "5.5 years",
      fees: "$7,000/year",
      features: [
        "WHO Recognized",
        "Clinical Training",
        "Modern Facilities",
        "Global Recognition"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "MBBS in Europe",
      duration: "6 years",
      fees: "€8,000/year",
      features: [
        "EU Standards",
        "International Faculty",
        "Research Opportunities",
        "Clinical Rotations"
      ],
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "MD Programs",
      duration: "3 years",
      fees: "$10,000/year",
      features: [
        "Specialization Options",
        "Advanced Training",
        "Research Focus",
        "Expert Mentorship"
      ],
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const specializations = [
    {
      icon: <BookOpen className="w-8 h-8 text-rose-600" />,
      title: "General Medicine",
      description: "Comprehensive medical training with clinical exposure"
    },
    {
      icon: <Users className="w-8 h-8 text-rose-600" />,
      title: "Surgery",
      description: "Advanced surgical techniques and procedures"
    },
    {
      icon: <Star className="w-8 h-8 text-rose-600" />,
      title: "Pediatrics",
      description: "Specialized care for children and adolescents"
    },
    {
      icon: <Award className="w-8 h-8 text-rose-600" />,
      title: "Cardiology",
      description: "Heart and cardiovascular system specialization"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <GraduationCap className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Our Programs
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            Discover world-class medical education programs designed for your success
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/apply"
              className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="#calculator"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              Calculate Fees
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${program.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Clock className="w-4 h-4 text-rose-600" />
                      <span>Duration: {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <DollarSign className="w-4 h-4 text-rose-600" />
                      <span>Fees: {program.fees}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Star className="w-4 h-4 text-rose-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/apply"
                      className="block w-full bg-rose-600 text-white text-center py-2 rounded-lg hover:bg-rose-700 transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Medical Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="mb-4">{spec.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{spec.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Medical Journey?</h2>
          <p className="text-xl mb-8">Take the first step towards your dream career in medicine</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;