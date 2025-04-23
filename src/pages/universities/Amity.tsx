import React, { useState } from 'react';
import { MapPin, Download, Phone, GraduationCap, BookOpen, FileText, Globe, Award } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const testimonials = [
    {
      name: "Alex Thompson",
      country: "UK",
      course: "MBA International Business",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Amity's global exposure and industry connections have transformed my perspective on international business."
    },
    {
      name: "Ananya Patel",
      country: "India",
      course: "B.Tech Computer Science",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The world-class infrastructure and research opportunities at Amity have given me a strong foundation for my career in technology."
    }
  ];

  const courses = [
    { name: "Engineering & Technology", duration: "4 years", description: "Cutting-edge programs in various engineering disciplines with focus on innovation and research." },
    { name: "Management Studies", duration: "2 years", description: "ACBSP-accredited management programs with global business perspective and industry integration." },
    { name: "Applied Sciences", duration: "3-4 years", description: "Research-oriented programs in pure and applied sciences with state-of-the-art laboratories." },
    { name: "Law", duration: "3-5 years", description: "Comprehensive legal education programs with focus on international and corporate law." },
    { name: "Communication", duration: "3-4 years", description: "Dynamic programs in journalism, media, and mass communication with modern media facilities." },
    { name: "Healthcare", duration: "4-5 years", description: "Advanced programs in medical sciences, nursing, and healthcare management." }
  ];

  const overviewDetails = {
    highlights: [
      "29 campuses across India",
      "240+ academic programmes",
      "4,000+ expert faculty members",
      "95,000+ students globally",
      "ACBSP (USA) accredited programs",
      "Grade 'A' NAAC accreditation",
      "First Indian University as IET's Academic Partner"
    ],
    globalPresence: [
      "London, United Kingdom",
      "New York, United States",
      "Singapore",
      "San Francisco, United States",
      "Dubai, UAE",
      "Romania",
      "Taiwan",
      "Mauritius"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-red-600" />
            <h1 className="text-2xl font-bold text-gray-800">Amity University</h1>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
              <FileText className="w-4 h-4" />
              Apply Now
            </button>
            <button className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg border border-red-600 hover:bg-red-50 transition">
              <Download className="w-4 h-4" />
              Brochure
            </button>
            <button className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
              <Globe className="w-4 h-4" />
              Global Admissions
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
                  alt="Amity Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Global Campus Network</p>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
                  alt="Amity Students"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">International Learning Environment</p>
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 rounded-lg font-medium text-lg ${
                    activeTab === 'overview' ? 'bg-red-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-lg ${
                    activeTab === 'courses' ? 'bg-red-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  Programs
                </button>
              </div>

              <div className="space-y-6 overflow-auto max-h-[500px] pr-4">
                {activeTab === 'overview' ? (
                  <>
                    <div className="border-l-4 border-red-600 pl-4 py-2">
                      <p className="text-gray-700 text-lg">
                        Amity is a leading global education provider with 29 campuses across India and international 
                        locations. With over 95,000 students and 4,000 faculty members, Amity offers 240 programmes 
                        from school to Post-Doctoral levels, maintaining the highest standards of academic excellence.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 text-red-600" />
                      <p className="text-lg">Global Presence Across 8 Countries</p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold text-red-800 mb-3">University Highlights</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                        {overviewDetails.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold text-orange-800 mb-3">Global Campus Network</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                        {overviewDetails.globalPresence.map((campus, index) => (
                          <li key={index}>{campus}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg mb-6">
                      Amity offers 240 diverse programmes across multiple disciplines, from undergraduate 
                      to doctoral levels. Our programs are internationally accredited and designed to meet 
                      global industry standards.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {courses.map((course) => (
                        <div key={course.name} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-xl text-gray-800 mb-1">{course.name}</h3>
                              <p className="text-md text-red-600 mb-3">Duration: {course.duration}</p>
                              <p className="text-gray-700">{course.description}</p>
                            </div>
                            <button className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm hover:bg-red-200 transition">
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
                      <p className="text-sm text-red-600">{testimonial.course}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-red-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Global Accreditations
                </div>
              </h3>
              <p className="text-gray-700">
                Amity holds prestigious accreditations including ACBSP (USA) for management programs 
                and is the first Indian University to become IET's Academic Partner.
              </p>
            </div>

            <div className="mt-4 bg-orange-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">International Recognition</h3>
              <p className="text-gray-700">
                With NAAC Grade 'A' accreditation and multiple international recognitions, 
                Amity ensures education of global standards across all its programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;