import React from 'react';
import { FileCheck, ClipboardCheck, GraduationCap, Users, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionSupport = () => {
  const services = [
    {
      icon: <FileCheck className="w-12 h-12 text-rose-600" />,
      title: "Document Preparation",
      description: "Expert assistance in preparing and verifying all required documents for admission"
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-rose-600" />,
      title: "Application Processing",
      description: "End-to-end support in completing and submitting university applications"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-rose-600" />,
      title: "University Selection",
      description: "Personalized guidance in choosing the right university based on your profile"
    },
    {
      icon: <Users className="w-12 h-12 text-rose-600" />,
      title: "Interview Preparation",
      description: "Mock interviews and preparation sessions for university admissions"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Meet with our education experts to discuss your goals and preferences",
      requirements: [
        "Academic transcripts",
        "Standardized test scores",
        "Personal statement draft",
        "CV/Resume"
      ]
    },
    {
      step: 2,
      title: "Profile Evaluation",
      description: "Assessment of academic background and eligibility for chosen programs",
      requirements: [
        "Previous academic records",
        "Language proficiency scores",
        "Extracurricular achievements",
        "Work experience (if any)"
      ]
    },
    {
      step: 3,
      title: "University Selection",
      description: "Shortlisting universities based on your profile and preferences",
      requirements: [
        "Preferred location",
        "Course requirements",
        "Budget considerations",
        "Career goals"
      ]
    },
    {
      step: 4,
      title: "Application Submission",
      description: "Complete application process with all required documents",
      requirements: [
        "Application forms",
        "Statement of purpose",
        "Recommendation letters",
        "Portfolio (if required)"
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Admission Support Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            Comprehensive admission support to help you secure a place in your dream university
          </p>
          <Link
            to="/apply"
            className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors inline-flex items-center gap-2"
          >
            Start Your Application
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Support Services</h2>
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

      {/* Application Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
          <div className="max-w-4xl mx-auto">
            {process.map((step) => (
              <div key={step.step} className="mb-8 last:mb-0">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <ClipboardCheck className="w-4 h-4 text-rose-600" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8">Let our experts guide you through the admission process</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              Apply Now
            </Link>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionSupport;