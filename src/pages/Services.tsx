import React from 'react';
import { FileCheck, Plane, Building2, GraduationCap, Globe, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <FileCheck className="w-12 h-12 text-rose-600" />,
      title: "Application Support",
      description: "Complete assistance with university applications, documentation, and admission process"
    },
    {
      icon: <Plane className="w-12 h-12 text-rose-600" />,
      title: "Visa Assistance",
      description: "Expert guidance for student visa application and documentation"
    },
    {
      icon: <Building2 className="w-12 h-12 text-rose-600" />,
      title: "Accommodation",
      description: "Safe and comfortable housing arrangements near your university"
    },
    {
      icon: <Globe className="w-12 h-12 text-rose-600" />,
      title: "Travel Support",
      description: "Airport pickup and travel arrangements in your study destination"
    },
    {
      icon: <Users className="w-12 h-12 text-rose-600" />,
      title: "Cultural Integration",
      description: "Programs to help you adapt to the new culture and environment"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-rose-600" />,
      title: "Career Guidance",
      description: "Professional development and career planning support"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Free Consultation",
      description: "Meet our education experts to discuss your goals and options"
    },
    {
      step: 2,
      title: "University Selection",
      description: "Choose the best university based on your profile and preferences"
    },
    {
      step: 3,
      title: "Application Process",
      description: "Complete documentation and university applications"
    },
    {
      step: 4,
      title: "Visa Processing",
      description: "Guidance through the student visa application process"
    },
    {
      step: 5,
      title: "Pre-Departure",
      description: "Preparation for your journey including accommodation arrangements"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Comprehensive support for your entire educational journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex gap-6 mb-12 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">24/7 Student Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Support Network</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access to support teams across multiple countries
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Counselors</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Personal education counselor throughout your journey
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Office Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                On-ground support in your study destination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Book a free consultation with our education experts</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
              Book Consultation
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;