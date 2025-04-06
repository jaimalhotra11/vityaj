import React, { useState } from 'react';
import { MapPin, Download, Phone, GraduationCap, BookOpen } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA",
      course: "B.Tech Computer Science",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Chandigarh University provided me with incredible opportunities for global exposure and practical learning."
    },
    {
      name: "Mohammed Al-Rashid",
      country: "UAE",
      course: "MBA International Business",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The diverse community and world-class facilities at CU have transformed my educational journey."
    }
  ];

  const courses = [
    { name: "B.Tech", duration: "4 years", description: "Engineering programs with specializations in various fields including Computer Science, Mechanical, and Electronics." },
    { name: "MBA", duration: "2 years", description: "Comprehensive business management program with focus on leadership, strategy, and global business practices." },
    { name: "BCA", duration: "3 years", description: "Computer applications program that focuses on software development, database management, and IT infrastructure." },
    { name: "BBA", duration: "3 years", description: "Business administration program that develops management and entrepreneurial skills with practical industry exposure." },
    { name: "B.Arch", duration: "5 years", description: "Architecture program that combines design aesthetics with technical knowledge for innovative solutions." },
    { name: "HMCT", duration: "4 years", description: "Hotel Management and Catering Technology program preparing students for careers in hospitality industry." }
  ];

  const overviewDetails = {
    highlights: [
      "Ranked #1 among all Private Universities in India in QS Asia University Rankings 2025",
      "Impressive 120th overall rank in Asia",
      "Students from 28 Indian states, 8 UTs, and 65+ countries",
      "Recognized by University Grants Commission under Section 2(f)",
      "More than 70 programs available across fourteen Faculties",
      "Located near the beautiful planned city of Chandigarh",
      "International recognition for modern architecture and design"
    ],
    infrastructure: [
      "State-of-the-art laboratories for practical learning",
      "'Flipped' classrooms for innovative teaching methods",
      "Cutting-edge design studios for creative programs",
      "Modern libraries with extensive resources",
      "Excellent sporting facilities for physical development",
      "Social spaces for community building and networking"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-800">Chandigarh University</h1>
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
                  alt="CU Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Modern Campus Near Shivalik Range</p>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
                  alt="International Students"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Diverse International Community</p>
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
                        Chandigarh University, Panjab (CU) is the Best University in Punjab and North India that offers 
                        various Undergraduate and Post graduate Courses like B.Tech, BCA, BBA, HMCT, B.Com, LLB, B.Arch, 
                        MBA, M.Tech, B.Com, M.Com, Journalism and MCA at an affordable fees in Chandigarh, India.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <p className="text-lg">Chandigarh, Punjab, India (260 km northwest of New Delhi)</p>
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
                      <h3 className="text-xl font-semibold text-green-800 mb-3">About Chandigarh</h3>
                      <p className="text-gray-700">
                        Chandigarh is a city and union territory in northern India, serving as the shared capital 
                        of the states of Punjab and Haryana. Situated near the foothills of the Shivalik range of Himalyas. 
                        It is located 260 km (162 miles) northwest of New Delhi.
                      </p>
                      <p className="text-gray-700 mt-2">
                        Chandigarh is one of the earliest planned cities in post independent India and is internationally 
                        known for its architecture and urban design.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg mb-6">
                      Chandigarh University offers more than 70 programs across fourteen Faculties, all taught by leading 
                      academics and industry specialists. At CU students are taught in state-of-the-art labs, 'flipped' 
                      classrooms and cutting-edge design studios.
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
            <h2 className="text-xl font-semibold mb-4">International Student Testimonials</h2>
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
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Cultural Diversity</h3>
              <p className="text-gray-700">
                With students from 28 Indian states, its 8 UTs, and 65+ countries, CU is one of the most 
                ethnically and culturally diverse universities in the vicinity of The City Beautiful- Chandigarh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;