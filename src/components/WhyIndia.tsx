import React from 'react';
import { DollarSign, Award, Briefcase, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyIndia = () => {
  const comparisons = [
    {
      country: "USA",
      tuition: "$50,000/year",
      living: "$20,000/year",
      total: "$70,000/year"
    },
    {
      country: "UK",
      tuition: "$45,000/year",
      living: "$18,000/year",
      total: "$63,000/year"
    },
    {
      country: "India",
      tuition: "$7,000/year",
      living: "$5,000/year",
      total: "$12,000/year",
      highlight: true
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Affordable Education",
      description: "Save up to 80% on education costs compared to Western countries"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Global Recognition",
      description: "Degrees recognized worldwide with high academic standards"
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Career Opportunities",
      description: "Access to global job markets and internship programs"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Cultural Experience",
      description: "Rich cultural heritage and diverse student community"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Study in India?</h2>
          <p className="text-xl text-gray-600">Your trusted partner in international education</p>
        </div>
        
        {/* Cost Comparison */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Cost Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparisons.map((item, index) => (
              <div 
                key={index}
                className={`rounded-xl p-6 ${
                  item.highlight 
                    ? 'bg-rose-600 text-white transform scale-105' 
                    : 'bg-gray-50'
                }`}
              >
                <h4 className="text-xl font-bold mb-4">{item.country}</h4>
                <div className="space-y-2">
                  <p>Tuition: {item.tuition}</p>
                  <p>Living Expenses: {item.living}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-bold">Total: {item.total}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/apply"
              className="inline-flex items-center justify-center bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/apply"
            className="inline-flex items-center justify-center bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyIndia;