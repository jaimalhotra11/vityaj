import React from 'react';

const ManagementCourses = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-6 animate-fade-in">
          Management Courses
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Explore our diverse management programs designed to develop future business leaders. Our courses emphasize practical skills and global perspectives.
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
              MBA Program
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Comprehensive business administration program with various specializations.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Duration: 2 years</li>
              <li>Specializations: Finance, Marketing, HR, Operations</li>
              <li>Eligibility: Bachelor's degree with minimum 50% marks</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Executive Education
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Short-term programs for working professionals to enhance their leadership skills.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Duration: 3-6 months</li>
              <li>Focus: Leadership, Strategy, Innovation</li>
              <li>Eligibility: Minimum 5 years of work experience</li>
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
            Core and Elective Courses
          </h3>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-rose-600 dark:text-rose-400 mb-2">Core Courses</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Business Strategy, Financial Management, Marketing Management, Organizational Behavior
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-rose-600 dark:text-rose-400 mb-2">Elective Courses</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Digital Marketing, Entrepreneurship, Supply Chain Management, International Business
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
            <li>Bachelor's degree with minimum 50% marks</li>
            <li>Valid GMAT/CAT/XAT score for MBA admissions</li>
            <li>For Executive Education: Minimum 5 years of work experience</li>
            <li>English language proficiency (IELTS/TOEFL for international students)</li>
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
              Corporate Roles
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Work in leadership roles across industries such as finance, marketing, operations, and consulting.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Entrepreneurship
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Start your own business or venture with the skills and knowledge gained from our programs.
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
              Business Labs
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              State-of-the-art labs for data analysis, market research, and business simulations.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Innovation Hub
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A dedicated space for brainstorming, prototyping, and developing innovative business ideas.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Career Services
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dedicated support for internships, placements, and career development.
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
              "The MBA program provided me with the skills and network to excel in my career. The faculty and facilities are top-notch."
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">- Priya Mehta, Class of 2019</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-600 dark:text-gray-400 italic mb-6">
              "The Executive Education program helped me transition into a leadership role with confidence and clarity."
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">- Rohan Desai, Class of 2021</p>
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
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">90%</p>
            <p className="text-gray-600 dark:text-gray-400">Placement Rate</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">200+</p>
            <p className="text-gray-600 dark:text-gray-400">Industry Partners</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">3000+</p>
            <p className="text-gray-600 dark:text-gray-400">Alumni Network</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">85%</p>
            <p className="text-gray-600 dark:text-gray-400">Graduation Rate</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementCourses;