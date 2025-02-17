import React from 'react';
import { GraduationCap, Award, DollarSign, Globe, BookOpen, Users, Building2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyStudyIndia = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-12 h-12 text-rose-600" />,
      title: "Cost-Effective Education",
      description: "Save up to 70% compared to Western countries while receiving world-class education"
    },
    {
      icon: <Award className="w-12 h-12 text-rose-600" />,
      title: "Global Recognition",
      description: "Degrees recognized worldwide by WHO, UNESCO, and major educational bodies"
    },
    {
      icon: <Globe className="w-12 h-12 text-rose-600" />,
      title: "Cultural Diversity",
      description: "Experience rich cultural heritage and diverse student community"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-rose-600" />,
      title: "English Medium",
      description: "All courses taught in English with international standard curriculum"
    },
    {
      icon: <Building2 className="w-12 h-12 text-rose-600" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art facilities with advanced research laboratories"
    },
    {
      icon: <Star className="w-12 h-12 text-rose-600" />,
      title: "Quality Education",
      description: "Top-ranked universities with excellent academic standards"
    }
  ];

  const statistics = [
    { number: "200+", label: "Partner Universities" },
    { number: "50,000+", label: "International Students" },
    { number: "90%", label: "Placement Rate" },
    { number: "40+", label: "Countries Represented" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "Nigeria",
      quote: "Studying in India has been a life-changing experience. The quality of education and cultural exposure is unmatched.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Ahmed Al-Sayed",
      country: "Oman",
      quote: "The affordable education and world-class facilities made India the perfect choice for my medical studies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Grace Muthoni",
      country: "Kenya",
      quote: "The diverse cultural experience and quality education have exceeded my expectations.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose India for Your Education?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Discover world-class education, rich cultural heritage, and unmatched career opportunities
            at a fraction of the cost of Western universities.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-rose-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Student Life in India</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Campus Life</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Modern accommodation facilities</li>
                <li>• International student communities</li>
                <li>• Sports and recreation centers</li>
                <li>• Cultural events and festivals</li>
                <li>• Student clubs and organizations</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Academic Support</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Dedicated international student office</li>
                <li>• Language support programs</li>
                <li>• Research opportunities</li>
                <li>• Mentorship programs</li>
                <li>• Career guidance services</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cultural Experience</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Cultural integration programs</li>
                <li>• Local language classes</li>
                <li>• Festival celebrations</li>
                <li>• Cultural exchange events</li>
                <li>• International food festivals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Let us help you achieve your academic dreams in India</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              Apply Now
            </Link>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyStudyIndia;