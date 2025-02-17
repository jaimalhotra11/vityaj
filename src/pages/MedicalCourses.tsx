import React from 'react';

const MedicalCourses = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-6 animate-fade-in">
          Medical Courses
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Explore our comprehensive range of medical courses designed to prepare you for a successful career in healthcare. Our programs are recognized globally and offer state-of-the-art facilities and experienced faculty.
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
              MBBS Program
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our flagship 5.5-year program offers world-class medical education with international exposure. The curriculum combines theoretical knowledge with practical clinical training.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Duration: 5.5 years (4.5 years academic + 1 year internship)</li>
              <li>Eligibility: 10+2 with Physics, Chemistry, Biology</li>
              <li>Recognition: MCI, WHO, and international medical councils</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Postgraduate Specializations
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Advanced training in various medical specialties with hands-on clinical experience. Choose from our MD/MS programs in:
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Internal Medicine</li>
              <li>Pediatrics</li>
              <li>Obstetrics & Gynecology</li>
              <li>General Surgery</li>
              <li>Orthopedics</li>
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
            Phase-wise Learning
          </h3>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-rose-600 dark:text-rose-400 mb-2">Pre-Clinical Phase (Year 1-2)</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Anatomy, Physiology, Biochemistry, and basic medical sciences
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-rose-600 dark:text-rose-400 mb-2">Para-Clinical Phase (Year 3)</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Pathology, Microbiology, Pharmacology, and Forensic Medicine
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-rose-600 dark:text-rose-400 mb-2">Clinical Phase (Year 4-5)</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Medicine, Surgery, Obstetrics & Gynecology, Pediatrics, and community medicine
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
            <li>Minimum 50% marks in 10+2 with Physics, Chemistry, and Biology</li>
            <li>Valid NEET-UG score for MBBS admissions</li>
            <li>For PG courses: MBBS degree from recognized university</li>
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
              Clinical Practice
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Work in hospitals, clinics, or private practice in various medical specialties
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Research & Academia
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Pursue medical research or teaching positions in medical colleges
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
              State-of-the-art laboratories for anatomy, pathology, and microbiology
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Simulation Center
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              High-fidelity simulation for clinical skills training
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Research Center
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dedicated research facilities with modern equipment
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
              "The comprehensive curriculum and hands-on training prepared me exceptionally well for my medical career."
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">- Dr. Ananya Sharma, Class of 2018</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-600 dark:text-gray-400 italic mb-6">
              "The faculty's dedication and state-of-the-art facilities made my learning experience truly exceptional."
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">- Dr. Rajesh Patel, Class of 2020</p>
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
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">95%</p>
            <p className="text-gray-600 dark:text-gray-400">Graduation Rate</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">100+</p>
            <p className="text-gray-600 dark:text-gray-400">Faculty Members</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">5000+</p>
            <p className="text-gray-600 dark:text-gray-400">Alumni Network</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">90%</p>
            <p className="text-gray-600 dark:text-gray-400">Employment Rate</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalCourses;