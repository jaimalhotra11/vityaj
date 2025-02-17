import React from 'react';

const EngineeringCourses = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-6 animate-fade-in">
          Engineering Courses
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Discover our cutting-edge engineering programs designed to shape the innovators of tomorrow. Our courses combine theoretical knowledge with practical applications, preparing students for successful careers in various engineering disciplines.
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
              Computer Science & Engineering
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Comprehensive program covering software development, AI, machine learning, and data science.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Duration: 4 years</li>
              <li>Specializations: AI, Cybersecurity, Cloud Computing</li>
              <li>Industry certifications included</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Mechanical Engineering
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Hands-on training in design, manufacturing, and mechanical systems with modern CAD tools.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Duration: 4 years</li>
              <li>Specializations: Robotics, Automotive, Aerospace</li>
              <li>State-of-the-art workshops</li>
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
                Mathematics, Physics, Programming Fundamentals, Engineering Drawing
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-rose-600 dark:text-rose-400 mb-2">Core Engineering</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Data Structures, Thermodynamics, Material Science, Circuit Theory
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-rose-600 dark:text-rose-400 mb-2">Advanced Studies</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Machine Learning, Robotics, Advanced Manufacturing, Cloud Computing
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
            <li>Minimum 50% marks in 10+2 with Physics, Chemistry, and Mathematics</li>
            <li>Valid JEE Main score for admissions</li>
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
              Software Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Work as software engineers, data scientists, or AI specialists in top tech companies
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Mechanical Design
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Pursue careers in automotive, aerospace, or manufacturing industries
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
              State-of-the-art laboratories for electronics, robotics, and material testing
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Innovation Center
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dedicated space for student projects and startup incubation
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Research Facilities
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Advanced research labs with modern equipment and tools
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
              "The hands-on projects and industry exposure prepared me exceptionally well for my career at Google."
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">- Priya Sharma, Software Engineer</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-600 dark:text-gray-400 italic mb-6">
              "The mechanical engineering program gave me the skills to work on cutting-edge automotive technologies."
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">- Rajesh Patel, Automotive Engineer</p>
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
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">96%</p>
            <p className="text-gray-600 dark:text-gray-400">Placement Rate</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">150+</p>
            <p className="text-gray-600 dark:text-gray-400">Industry Partners</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">5000+</p>
            <p className="text-gray-600 dark:text-gray-400">Alumni Network</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">80+</p>
            <p className="text-gray-600 dark:text-gray-400">Research Projects</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineeringCourses;