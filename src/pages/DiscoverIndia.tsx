import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { GraduationCap, Globe, Landmark, Lightbulb, DollarSign, Shield, Award, MapPin, Building, Rocket, FlaskRound as Flask, Stethoscope, Cpu, Languages, BookOpen } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const IndiaEducation = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const leaders = [
    {
      name: "Sundar Pichai",
      role: "CEO, Google",
      education: "IIT Kharagpur",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Satya Nadella",
      role: "CEO, Microsoft",
      education: "Manipal Institute of Technology",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Indra Nooyi",
      role: "Former CEO, PepsiCo",
      education: "IIM Calcutta",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Parag Agrawal",
      role: "Former CEO, Twitter",
      education: "IIT Bombay",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Raghuram Rajan",
      role: "Former Governor, RBI",
      education: "IIT Delhi & IIM Ahmedabad",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const universities = [
    {
      name: "Indian Institute of Technology (IIT)",
      location: "Multiple Locations",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ranking: "Top Engineering Institution Globally"
    },
    {
      name: "All India Institute of Medical Sciences",
      location: "New Delhi, India",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ranking: "#1 Medical University in India"
    },
    {
      name: "Indian Institute of Management (IIM)",
      location: "Multiple Locations",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ranking: "Top Business Schools in Asia"
    },
    {
      name: "Jawaharlal Nehru University",
      location: "New Delhi, India",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ranking: "Excellence in Humanities & Social Sciences"
    }
  ];

  const innovations = [
    {
      title: "Space Technology",
      description: "ISRO's successful Chandrayaan-3 and Mangalyaan missions",
      icon: <Rocket className="w-8 h-8 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Information Technology",
      description: "Global leader in IT services and software development",
      icon: <Cpu className="w-8 h-8 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Pharmaceuticals",
      description: "Known as the 'Pharmacy of the World' with crucial vaccine development",
      icon: <Flask className="w-8 h-8 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Healthcare",
      description: "Advanced medical research and affordable healthcare solutions",
      icon: <Stethoscope className="w-8 h-8 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const courses = [
    {
      category: "Engineering & Technology",
      icon: <Cpu className="w-6 h-6 text-indigo-600" />,
      examples: ["AI & Machine Learning", "Robotics", "Computer Science", "Mechanical Engineering"]
    },
    {
      category: "Medicine & Healthcare",
      icon: <Stethoscope className="w-6 h-6 text-indigo-600" />,
      examples: ["MBBS", "Biotechnology", "Pharmacy", "Ayurveda"]
    },
    {
      category: "Business & Management",
      icon: <Building className="w-6 h-6 text-indigo-600" />,
      examples: ["MBA", "Finance", "Entrepreneurship", "Marketing"]
    },
    {
      category: "Humanities & Social Sciences",
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      examples: ["History", "Political Science", "Psychology", "Sociology"]
    },
    {
      category: "Emerging Fields",
      icon: <Rocket className="w-6 h-6 text-indigo-600" />,
      examples: ["Data Science", "Cybersecurity", "Renewable Energy", "Space Science"]
    }
  ];

  const tabs = [
    { 
      title: "Rich History & Modern Outlook", 
      icon: <Landmark className="w-5 h-5" />,
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-800">A Nation with a Rich History and a Modern Outlook</h3>
            <p className="text-gray-700 mb-4">
              India, one of the world's oldest civilizations, has been a global center of learning for centuries. The ancient universities of Nalanda and Takshashila attracted scholars from across the world, making India a pioneer in education and intellectual pursuits.
            </p>
            <p className="text-gray-700">
              Today, India is a rapidly growing global economy, home to smart cities, modern infrastructure, and a thriving education sector. It seamlessly integrates tradition with innovation, offering students the best of both worlds—a deep cultural heritage and a progressive academic environment.
            </p>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Ancient and Modern India" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent flex items-end">
              <div className="p-6">
                <span className="bg-white/90 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                  Tradition meets Innovation
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      title: "Technology & Innovation", 
      icon: <Lightbulb className="w-5 h-5" />,
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-indigo-800">A Hub of Science, Technology, and Innovation</h3>
          <p className="text-gray-700 mb-6">
            India is at the forefront of scientific research, technology, and space exploration, making it an attractive destination for students interested in STEM fields. The country has made significant advancements in various domains.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {innovations.map((item, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }
                }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    {item.icon}
                    <h4 className="font-bold text-lg">{item.title}</h4>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-gray-700 italic text-center">
            International students in India gain direct exposure to these advancements, with opportunities for internships, hands-on research, and collaborations with top industry leaders.
          </p>
        </div>
      )
    },
    { 
      title: "Affordable Education", 
      icon: <DollarSign className="w-5 h-5" />,
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-800">Affordable Tuition Fees & Cost of Living</h3>
            <p className="text-gray-700 mb-4">
              One of the most attractive aspects of studying in India is the affordability of education and living expenses. Compared to the US, UK, Canada, and Australia, India provides world-class education at a fraction of the cost.
            </p>
            
            <div className="bg-white p-5 rounded-xl shadow-md mb-4">
              <h4 className="font-bold text-lg mb-2 text-indigo-700">Low Tuition Fees:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Engineering and Technology degrees at IITs and NITs cost significantly less than equivalent programs in Western countries.</li>
                <li>Medical education at AIIMS and other government institutions is highly affordable, with some of the lowest tuition fees globally.</li>
                <li>Business and management programs at IIMs and private universities offer excellent ROI compared to international MBA programs.</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-md mb-4">
              <h4 className="font-bold text-lg mb-2 text-indigo-700">Scholarships Available:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Study in India (SII):</span> Government initiative offering tuition fee waivers</li>
                <li><span className="font-medium">ICCR Scholarships:</span> For international students from various countries</li>
                <li><span className="font-medium">University Grants:</span> Many institutions offer merit-based financial assistance</li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-xl shadow-md mb-4">
              <h4 className="font-bold text-lg mb-2 text-indigo-700">Budget-Friendly Cost of Living:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Accommodation options range from on-campus hostels to private apartments, catering to different budgets.</li>
                <li>Public transportation, food, and entertainment are much more affordable than in Western countries.</li>
                <li>Daily expenses, including internet, utilities, and leisure activities, are cost-effective, allowing students to maintain a comfortable lifestyle.</li>
                <li>Student cities like Delhi, Bangalore, and Chennai offer excellent amenities at reasonable prices.</li>
              </ul>
            </div>
            
            <div className="bg-indigo-800 text-white p-5 rounded-xl shadow-lg">
              <p className="font-medium italic">
                "With low tuition fees and an affordable lifestyle, India ensures that international students receive a world-class education without financial burden."
              </p>
            </div>
          </div>
        </div>
      )
    },
    { 
      title: "English-Medium Education", 
      icon: <Languages className="w-5 h-5" />,
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-800">English-Medium Education with No Language Barriers</h3>
            <p className="text-gray-700 mb-4">
              Most higher education institutions in India teach in English, making it easier for international students to adapt without facing language barriers.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-indigo-700 mb-2">Widely Available English Instruction</h4>
                <p className="text-gray-700">All major universities and colleges conduct classes, examinations, and research in English, ensuring seamless academic integration for international students.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-indigo-700 mb-2">No Language Barrier</h4>
                <p className="text-gray-700">English is commonly spoken in academic and professional settings throughout India, ensuring smooth communication both on and off campus.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-indigo-700 mb-2">Globally Recognized Degrees</h4>
                <p className="text-gray-700">Indian universities provide qualifications that are respected worldwide, helping graduates excel in global careers with documentation and credentials in English.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-6 h-6 text-indigo-600" />
                <h4 className="font-bold text-lg">English as Academic Language</h4>
              </div>
              <p className="text-gray-700">
                India has one of the largest English-speaking populations in the world, with English serving as the primary language of higher education across the country.
              </p>
            </div>
            
            <div className="relative h-64 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Students in classroom" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="bg-white/90 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                    International-friendly learning environment
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-800 text-white p-4 rounded-lg">
              <p className="italic">
                "With English as the medium of instruction, international students can focus on their studies without worrying about language barriers."
              </p>
            </div>
          </div>
        </div>
      )
    },
    { 
      title: "Diverse Course Offerings", 
      icon: <BookOpen className="w-5 h-5" />,
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-indigo-800">Diverse Course Offerings Across Disciplines</h3>
          <p className="text-gray-700 mb-6">
            India provides a broad range of academic disciplines across various institutions, catering to diverse interests and career aspirations.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {courses.map((course, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    {course.icon}
                  </div>
                  <h4 className="font-bold text-lg text-indigo-800">{course.category}</h4>
                </div>
                
                <ul className="space-y-2">
                  {course.examples.map((example, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-xl">
            <h4 className="font-bold text-xl mb-3 text-center text-indigo-800">Specialized Programs for International Students</h4>
            <p className="text-gray-700 text-center">
              Many Indian universities offer specialized programs designed specifically for international students, with flexible curricula, exchange opportunities, and global perspectives integrated into the coursework.
            </p>
          </div>
        </div>
      )
    },
    { 
      title: "Global Recognition", 
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-indigo-800">Globally Recognized Degrees & Indian Professionals Leading the World</h3>
          <p className="text-gray-700 mb-6">
            India's top universities offer internationally accredited degrees across various disciplines, and many Indian-educated professionals hold leadership positions in global organizations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6 text-indigo-600" />
                <h4 className="text-xl font-bold">Top Universities</h4>
              </div>
              <ul className="space-y-3">
                {universities.map((uni, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{uni.name}</p>
                      <p className="text-sm text-gray-600">{uni.ranking}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-indigo-600" />
                Global Leaders with Indian Education
              </h4>
              
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
              >
                {leaders.map((leader, index) => (
                  <SwiperSlide key={index} className="max-w-[280px]">
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={leader.image} 
                          alt={leader.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h5 className="font-bold text-lg">{leader.name}</h5>
                        <p className="text-indigo-600">{leader.role}</p>
                        <p className="text-sm text-gray-600">{leader.education}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          
          <p className="text-center text-gray-700 italic">
            With a degree from an Indian university, students gain a competitive edge in the global job market, with opportunities for employment in technology, business, medicine, and research.
          </p>
        </div>
      )
    },
    { 
      title: "Easy Admissions", 
      icon: <GraduationCap className="w-5 h-5" />,
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-800">Easy Admissions & Visa Process</h3>
            <p className="text-gray-700 mb-4">
              India offers a straightforward admission and visa process for international students. The government's Study in India initiative simplifies procedures, ensuring a hassle-free experience.
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <GraduationCap className="w-5 h-5 text-indigo-700" />
                </div>
                <div>
                  <p className="font-semibold">Direct Admission Options</p>
                  <p className="text-gray-600 text-sm">Without complex entrance exams for foreign students</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <DollarSign className="w-5 h-5 text-indigo-700" />
                </div>
                <div>
                  <p className="font-semibold">Scholarships Available</p>
                  <p className="text-gray-600 text-sm">Financial aid for international applicants</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <Globe className="w-5 h-5 text-indigo-700" />
                </div>
                <div>
                  <p className="font-semibold">Student-Friendly Visa Policies</p>
                  <p className="text-gray-600 text-sm">Quick processing times and straightforward procedures</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <Languages className="w-5 h-5 text-indigo-700" />
                </div>
                <div>
                  <p className="font-semibold">Flexible Eligibility Criteria</p>
                  <p className="text-gray-600 text-sm">Based on high school or undergraduate performance</p>
                </div>
              </li>
            </ul>
            
            <p className="text-gray-700">
              India's streamlined system makes it easy for students to apply, enroll, and settle into their academic journey.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-xl">
            <h4 className="text-xl font-bold mb-4 text-center text-indigo-800">Application Process</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">1</div>
                <div className="flex-1 p-3 bg-indigo-50 rounded-lg">
                  <p className="font-medium">Research and Choose Universities</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">2</div>
                <div className="flex-1 p-3 bg-indigo-50 rounded-lg">
                  <p className="font-medium">Prepare Documents & Apply Online</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">3</div>
                <div className="flex-1 p-3 bg-indigo-50 rounded-lg">
                  <p className="font-medium">Receive Acceptance Letter</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">4</div>
                <div className="flex-1 p-3 bg-indigo-50 rounded-lg">
                  <p className="font-medium">Apply for Student Visa</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">5</div>
                <div className="flex-1 p-3 bg-indigo-50 rounded-lg">
                  <p className="font-medium">Arrange Accommodation & Travel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      title: "Safety & Culture", 
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-indigo-800">Safety and a Friendly Society</h3>
          <p className="text-gray-700 mb-6">
            India is known for its welcoming and diverse culture, making it a comfortable destination for international students.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Safe Environment</h4>
              <p className="text-gray-600">Universities have secure campuses with 24/7 security and student support services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Multicultural Society</h4>
              <p className="text-gray-600">People from various backgrounds create a harmonious and respectful atmosphere.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Landmark className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Rich Cultural Heritage</h4>
              <p className="text-gray-600">Experience festivals, traditions, and historical sites that span thousands of years.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Student Communities</h4>
              <p className="text-gray-600">Strong support networks and communities for international students.</p>
            </div>
          </div>
          
          <div className="bg-indigo-800 text-white p-6 rounded-xl">
            <p className="text-lg italic text-center">
              "India follows the philosophy of 'Atithi Devo Bhava' (Guest is God), ensuring that international students feel respected and at home."
            </p>
          </div>
        </div>
      )
    }
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="India Education" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-purple-900/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-indigo-900 mb-6"
            >
              Why Study in India? Affordable, English-Medium, and Globally Competitive Education
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-800 mb-10"
            >
              India is rapidly emerging as a global education hub, offering affordable, high-quality education in English, with a seamless admission process and an extensive range of courses.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="#explore" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
                Explore Benefits
              </a>
              <a href="#universities" className="bg-white hover:bg-gray-100 text-indigo-600 font-medium px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl border border-indigo-200">
                View Universities
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section id="explore" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Why Choose India?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A life-changing educational experience with global recognition and affordable excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tabs.slice(0, 6).map((tab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setActiveTab(index)}
              >
                <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                  <div className="bg-white/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white w-10 h-10 flex items-center justify-center">
                      {tab.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-indigo-800 group-hover:text-indigo-600 transition-colors">
                    {tab.title}
                  </h3>
                  <p className="text-gray-600">
                    {index === 0 && "Blend of ancient wisdom and modern innovation"}
                    {index === 1 && "Leading in science, technology, and space exploration"}
                    {index === 2 && "World-class education at a fraction of global costs"}
                    {index === 3 && "English-medium education with no language barriers"}
                    {index === 4 && "Simplified admissions and visa procedures"}
                    {index === 5 && "Welcoming culture with strong support systems"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Information Section */}
      <section className="py-20 bg-gray-50" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto hide-scrollbar">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                      activeTab === index 
                        ? 'text-indigo-600 border-b-2 border-indigo-600' 
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.title}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-8">
              {tabs[activeTab].content}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Universities Section */}
      <section id="universities" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Top Universities in India</h2>
            <p className="text-xl text-gray-600">Globally recognized institutions offering world-class education</p>
          </div>
          
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {universities.map((university, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div 
                    className="h-56 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${university.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent flex items-end">
                      <div className="p-6">
                        <span className="bg-white/90 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                          {university.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-indigo-800">{university.name}</h3>
                    <p className="text-rose-600 font-medium">{university.ranking}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center gap-1">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      
      {/* Global Leaders Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Home to Global Business Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many Indian university graduates have gone on to lead some of the world's biggest companies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1 text-indigo-800">{leader.name}</h3>
                  <p className="text-indigo-600 font-medium mb-2">{leader.role}</p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <GraduationCap className="w-4 h-4" />
                    <p>{leader.education}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 italic max-w-3xl mx-auto">
              These industry leaders highlight the strength of India's education system in shaping global executives and innovators.
            </p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
<section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
  <div className="container mx-auto px-6">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="max-w-4xl mx-auto text-center"
    >
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">
        Why Choose India? A Life-Changing Educational Experience
      </motion.h2>
      
      <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6 mb-10">
        <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
          <Award className="w-6 h-6 text-yellow-300 flex-shrink-0" />
          <p className="text-left">Globally recognized degrees that enhance career prospects</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
          <Languages className="w-6 h-6 text-yellow-300 flex-shrink-0" />
          <p className="text-left">English-medium education with no language barriers</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
          <DollarSign className="w-6 h-6 text-yellow-300 flex-shrink-0" />
          <p className="text-left">Affordable tuition fees and cost of living</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-yellow-300 flex-shrink-0" />
          <p className="text-left">Simplified admission process for international students</p>
        </motion.div>
      </motion.div>
      
      <motion.p variants={fadeInUp} className="text-xl mb-8">
        With affordable tuition, English-medium education, simplified admissions, and a vast range of courses, India is an excellent choice for students seeking world-class education with minimal financial burden. As a modern nation with a deep-rooted cultural heritage and a track record of producing global leaders, India presents the perfect blend of tradition and innovation.
      </motion.p>
      
      <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
        <a 
          href="#" 
          className="inline-block bg-white text-indigo-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
        >
          Explore universities and programs
        </a>
        <a 
          href="#" 
          className="inline-block bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors shadow-lg hover:shadow-xl"
        >
          Check admission criteria
        </a>
      </motion.div>
    </motion.div>
  </div>
</section>

{/* Final CTA Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-indigo-900 mb-6">
      Start your journey toward a globally recognized education in India today!
    </h2>
    
    <div className="flex justify-center">
      <a 
        href="#" 
        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
      >
        <GraduationCap className="w-5 h-5" />
        Apply Now
      </a>
    </div>
  </div>
</section>

{/* Custom CSS for hiding scrollbar */}
<style jsx>{`
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .swiper-slide {
    height: auto;
  }
`}</style>

    </div>
  );
};
export default IndiaEducation;
