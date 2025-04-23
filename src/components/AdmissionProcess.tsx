import React from 'react';
import { UserPlus, Send, FileCheck2, Plane, Building2, FileText, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionProcess = () => {
  const processSteps = [
    {
      icon: <UserPlus className="w-12 h-12 text-rose-600" />,
      title: "Register with Vityaz Global",
      description: "Get your unique SLI ID and begin your journey",
      details: [
        "Complete online registration",
        "Receive dedicated student advisor",
        "Get personalized consultation",
        "Access student portal"
      ]
    },
    {
      icon: <Send className="w-12 h-12 text-rose-600" />,
      title: "University Application",
      description: "We submit applications to your chosen universities",
      details: [
        "Course selection guidance",
        "Document preparation",
        "Application submission",
        "Follow-up management"
      ]
    },
    {
      icon: <FileCheck2 className="w-12 h-12 text-rose-600" />,
      title: "Offer Letter",
      description: "Receive and accept your university offer",
      details: [
        "Offer letter processing",
        "Acceptance guidance",
        "Document verification",
        "Pre-enrollment support"
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-rose-600" />,
      title: "Visa Application",
      description: "Complete assistance with student visa process",
      details: [
        "Visa documentation",
        "Application preparation",
        "Interview preparation",
        "Status tracking"
      ]
    },
    {
      icon: <Building2 className="w-12 h-12 text-rose-600" />,
      title: "Tuition Payment",
      description: "Secure transfer of fees to university",
      details: [
        "Payment guidance",
        "Transaction support",
        "Receipt verification",
        "Financial advice"
      ]
    },
    {
      icon: <Plane className="w-12 h-12 text-rose-600" />,
      title: "Travel & Arrival",
      description: "Complete post-arrival assistance",
      details: [
        "FRRO registration",
        "Campus orientation",
        "Local setup support",
        "Documentation assistance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block bg-rose-100 text-rose-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Simple 6-Step Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-rose-600 to-gray-900">
            Your Journey to Study in India
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow our streamlined admission process designed to make your educational journey smooth and hassle-free. Our expert team guides you at every step.
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-2xl font-bold text-rose-600">
                  {index + 1}
                </div>
                <div className="mb-6 mt-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                      <div className="w-1.5 h-1.5 bg-rose-600 rounded-full"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                {index === 0 && (
                  <div className="mt-6">
                    <Link
                      to="/apply"
                      className="inline-flex items-center justify-center w-full gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-rose-600 to-rose-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Start your application process today and take the first step towards your dream education in India
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-rose-600 transition-all font-bold text-lg transform hover:-translate-y-1 duration-300"
            >
              Talk to an Advisor
              <Users className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;