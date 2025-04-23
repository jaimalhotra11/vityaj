import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Play, Search, Download, GraduationCap, Building2, ArrowRight, PhoneCall } from 'lucide-react';
import DiscoverIndia from './DiscoverIndia';
import { Link, useNavigate } from 'react-router-dom';
import { universities } from '../pages/universities/UniversityList';
import courses from '../pages/Courses';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import AdmissionFeatures from './AdmissionFeatures';
import AdmissionProcess from './AdmissionProcess';

const slides = [
  {
    title: "World-Class Education",
    subtitle: "Affordable Excellence",
    description: "India is home to top-ranked universities like IITs, IIMs, AIIMS, and NITs, recognized globally for excellence in engineering, business, and medicine. Compared to Western countries, tuition fees and living costs are significantly lower, making it an affordable yet high-quality education option.",
    gradient: "from-orange-600 to-red-600"
  },
  {
    title: "Career-Oriented Courses",
    subtitle: "Future Ready",
    description: "From AI, data science, cyber security, engineering, Bio Medical courses, Law, Management, Finance, Science, Pharmacy, Optometry, etc Indian universities offer cutting-edge courses aligned with modern industries. All universities use English as the primary language, ensuring ease of learning and communication.",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    title: "Modern India",
    subtitle: "Innovation Hub",
    description: "India is a global tech hub leading in IT, software, and innovation. The Make in India and Startup India initiatives are transforming the country into a thriving business and research ecosystem. International students can intern or work with top international companies gaining real-world experience.",
    gradient: "from-green-600 to-teal-600"
  },
  {
    title: "Cultural Melting Pot",
    subtitle: "Global Experience",
    description: "India is a land of vibrant traditions, diverse cuisines, and dynamic festivals. With over 100+ nationalities studying in India, universities offer a truly global learning environment where you'll experience everything from Bollywood to yoga retreats.",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Thriving Opportunities",
    subtitle: "Growth & Success",
    description: "India is one of the fastest-growing economies, creating huge job opportunities in IT, finance, healthcare, and manufacturing. The booming startup ecosystem (3rd largest in the world) makes India a great place for aspiring entrepreneurs.",
    gradient: "from-yellow-600 to-orange-600"
  },
  {
    title: "Student-Friendly",
    subtitle: "Affordable Living",
    description: "Living costs in India are much lower than in the US, UK, or Australia, with affordable accommodation, food, and transport. Students get discounted public transport, budget-friendly hostels, and a welcoming community.",
    gradient: "from-cyan-600 to-blue-600"
  }
];

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ type: string, name: string, path: string }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.length > 2) {
      const lowerQuery = searchQuery.toLowerCase();
      
      // Search universities
      const uniResults = universities
        .filter(uni => uni.name.toLowerCase().includes(lowerQuery))
        .map(uni => ({
          type: 'University',
          name: uni.name,
          path: `/universities/${uni.name.toLowerCase().replace(/ /g, '-')}`
        }));

      // Search courses
      const courseResults = courses
        .filter((course: { title: string }) => course.title.toLowerCase().includes(lowerQuery))
        .map((course: { title: string; link: string }) => ({
          type: 'Course',
          name: course.title,
          path: course.link
        }));

      setSearchResults([...uniResults, ...courseResults]);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 py-6 md:py-8">
          {/* Video Preview - Now First on Mobile */}
          <div className="relative h-[500px] sm:h-[550px] md:h-[600px] rounded-2xl overflow-hidden group cursor-pointer shadow-xl order-1 lg:order-2" onClick={() => setIsVideoModalOpen(true)}>
            <div className="absolute inset-0 bg-[#1a237e] pattern-grid-white/[0.1]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8">
              {/* INDIA Text */}
              <div className="relative w-full max-w-xl aspect-[3/1] mb-6 sm:mb-8">
                <div className="absolute inset-0 grid grid-cols-5 gap-2">
                  {['I', 'N', 'D', 'I', 'A'].map((letter, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm group-hover:from-white/15 group-hover:to-white/10 transition-all duration-500">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">{letter}</span>
                      </div>
                      {index === 2 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative group-hover:scale-110 transition-transform duration-500">
                            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20" />
                            <button className="relative bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full p-3 sm:p-4 shadow-lg shadow-red-500/25">
                              <Play className="w-6 h-6 sm:w-8 sm:h-8" fill="white" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">STUDY IN</h2>
              <h3 className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 text-center">EXPERIENCE</h3>
              <p className="text-sm sm:text-base text-white/60 text-center max-w-md px-4">
                Watch our video to discover why India is the perfect destination for your educational journey
              </p>
            </div>
          </div>

          {/* Text Carousel - Now Second on Mobile */}
          <div className="relative h-[500px] sm:h-[550px] md:h-[600px] rounded-2xl overflow-hidden bg-white shadow-xl order-2 lg:order-1">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              speed={1000}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              fadeEffect={{
                crossFade: true
              }}
              loop={true}
              className="h-full w-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div className="relative h-full w-full flex items-center p-6 sm:p-8 md:p-12 overflow-hidden">
                      <div className="absolute top-0 right-0 w-[150%] h-[150%] opacity-5 -rotate-45">
                        <div className={`w-full h-full bg-gradient-to-r ${slide.gradient}`} />
                      </div>
                      <div className="relative z-10 w-full">
                        <div className={`transform transition-all duration-1000 ${
                          isActive 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-4 opacity-0'
                        }`}>
                          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            {slide.title.split(' ').map((word, i) => (
                              <span key={i} className={`inline-block ${
                                word.toLowerCase() === 'india' 
                                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600'
                                  : 'text-gray-800'
                              }`}>
                                {word}{' '}
                              </span>
                            ))}
                          </h1>
                          <div className={`h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-600 mb-6 transform transition-all duration-1000 delay-300 ${
                            isActive ? 'scale-x-100' : 'scale-x-0'
                          }`} />
                          <p className={`text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl transform transition-all duration-1000 delay-500 ${
                            isActive 
                              ? 'translate-y-0 opacity-100' 
                              : 'translate-y-4 opacity-0'
                          }`}>
                            {slide.description}
                          </p>
                          <div className="flex gap-4">
                            <Link to="/apply">
                              <button className={`bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-1000 delay-700 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 ${
                                isActive 
                                  ? 'translate-y-0 opacity-100' 
                                  : 'translate-y-4 opacity-0'
                              }`}>
                                Apply Now
                              </button>
                            </Link>
                            <button className={`bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-1000 delay-700 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center gap-2 ${
                              isActive 
                                ? 'translate-y-0 opacity-100' 
                                : 'translate-y-4 opacity-0'
                            }`}>
                              <PhoneCall className="w-5 h-5" />
                              Free Counselling
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Program Finder Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
          <div className="max-w-4xl mx-auto">
            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/courses">
                <button className="flex items-center justify-between p-4 sm:p-6 rounded-xl border-2 border-gray-100 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/5 transition-all group w-full">
                  <div className="flex items-center gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-orange-50 text-orange-500">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-800">Browse Programs</h3>
                      <p className="text-sm text-gray-500">Explore courses by field of study</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-orange-500 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link to="/partner-universities">
                <button className="flex items-center justify-between p-4 sm:p-6 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 transition-all group w-full">
                  <div className="flex items-center gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-blue-50 text-blue-500">
                      <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-800">Find Universities</h3>
                      <p className="text-sm text-gray-500">Search by location and ranking</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link to="/apply">
            <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
              <GraduationCap className="w-5 h-5" />
              Apply Now
            </button>
          </Link>
          <button className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
            <PhoneCall className="w-5 h-5" />
            Free Counselling
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            <Download className="w-5 h-5" />
            Download Brochure
          </button>
        </div>

        {/* Video Modal */}
        {isVideoModalOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-8" onClick={() => setIsVideoModalOpen(false)}>
            <div className="relative w-full max-w-4xl aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                className="absolute inset-0 w-full h-full rounded-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>

      {/* Discover India Section */}
      <AdmissionProcess />
      <AdmissionFeatures />
      <DiscoverIndia />
    </div>
  );
};

export default Hero;