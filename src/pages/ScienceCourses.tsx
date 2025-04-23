import React from 'react';

const ScienceCourses = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-6 animate-fade-in">
          Science & Technology Courses
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Explore our innovative science and technology programs designed to push the boundaries of knowledge and innovation.
        </p>
        <button className="bg-rose-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-rose-700 transition duration-300 animate-bounce">
          Explore Programs
        </button>
      </div>

      {/* Program Overview Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-8 text-center">
          Program Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Biotechnology
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Cutting-edge program combining biology and technology for medical and industrial applications.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Duration: 4 years</li>
              <li>Specializations: Genetic Engineering, Pharmaceutical Biotechnology</li>
              <li>Industry partnerships for internships</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Data Science
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Comprehensive training in data analysis, machine learning, and artificial intelligence.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Duration: 3 years</li>
              <li>Specializations: Big Data, AI, Machine Learning</li>
              <li>Hands-on projects with real-world datasets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum Details */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-8 text-center">
          Curriculum Structure
        </h2>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-6">
            Year-wise Learning
          </h3>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-rose-600 dark:text-rose-400 mb-2">Foundation Year</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Mathematics, Statistics, Programming Fundamentals, Biology Basics
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-rose-600 dark:text-rose-400 mb-2">Core Studies</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Data Structures, Molecular Biology, Machine Learning, Bioinformatics
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-rose-600 dark:text-rose-400 mb-2">Advanced Studies</h4>
              <p className="text-gray-600 dark:text-gray-400">
                AI in Healthcare, Genetic Engineering, Big Data Analytics, Advanced Algorithms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-8 text-center">
          Admission Requirements
        </h2>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-6">
            Eligibility Criteria
          </h3>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Minimum 50% marks in 10+2 with Physics, Chemistry, and Mathematics/Biology</li>
            <li>Valid entrance exam score (e.g., JEE, NEET, or university-specific test)</li>
            <li>English language proficiency (IELTS/TOEFL for international students)</li>
            <li>Personal interview for final selection</li>
          </ul>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-8 text-center">
          Career Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Biotechnology Careers
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Work in pharmaceuticals, genetic research, or agricultural biotechnology.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Data Science Careers
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Pursue roles as data scientists, AI specialists, or business analysts in top tech companies.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-8 text-center">
          World-Class Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Advanced Labs
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              State-of-the-art laboratories for biotechnology and data science research.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Innovation Hub
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dedicated space for student projects, startups, and collaborative research.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Research Centers
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Advanced research facilities with cutting-edge technology and equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-8 text-center">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-600 dark:text-gray-400 italic mb-6">
              "The biotechnology program gave me the skills to work on groundbreaking research in genetic engineering."
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">- Ananya Singh, Research Scientist</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-600 dark:text-gray-400 italic mb-6">
              "The data science program prepared me for a successful career in AI and machine learning."
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">- Rohan Mehta, Data Scientist</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section>
        <h2 className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-8 text-center">
          By The Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">94%</p>
            <p className="text-gray-600 dark:text-gray-400">Placement Rate</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">120+</p>
            <p className="text-gray-600 dark:text-gray-400">Industry Partners</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">4000+</p>
            <p className="text-gray-600 dark:text-gray-400">Alumni Network</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">70+</p>
            <p className="text-gray-600 dark:text-gray-400">Research Projects</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScienceCourses;