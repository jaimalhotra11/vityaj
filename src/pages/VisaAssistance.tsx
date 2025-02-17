import React from 'react';
import { Plane, FileCheck, Calendar, Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisaAssistance = () => {
  const services = [
    {
      icon: <FileCheck className="w-12 h-12 text-rose-600" />,
      title: "Document Preparation",
      description: "Expert assistance in preparing all required visa documents"
    },
    {
      icon: <Calendar className="w-12 h-12 text-rose-600" />,
      title: "Application Timeline",
      description: "Strategic planning of visa application timeline"
    },
    {
      icon: <Users className="w-12 h-12 text-rose-600" />,
      title: "Interview Preparation",
      description: "Mock interviews and preparation for visa interviews"
    },
    {
      icon: <Clock className="w-12 h-12 text-rose-600" />,
      title: "Fast Processing",
      description: "Expedited visa processing support when possible"
    }
  ];

  const requirements = [
    {
      title: "Essential Documents",
      items: [
        "Valid Passport",
        "Admission Letter",
        "Financial Statements",
        "Academic Transcripts",
        "English Proficiency Test Results",
        "Medical Insurance"
      ]
    },
    {
      title: "Financial Requirements",
      items: [
        "Bank Statements",
        "Sponsorship Letter",
        "Scholarship Letter (if applicable)",
        "Proof of Income",
        "Financial Undertaking",
        "Tuition Fee Receipt"
      ]
    },
    {
      title: "Additional Documents",
      items: [
        "Passport Size Photos",
        "Statement of Purpose",
        "CV/Resume",
        "Accommodation Proof",
        "Travel Insurance",
        "Police Clearance"
      ]
    }
  ];

  const tips = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Do's",
      items: [
        "Apply well in advance",
        "Double-check all documents",
        "Maintain consistent information",
        "Keep document copies",
        "Follow up regularly"
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-red-600" />,
      title: "Don'ts",
      items: [
        "Submit incomplete applications",
        "Provide false information",
        "Miss appointment dates",
        "Ignore document requirements",
        "Rush the process"
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <Plane className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Visa Assistance
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            Expert guidance through every step of your student visa application process
          </p>
          <Link
            to="/contact"
            className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors inline-flex items-center gap-2"
          >
            Get Visa Support
            <Plane className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Visa Services</h2>
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

      {/* Requirements */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Visa Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-rose-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Visa Application Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tips.map((tip, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  {tip.icon}
                  <h3 className="text-xl font-semibold">{tip.title}</h3>
                </div>
                <ul className="space-y-3">
                  {tip.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-rose-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Visa Assistance?</h2>
          <p className="text-xl mb-8">Our experts are here to help you with your visa application</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              Contact Us
            </Link>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors">
              Download Visa Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisaAssistance;