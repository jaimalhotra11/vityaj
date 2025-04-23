import React, { useState } from 'react';
import { MapPin, Download, Phone, GraduationCap, BookOpen, FileText } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const testimonials = [
    {
      name: "Rahul Verma",
      country: "India",
      course: "B.Tech Computer Science",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "SRM's industry partnerships and practical learning approach gave me a significant advantage in my career."
    },
    {
      name: "Emily Chen",
      country: "Singapore",
      course: "MBBS",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The medical facilities and experienced faculty at SRM have prepared me exceptionally well for my future in healthcare."
    }
  ];

  const courses = [
    { name: "Engineering & Technology", duration: "4 years", description: "Wide range of engineering programs including Computer Science, Mechanical, Electronics, and more." },
    { name: "Medicine & Health Sciences", duration: "4-5.5 years", description: "Comprehensive medical programs including MBBS, Dental Sciences, and Allied Health Sciences." },
    { name: "Management Studies", duration: "2-3 years", description: "Business administration and management programs with focus on modern business practices." },
    { name: "Science & Humanities", duration: "3-4 years", description: "Programs in basic sciences, arts, and humanities fostering research and innovation." },
    { name: "Law", duration: "3-5 years", description: "Various law programs preparing students for diverse legal careers." },
    { name: "Agricultural Sciences", duration: "4 years", description: "Programs focusing on modern agricultural practices and sustainable farming." }
  ];

  const overviewDetails = {
    highlights: [
      "Over 52,000 full-time students across all campuses",
      "More than 3,200 faculty members",
      "Multiple campuses across India",
      "State-of-the-art research facilities",
      "Strong industry partnerships",
      "Global academic collaborations",
      "Excellent placement record"
    ],
    campuses: [
      "Kattankulathur Campus - Chennai",
      "Ramapuram Campus - Chennai",
      "Vadapalani Campus - Chennai",
      "Tiruchirappalli Campus - Tamil Nadu",
      "Modinagar Campus - Near Delhi NCR",
      "Sonepat Campus - Near Delhi NCR",
      "Amaravati Campus - Andhra Pradesh",
      "Gangtok Campus - Sikkim"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">SRM Institute of Science and Technology</h1>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              <FileText className="w-4 h-4" />
              Apply Now
            </button>
            <button className="flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-lg border border-green-600 hover:bg-green-50 transition">
              <Download className="w-4 h-4" />
              Brochure
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <Phone className="w-4 h-4" />
              Contact Admissions
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-8 flex-grow">
          {/* Left Column - Overview & Photos */}
          <div className="col-span-2 space-y-6">
            {/* Photos Section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
                  alt="SRM Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">World-Class Infrastructure</p>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
                  alt="SRM Students"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Diverse Student Community</p>
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 rounded-lg font-medium text-lg ${
                    activeTab === 'overview' ? 'bg-green-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-lg ${
                    activeTab === 'courses' ? 'bg-green-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  Programs
                </button>
              </div>

              <div className="space-y-6 overflow-auto max-h-[500px] pr-4">
                {activeTab === 'overview' ? (
                  <>
                    <div className="border-l-4 border-green-600 pl-4 py-2">
                      <p className="text-gray-700 text-lg">
                        SRM Institute of Science and Technology is one of the top ranking universities in India, 
                        offering a wide range of undergraduate, postgraduate and doctoral programs across six faculties. 
                        With over 52,000 students and 3,200 faculty members, SRM provides world-class education across 
                        multiple campuses in India.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <p className="text-lg">Multiple Campuses Across India</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-3">University Highlights</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                        {overviewDetails.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Campuses</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                        {overviewDetails.campuses.map((campus, index) => (
                          <li key={index}>{campus}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg mb-6">
                      SRM offers a comprehensive range of programs across six major faculties: Engineering & Technology, 
                      Management, Medicine & Health Sciences, Science & Humanities, Law, and Agricultural Sciences. 
                      Our programs are designed to meet global standards and industry requirements.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {courses.map((course) => (
                        <div key={course.name} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-xl text-gray-800 mb-1">{course.name}</h3>
                              <p className="text-md text-green-600 mb-3">Duration: {course.duration}</p>
                              <p className="text-gray-700">{course.description}</p>
                            </div>
                            <button className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm hover:bg-green-200 transition">
                              Program Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Testimonials */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Student Testimonials</h2>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.country}</p>
                      <p className="text-sm text-green-600">{testimonial.course}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Research Excellence</h3>
              <p className="text-gray-700">
                SRM is committed to advancing research across disciplines, with state-of-the-art 
                facilities and collaborations with leading global institutions.
              </p>
            </div>

            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Industry Connect</h3>
              <p className="text-gray-700">
                Our strong industry partnerships ensure that students get practical exposure 
                and excellent placement opportunities across various sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;