import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award, Users, Globe, FileCheck, Clock, ArrowRight, Star, Plane, Home, PhoneCall, Wallet, BookOpen, Landmark, MapPin, School, Building, CreditCard, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionFeatures = () => {
  const steps = [
    {
      number: "1",
      icon: <GraduationCap className="w-12 h-12 text-rose-600" />,
      title: "Expert Counseling",
      description: "Personalized guidance for your academic journey",
      benefits: [
        "Top-ranked institutions worldwide",
        "Personalized university matching",
        "Career trajectory planning",
        "Course specialization advice"
      ]
    },
    {
      number: "2",
      icon: <FileCheck className="w-12 h-12 text-rose-600" />,
      title: "Application Excellence",
      description: "Comprehensive application management",
      benefits: [
        "Document authentication",
        "Statement of purpose guidance",
        "Real-time application tracking",
        "98% acceptance rate"
      ]
    },
    {
      number: "3",
      icon: <CreditCard className="w-12 h-12 text-rose-600" />,
      title: "Scholarship Gateway",
      description: "Maximizing financial opportunities",
      benefits: [
        "Scholarship matching system",
        "Financial planning support",
        "Grant application assistance",
        "ROI analysis"
      ]
    },
    {
      number: "4",
      icon: <Plane className="w-12 h-12 text-rose-600" />,
      title: "Global Mobility",
      description: "Seamless travel & visa solutions",
      benefits: [
        "Visa interview preparation",
        "Travel documentation",
        "Arrival coordination",
        "Local orientation"
      ]
    },
    {
      number: "5",
      icon: <Building className="w-12 h-12 text-rose-600" />,
      title: "Housing Solutions",
      description: "Secure accommodation services",
      benefits: [
        "Pre-vetted housing options",
        "Virtual accommodation tours",
        "Lease negotiation support",
        "Safety verification"
      ]
    },
    {
      number: "6",
      icon: <PhoneCall className="w-12 h-12 text-rose-600" />,
      title: "24/7 Concierge",
      description: "Round-the-clock student support",
      benefits: [
        "Emergency assistance",
        "Cultural integration",
        "Healthcare guidance",
        "Local support network"
      ]
    }
  ];

  const stats = [
    { value: "15K+", label: "Students Placed" },
    { value: "98%", label: "Success Rate" },
    { value: "200+", label: "Partner Universities" },
    { value: "24/7", label: "Support Available" }
  ];

  const additionalServices = [
    {
      icon: <Globe className="w-8 h-8 text-rose-600" />,
      title: "Cultural Integration",
      description: "Comprehensive cultural orientation and adaptation programs"
    },
    {
      icon: <School className="w-8 h-8 text-rose-600" />,
      title: "Academic Excellence",
      description: "Ongoing mentorship and academic support services"
    },
    {
      icon: <Users className="w-8 h-8 text-rose-600" />,
      title: "Global Network",
      description: "Connect with a worldwide community of international students"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="bg-rose-100 text-rose-600 text-sm font-semibold px-4 py-2 rounded-full">
              Trusted by 15,000+ Students Worldwide
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-rose-600 to-gray-900">
            Your Gateway to Academic Excellence
          </h1>
          <p className="text-xl text-rose-600 font-semibold mb-8">
            Comprehensive Support Services – 100% Free, 100% Committed
          </p>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-rose-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Vityaz Global, we transform educational aspirations into reality. Our comprehensive support system ensures a seamless journey from application to graduation, backed by industry expertise and unwavering commitment to student success.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-rose-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Steps Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} 
                 className="group relative bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                {step.number}
              </div>
              <div className="mb-6 mt-6 transform group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.description}</p>
              <ul className="space-y-3">
                {step.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                    <Check className="w-5 h-5 text-rose-600 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-rose-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Comprehensive Support Ecosystem
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Beyond academics, we ensure your complete well-being and success throughout your educational journey
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} 
                   className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6 bg-rose-50 p-4 rounded-2xl w-fit">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-rose-600 to-rose-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Begin Your Global Education Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards your dream education with our expert guidance
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
            >
              Start Application
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-rose-600 transition-all font-bold text-lg transform hover:-translate-y-1 duration-300"
            >
              Book Free Consultation
              <Users className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionFeatures;