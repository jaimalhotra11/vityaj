import React from 'react';
import { Award, Globe, CheckCircle, Building2, Star, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalRecognition = () => {
  const recognitions = [
    {
      icon: <Globe className="w-12 h-12 text-rose-600" />,
      title: "WHO Recognition",
      description: "All partner universities are recognized by the World Health Organization"
    },
    {
      icon: <Award className="w-12 h-12 text-rose-600" />,
      title: "International Accreditation",
      description: "Accredited by major international medical councils and organizations"
    },
    {
      icon: <Building2 className="w-12 h-12 text-rose-600" />,
      title: "Top Rankings",
      description: "Partner universities consistently rank among the top institutions globally"
    },
    {
      icon: <Star className="w-12 h-12 text-rose-600" />,
      title: "Quality Assurance",
      description: "Rigorous quality standards and regular audits by international bodies"
    }
  ];

  const accreditations = [
    {
      name: "World Health Organization (WHO)",
      logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "Global health authority recognition"
    },
    {
      name: "UNESCO",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "United Nations Educational Recognition"
    },
    {
      name: "WFME",
      logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "World Federation for Medical Education"
    }
  ];

  const benefits = [
    "Global Medical Practice Opportunities",
    "International Residency Programs",
    "Worldwide Research Collaborations",
    "Global Student Exchange Programs",
    "International Clinical Rotations",
    "Multinational Healthcare Projects"
  ];

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-rose-600" />,
      title: "International Curriculum",
      description: "Globally standardized medical curriculum"
    },
    {
      icon: <Users className="w-8 h-8 text-rose-600" />,
      title: "Global Faculty",
      description: "International teaching staff and visiting professors"
    },
    {
      icon: <Globe className="w-8 h-8 text-rose-600" />,
      title: "Worldwide Network",
      description: "Access to global medical institutions"
    },
    {
      icon: <Star className="w-8 h-8 text-rose-600" />,
      title: "Research Excellence",
      description: "International research opportunities"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Global Recognition & Accreditation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Our partner universities offer internationally recognized degrees that open doors worldwide,
            backed by prestigious global accreditations and quality assurance.
          </p>
        </div>
      </section>

      {/* Recognition Cards */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">International Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recognitions.map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Bodies */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Accreditation Bodies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accreditations.map((accreditation, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={accreditation.logo}
                    alt={accreditation.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{accreditation.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{accreditation.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Benefits */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Global Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">International Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Global Medical Career</h2>
          <p className="text-xl mb-8">Join our globally recognized medical programs</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              Apply Now
            </Link>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors">
              Download Recognition Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalRecognition;