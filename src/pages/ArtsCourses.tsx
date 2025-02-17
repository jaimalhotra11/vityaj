import React from 'react';

const ArtsCourses = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-6 animate-fade-in">
          Arts & Humanities Courses
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Explore our diverse arts and humanities programs that foster creativity, critical thinking, and cultural understanding.
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
              Literature & Languages
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Comprehensive programs in world literature and language studies.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Duration: 3 years</li>
              <li>Specializations: English Literature, Comparative Literature, Linguistics</li>
              <li>Study abroad opportunities</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Visual & Performing Arts
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Hands-on training in fine arts, theater, and music performance.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Duration: 4 years</li>
              <li>Specializations: Painting, Sculpture, Theater Arts, Music</li>
              <li>Access to studios and performance spaces</li>
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
                Introduction to Arts, History of Art, Language Studies, Creative Writing
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-rose-600 dark:text-rose-400 mb-2">Core Studies</h4>
              <p className="text-gray-600 dark:text-gray-400">
                World Literature, Visual Arts Techniques, Theater Production, Music Theory
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-rose-600 dark:text-rose-400 mb-2">Advanced Studies</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Specialization in chosen field, Thesis Project, Internships, Exhibitions
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
            <li>Minimum 50% marks in 10+2 (any stream)</li>
            <li>Portfolio or audition for Visual & Performing Arts programs</li>
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
              Literature & Languages Careers
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Work as writers, editors, translators, or educators in literary fields.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Visual & Performing Arts Careers
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Pursue careers as artists, performers, directors, or art curators.
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
              Art Studios
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              State-of-the-art studios for painting, sculpture, and mixed media.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Performance Spaces
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dedicated theaters and music halls for student performances.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              Research Libraries
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Extensive collections of literature, art history, and cultural studies.
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
              "The literature program helped me develop a deep understanding of world cultures and storytelling."
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">- Ananya Das, Author</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-600 dark:text-gray-400 italic mb-6">
              "The performing arts program gave me the confidence and skills to pursue a career in theater."
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">- Rohan Kapoor, Theater Director</p>
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
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">92%</p>
            <p className="text-gray-600 dark:text-gray-400">Graduation Rate</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">100+</p>
            <p className="text-gray-600 dark:text-gray-400">Faculty Members</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">3000+</p>
            <p className="text-gray-600 dark:text-gray-400">Alumni Network</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <p className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-4">85%</p>
            <p className="text-gray-600 dark:text-gray-400">Employment Rate</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtsCourses;