import React from 'react';
import { GraduationCap, Award, Users, Globe, FileCheck, Clock, ArrowRight, Star, Plane, Home, PhoneCall, Wallet, BookOpen, Landmark, MapPin, School, Building, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionFeatures = () => {
  const steps = [
    {
      number: "1",
      icon: <GraduationCap className="w-12 h-12 text-rose-600" />,
      title: "Free Expert Counseling",
      description: "Personalized guidance for university and course selection",
      benefits: [
        "Top-ranked institutions",
        "Leading universities",
        "Course selection guidance",
        "Career path planning"
      ]
    },
    {
      number: "2",
      icon: <FileCheck className="w-12 h-12 text-rose-600" />,
      title: "Free Application Support",
      description: "Complete documentation and submission assistance",
      benefits: [
        "Document verification",
        "Error-free applications",
        "Application tracking",
        "Increased success rate"
      ]
    },
    {
      number: "3",
      icon: <CreditCard className="w-12 h-12 text-rose-600" />,
      title: "Free Scholarship Support",
      description: "Financial planning and scholarship assistance",
      benefits: [
        "Scholarship applications",
        "Tuition fee guidance",
        "Cost-effective planning",
        "Financial advice"
      ]
    },
    {
      number: "4",
      icon: <Plane className="w-12 h-12 text-rose-600" />,
      title: "Visa & Travel Support",
      description: "Complete visa and travel assistance",
      benefits: [
        "Visa application help",
        "Flight booking support",
        "Airport pickup service",
        "Smooth transition"
      ]
    },
    {
      number: "5",
      icon: <Building className="w-12 h-12 text-rose-600" />,
      title: "Free Accommodation Help",
      description: "Safe and affordable housing assistance",
      benefits: [
        "Student hostel finding",
        "Apartment assistance",
        "Cost-effective options",
        "Location guidance"
      ]
    },
    {
      number: "6",
      icon: <PhoneCall className="w-12 h-12 text-rose-600" />,
      title: "24/7 Student Support",
      description: "Round-the-clock post-arrival assistance",
      benefits: [
        "University registration",
        "Local SIM cards",
        "Bank account setup",
        "City orientation"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Globe className="w-8 h-8 text-rose-600" />,
      title: "Cultural Integration",
      description: "Help adapting to Indian culture and lifestyle"
    },
    {
      icon: <School className="w-8 h-8 text-rose-600" />,
      title: "Academic Support",
      description: "Ongoing assistance with academic matters"
    },
    {
      icon: <Users className="w-8 h-8 text-rose-600" />,
      title: "Student Community",
      description: "Connect with other international students"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Why Thousands of Students Trust Vityaz Global
          </h1>
          <p className="text-xl text-rose-600 font-semibold mb-8">
            100% Free Services for Students – From Application to Arrival
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Vityaz Global, we believe your dreams should have no barriers. That's why we offer completely free admission assistance, pre-arrival and post-arrival services, ensuring you focus on your education while we handle everything else.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-rose-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold transform rotate-12 hover:rotate-0 transition-transform duration-300">
                {step.number}
              </div>
              <div className="mb-6 mt-6">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
              <ul className="space-y-3">
                {step.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <Star className="w-5 h-5 text-rose-600 flex-shrink-0" />
                    <span className="text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Extra Support Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-rose-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-4 bg-white p-3 rounded-full w-fit">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your Journey to Study in India</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert guidance and support throughout your educational journey - 100% Free
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg hover:shadow-xl"
            >
              Start Your Application
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-rose-500 transition-colors font-bold text-lg"
            >
              Free Counseling Session
              <Users className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionFeatures;