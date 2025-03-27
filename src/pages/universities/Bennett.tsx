import React, { useState } from 'react';
import { MapPin, Download, Phone, GraduationCap, BookOpen } from 'lucide-react';

function Bennett() {
  const [activeTab, setActiveTab] = useState('overview');

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA",
      course: "B.Tech Computer Science",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Bennett University provided me with incredible opportunities for innovation and practical learning."
    },
    {
      name: "Mohammed Al-Rashid",
      country: "UAE",
      course: "MBA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The futuristic campus and world-class facilities at Bennett have transformed my educational journey."
    }
  ];

  const courses = [
    { name: "B.Tech in AI", duration: "4 years", description: "Comprehensive program focusing on artificial intelligence, machine learning, and advanced computing technologies." },
    { name: "B.Tech in Computer Science", duration: "4 years", description: "Cutting-edge program covering programming, algorithms, data structures, and innovative software development." },
    { name: "BBA", duration: "3 years", description: "Business administration program that develops management and entrepreneurial skills with practical industry exposure." },
    { name: "BA/BJ in Mass Communication", duration: "3 years", description: "Industry-oriented program covering various aspects of media, journalism, and mass communication." },
    { name: "LLB", duration: "3 years", description: "Law program designed to produce legal professionals with strong analytical and advocacy skills." },
    { name: "MBA", duration: "2 years", description: "Advanced business program with focus on leadership, strategy, and global business practices." }
  ];

  const overviewDetails = {
    highlights: [
      "Established in August 2016 by the 178-year-old Bennett, Coleman and Co. Ltd group",
      "Futuristic campus spread across 68 acres",
      "More than 11,500 students",
      "95%+ faculty with Ph.D. qualifications",
      "More than 90 International collaborations",
      "More than 20 Corporate collaborations",
      "Located just 35 km from national capital Delhi"
    ],
    infrastructure: [
      "State-of-the-art laboratories for practical learning",
      "Centre for Innovation & Entrepreneurship (CIE)",
      "Centre of Executive Education (CEE)",
      "Modern library with extensive resources",
      "Excellent sporting facilities",
      "Well-designed residential facilities",
      "Hi-tech classrooms for innovative teaching"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-800">Bennett University</h1>
          </div>
          <div className="flex gap-4">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              Apply Now
            </button>
            <button className="flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg border border-purple-600 hover:bg-purple-50 transition">
              <Download className="w-4 h-4" />
              Brochure
            </button>
            <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              <Phone className="w-4 h-4" />
              Free Counselling
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
                  alt="Bennett Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Futuristic 68-acre Campus</p>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
                  alt="Students at Bennett"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Innovation-Focused Education</p>
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 rounded-lg font-medium text-lg ${
                    activeTab === 'overview' ? 'bg-purple-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-lg ${
                    activeTab === 'courses' ? 'bg-purple-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  Courses
                </button>
              </div>

              <div className="space-y-6 overflow-auto max-h-[500px] pr-4">
                {activeTab === 'overview' ? (
                  <>
                    <div className="border-l-4 border-purple-600 pl-4 py-2">
                      <p className="text-gray-700 text-lg">
                        Bennett University has been established in August, 2016 in the beautiful city of Greater Noida, 
                        just 35 km away from the national capital Delhi, by the 178 years old Bennett, Coleman and Co. Ltd group. 
                        The university has a futuristic campus spread across 68 acres.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <p className="text-lg">Greater Noida, Uttar Pradesh, India (35 km from Delhi)</p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold text-purple-800 mb-3">University Highlights</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                        {overviewDetails.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">Campus Infrastructure</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                        {overviewDetails.infrastructure.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold text-green-800 mb-3">Innovation & Entrepreneurship</h3>
                      <p className="text-gray-700">
                        The University fosters a proactive environment of Innovation and Entrepreneurship, while enhancing 
                        skills in all areas of higher education through the internationally acclaimed Centers of Excellence 
                        such as Centre for Innovation & Entrepreneurship (CIE) and Centre of Executive Education (CEE).
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg mb-6">
                      The university offers Undergraduate courses in disciplines like AI, Computer Science Engineering, 
                      Electronics & Communication Engineering, Biotechnology, Mass Communication, Business Administration, 
                      LLB and much more & Postgraduate courses in Mass Communication, LLM, MBA, MCA, MTech+Ph.D and much more.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {courses.map((course) => (
                        <div key={course.name} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-xl text-gray-800 mb-1">{course.name}</h3>
                              <p className="text-md text-purple-600 mb-3">Duration: {course.duration}</p>
                              <p className="text-gray-700">{course.description}</p>
                            </div>
                            <button className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm hover:bg-purple-200 transition">
                              More Details
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
                      <p className="text-sm text-purple-600">{testimonial.course}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Faculty Excellence</h3>
              <p className="text-gray-700">
                Bennett University prides itself on academic excellence with more than 95% of faculty 
                members holding Ph.D. qualifications from prestigious institutions around the world.
              </p>
            </div>

            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Global & Industry Connections</h3>
              <p className="text-gray-700">
                With more than 90 international collaborations and 20+ corporate partnerships, 
                Bennett University provides students with global exposure and industry-relevant education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bennett;