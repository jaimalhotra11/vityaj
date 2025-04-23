import React, { useState } from 'react';
import { MapPin, Download, Phone, GraduationCap, BookOpen, FileText } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const testimonials = [
    {
      name: "Priya Sharma",
      country: "India",
      course: "B.Tech Computer Science",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Symbiosis provided me with a perfect blend of academic excellence and practical exposure."
    },
    {
      name: "John Smith",
      country: "UK",
      course: "BBA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The diverse culture and world-class facilities at Symbiosis have shaped my career path significantly."
    }
  ];

  const courses = [
    { name: "Management", duration: "3-4 years", description: "Comprehensive programs in business management and administration." },
    { name: "Mass Communication", duration: "3 years", description: "Dynamic program covering all aspects of media and communication." },
    { name: "Economics", duration: "3 years", description: "In-depth study of economic theories and their practical applications." },
    { name: "Data Science", duration: "4 years", description: "Cutting-edge program focusing on data analytics and machine learning." },
    { name: "Information Technology", duration: "4 years", description: "Advanced program covering latest IT trends and technologies." },
    { name: "Liberal Arts", duration: "3 years", description: "Interdisciplinary program fostering critical thinking and creativity." },
    { name: "Sport & Exercise Science", duration: "3 years", description: "Comprehensive study of sports science and physical education." },
    { name: "Engineering Programs", duration: "4 years", description: "8 specialized engineering programs through SITEEE." }
  ];

  const overviewDetails = {
    highlights: [
      "Prestigious deemed university status",
      "Multiple specialized institutes across various disciplines",
      "International collaborations with renowned universities",
      "State-of-the-art infrastructure and facilities",
      "Industry-integrated curriculum",
      "Diverse student community from across the globe",
      "Strong focus on research and innovation"
    ],
    entranceExams: [
      "SET (Symbiosis Entrance Test) for 14 undergraduate programmes",
      "SITEEE for 8 engineering programmes",
      "Online examination format",
      "Gateway to prestigious programs",
      "Comprehensive evaluation system",
      "Multiple test centers across India",
      "Merit-based admission process"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Symbiosis International University</h1>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <FileText className="w-4 h-4" />
              SET/SITEEE Registration
            </button>
            <button className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition">
              <Download className="w-4 h-4" />
              Brochure
            </button>
            <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              <Phone className="w-4 h-4" />
              Admission Enquiry
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
                  alt="Symbiosis Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Modern Campus Infrastructure</p>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
                  alt="Symbiosis Students"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Global Learning Environment</p>
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 rounded-lg font-medium text-lg ${
                    activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-lg ${
                    activeTab === 'courses' ? 'bg-blue-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  Programs
                </button>
              </div>

              <div className="space-y-6 overflow-auto max-h-[500px] pr-4">
                {activeTab === 'overview' ? (
                  <>
                    <div className="border-l-4 border-blue-600 pl-4 py-2">
                      <p className="text-gray-700 text-lg">
                        The Symbiosis Entrance Test (SET) and Symbiosis Institute of Technology Engineering Entrance Exam (SITEEE) 
                        are your gateways to prestigious undergraduate & engineering programs at Symbiosis International (Deemed University).
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <p className="text-lg">Multiple Campuses Across India</p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">University Highlights</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                        {overviewDetails.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold text-purple-800 mb-3">Entrance Exams</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                        {overviewDetails.entranceExams.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg mb-6">
                      SET serves as your gateway to 14 undergraduate programmes across diverse fields, while SITEEE provides 
                      access to 8 specialised engineering programmes. Both tests are conducted online and serve as the first 
                      step toward a transformative academic journey.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {courses.map((course) => (
                        <div key={course.name} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-xl text-gray-800 mb-1">{course.name}</h3>
                              <p className="text-md text-blue-600 mb-3">Duration: {course.duration}</p>
                              <p className="text-gray-700">{course.description}</p>
                            </div>
                           
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
                      <p className="text-sm text-blue-600">{testimonial.course}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Entrance Exam Details</h3>
              <p className="text-gray-700">
                Both SET and SITEEE are conducted online, making them accessible to students across India. 
                The exams evaluate candidates comprehensively to ensure admission to deserving students.
              </p>
            </div>

            <div className="mt-4 bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">International Recognition</h3>
              <p className="text-gray-700">
                Symbiosis International University is recognized globally for its academic excellence 
                and has collaborations with numerous international universities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;