import React from 'react';
import { GraduationCap, Award, Users, Globe, FileCheck, Clock, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionFeatures = () => {
  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 text-rose-600" />,
      title: "Expert Admission Guidance",
      description: "Personalized support throughout your application journey",
      benefits: [
        "Application strategy planning",
        "Document verification",
        "University selection guidance",
        "Interview preparation"
      ]
    },
    {
      icon: <Award className="w-12 h-12 text-rose-600" />,
      title: "Global Recognition",
      description: "Study at internationally accredited universities",
      benefits: [
        "WHO recognized degrees",
        "International accreditations",
        "Global alumni network",
        "Worldwide practice opportunities"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-rose-600" />,
      title: "Dedicated Support Team",
      description: "24/7 assistance for all your needs",
      benefits: [
        "Personal counselors",
        "Visa assistance",
        "Accommodation support",
        "Cultural integration help"
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-rose-600" />,
      title: "International Exposure",
      description: "Diverse learning environment and cultural experience",
      benefits: [
        "Multicultural campus life",
        "Language support",
        "Exchange programs",
        "Global networking"
      ]
    }
  ];

  const process = [
    {
      step: 1,
      title: "Free Consultation",
      description: "Meet our experts to discuss your goals and options",
      icon: <Users className="w-8 h-8 text-rose-600" />
    },
    {
      step: 2,
      title: "Document Preparation",
      description: "Get help with application documents and verification",
      icon: <FileCheck className="w-8 h-8 text-rose-600" />
    },
    {
      step: 3,
      title: "University Selection",
      description: "Choose the best university based on your profile",
      icon: <GraduationCap className="w-8 h-8 text-rose-600" />
    },
    {
      step: 4,
      title: "Application Submission",
      description: "Complete application process with expert guidance",
      icon: <Star className="w-8 h-8 text-rose-600" />
    },
    {
      step: 5,
      title: "Visa & Travel Support",
      description: "Comprehensive assistance for visa and travel",
      icon: <Globe className="w-8 h-8 text-rose-600" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Vityaz Global?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your trusted partner in international education with a proven admission process
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Star className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Admission Process */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-12">Admission Process</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Timeline Line */}
              <div className="absolute left-[21px] top-0 h-full w-1 bg-rose-100 dark:bg-gray-700" />
              
              {/* Process Steps */}
              <div className="space-y-8">
                {process.map((step, index) => (
                  <div key={index} className="relative flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-rose-50 dark:bg-gray-700 rounded-full flex items-center justify-center z-10">
                      {step.icon}
                    </div>
                    <div className="flex-grow pt-1">
                      <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ready to start your educational journey with us?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-rose-600 text-rose-600 px-8 py-3 rounded-lg hover:bg-rose-50 dark:hover:bg-gray-800 transition-colors"
            >
              Talk to an Expert
              <Users className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionFeatures;