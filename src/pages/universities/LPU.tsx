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
      quote: "LPU provided me with incredible opportunities for global exposure and practical learning."
    },
    {
      name: "Mohammed Al-Rashid",
      country: "UAE",
      course: "MBA International Business",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The diverse culture and world-class facilities at LPU have transformed my educational journey."
    }
  ];

  const courses = [
    { name: "B.Tech Computer Science", duration: "4 years", description: "A comprehensive program focusing on programming, algorithms, databases, and cutting-edge technologies." },
    { name: "MBA International Business", duration: "2 years", description: "Prepares students for global business leadership with focus on international trade, marketing, and finance." },
    { name: "B.Arch Architecture", duration: "5 years", description: "Combines design aesthetics with technical knowledge to create sustainable and innovative architectural solutions." },
    { name: "B.Pharm Pharmaceutical", duration: "4 years", description: "Offers training in drug discovery, development, and delivery systems with extensive lab experience." },
    { name: "BBA Business Administration", duration: "3 years", description: "Develops management and entrepreneurial skills with practical industry exposure." },
    { name: "M.Tech Data Science", duration: "2 years", description: "Advanced program covering machine learning, big data analytics, and artificial intelligence." }
  ];

  const overviewDetails = {
    highlights: [
      "Named among Asia's best universities by QS World University Rankings",
      "State-of-the-art laboratories and research centers",
      "Placement opportunities with 500+ global companies",
      "Over 200 student clubs and organizations",
      "Modern sports facilities including Olympic-sized swimming pool",
      "24/7 medical facilities and security services",
      "On-campus accommodation for 25,000+ students"
    ],
    infrastructure: [
      "Smart classrooms equipped with latest technology",
      "Central library with over 1 million books and digital resources",
      "Innovation and incubation center for startups",
      "Dedicated international student support office",
      "Multi-cuisine food courts and cafeterias"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-800">Lovely Professional University</h1>
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
                  alt="LPU Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Modern Campus Infrastructure</p>
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
                        Lovely Professional University (LPU) is a prestigious private university established in 2005,
                        situated on a sprawling 600-acre campus along the Jalandhar-Delhi GT Road in Punjab, India.
                        With a commitment to excellence in education, research, and innovation, LPU has emerged as 
                        one of the largest private universities in India and a preferred destination for students worldwide.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <p className="text-lg">Chaheru, Phagwara, Punjab, India (381 km from Delhi)</p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold text-purple-800 mb-3">University Highlights</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                        <li>3000+ international students from 50+ countries</li>
                        <li>4000+ faculty and staff members</li>
                        <li>Recognized by UGC, PCI, BCI, and other national bodies</li>
                        <li>Member of Association of Commonwealth Universities</li>
                        <li>ICAR-accredited School of Agriculture</li>
                        {overviewDetails.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">Campus Infrastructure</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                        {overviewDetails.infrastructure.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg mb-6">
                      LPU offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines.
                      All courses are designed with industry relevance and global standards in mind.
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;