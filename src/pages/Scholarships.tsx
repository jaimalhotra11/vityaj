import React from 'react';
import { Award, DollarSign, GraduationCap, FileText, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Scholarships = () => {
  const scholarships = [
    {
      title: "Merit Scholarship",
      amount: "Up to 50% tuition fee waiver",
      eligibility: "Students with 90%+ in academics",
      deadline: "August 30, 2024",
      icon: <Award className="w-12 h-12 text-rose-600" />
    },
    {
      title: "Early Bird Scholarship",
      amount: "25% tuition fee waiver",
      eligibility: "Applications before April 2024",
      deadline: "April 15, 2024",
      icon: <Calendar className="w-12 h-12 text-rose-600" />
    },
    {
      title: "Sports Excellence Scholarship",
      amount: "30% tuition fee waiver",
      eligibility: "National level sports achievers",
      deadline: "September 15, 2024",
      icon: <GraduationCap className="w-12 h-12 text-rose-600" />
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <DollarSign className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Scholarships
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            Making quality education accessible through our comprehensive scholarship programs
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/apply"
              className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors flex items-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              Contact Scholarship Office
            </Link>
          </div>
        </div>
      </section>

      {/* Scholarship Cards */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                <div className="mb-6">{scholarship.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{scholarship.title}</h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                  <p className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-rose-600" />
                    {scholarship.amount}
                  </p>
                  <p className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-rose-600" />
                    {scholarship.eligibility}
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-rose-600" />
                    Deadline: {scholarship.deadline}
                  </p>
                </div>
                <Link
                  to="/apply"
                  className="block w-full bg-rose-600 text-white text-center py-2 rounded-lg hover:bg-rose-700 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Scholarship Requirements</h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Academic Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Minimum 80% in qualifying examination</li>
                  <li>Strong academic record in previous studies</li>
                  <li>Valid standardized test scores (if applicable)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Academic transcripts</li>
                  <li>Letter of recommendation</li>
                  <li>Statement of purpose</li>
                  <li>Financial documents</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Selection Process</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Application review</li>
                  <li>Academic merit assessment</li>
                  <li>Interview (if required)</li>
                  <li>Final selection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">How do I apply for a scholarship?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete the online application form and submit all required documents before the deadline.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Can I apply for multiple scholarships?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can apply for multiple scholarships if you meet the eligibility criteria.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">When will I know the results?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Results are typically announced within 4-6 weeks after the application deadline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Application Today</h2>
          <p className="text-xl mb-8">Don't miss out on the opportunity to receive financial support for your education</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              Apply for Scholarship
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarships;