import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Play, Search, Download, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import DiscoverIndia from './DiscoverIndia';
import { Link, useNavigate } from 'react-router-dom';
import { universities } from '../pages/universities/UniversityList';
import courses from '../pages/Courses';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: "Thrive In India",
    subtitle: "India",
    description: "India is God's own country to explore, with rich traditions, history, culture, and most of these relate to global & universally-acceptable traditions of education, living and principles i.e., One Earth, One Family, One Future",
    gradient: "from-orange-600 to-red-600"
  },
  {
    title: "Cultural Heritage",
    subtitle: "Diversity",
    description: "Experience the vibrant tapestry of Indian culture, where ancient wisdom meets modern innovation, creating a unique learning environment that shapes global citizens of tomorrow",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    title: "Academic Excellence",
    subtitle: "Education",
    description: "Join world-renowned institutions offering cutting-edge programs across disciplines, supported by state-of-the-art infrastructure and distinguished faculty members",
    gradient: "from-green-600 to-teal-600"
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
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Left Side - Text Carousel */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden bg-white shadow-xl order-2 lg:order-1">
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
                    <div className="relative h-full w-full flex items-center p-12 overflow-hidden">
                      <div className="absolute top-0 right-0 w-[150%] h-[150%] opacity-5 -rotate-45">
                        <div className={`w-full h-full bg-gradient-to-r ${slide.gradient}`} />
                      </div>
                      <div className="relative z-10">
                        <div className={`transform transition-all duration-1000 ${
                          isActive 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-4 opacity-0'
                        }`}>
                          <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
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
                          <p className={`text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl transform transition-all duration-1000 delay-500 ${
                            isActive 
                              ? 'translate-y-0 opacity-100' 
                              : 'translate-y-4 opacity-0'
                          }`}>
                            {slide.description}
                          </p>
                          <Link to="/apply">
                            <button className={`bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-1000 delay-700 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 ${
                              isActive 
                                ? 'translate-y-0 opacity-100' 
                                : 'translate-y-4 opacity-0'
                            }`}>
                              Apply Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Side - Video Preview */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden group cursor-pointer shadow-xl order-1 lg:order-2" onClick={() => setIsVideoModalOpen(true)}>
            <div className="absolute inset-0 bg-[#1a237e] pattern-grid-white/[0.1]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              {/* INDIA Text */}
              <div className="relative w-full max-w-xl aspect-[3/1] mb-8">
                <div className="absolute inset-0 grid grid-cols-5 gap-2">
                  {['I', 'N', 'D', 'I', 'A'].map((letter, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm group-hover:from-white/15 group-hover:to-white/10 transition-all duration-500">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-bold text-white">{letter}</span>
                      </div>
                      {index === 2 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative group-hover:scale-110 transition-transform duration-500">
                            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20" />
                            <button className="relative bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full p-4 shadow-lg shadow-red-500/25">
                              <Play className="w-8 h-8" fill="white" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2 text-center">STUDY IN</h2>
              <h3 className="text-xl text-white/80 mb-8 text-center">EXPERIENCE</h3>
              <p className="text-white/60 text-center max-w-md">
                Watch our video to discover why India is the perfect destination for your educational journey
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="flex flex-wrap gap-4 justify-center my-8 px-6">
          <Link to="/apply">
            <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
              <GraduationCap className="w-5 h-5" />
              Apply Now
            </button>
          </Link>
          <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            <Download className="w-5 h-5" />
            Download Brochure
          </button>
        </div>

        {/* Program Finder Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mx-6 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Find Your Perfect Program</h2>
            
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="relative">
              <form onSubmit={(e) => {
                e.preventDefault();
                if (searchResults.length > 0) {
                  navigate(searchResults[0].path);
                }
              }}>
                <input
                  type="text"
                  placeholder="Search for programs, universities, or courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
              </form>

                <button type="submit" className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors">
                <Search className="w-5 h-5" />
              </button>
                {searchResults.length > 0 && (
                  <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg overflow-hidden">
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          navigate(result.path);
                          setSearchResults([]);
                        }}
                        className="block px-6 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            result.type === 'Course' ? 'bg-blue-500' :
                            result.type === 'University' ? 'bg-green-500' :
                            'bg-purple-500'
                          }`} />
                          <div>
                            <p className="font-medium text-gray-800">{result.name}</p>
                            <p className="text-sm text-gray-500 capitalize">{result.type}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/courses">
                <button className="flex items-center justify-between p-6 rounded-xl border-2 border-gray-100 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/5 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-orange-50 text-orange-500">
                      <GraduationCap className="w-6 h-6" />
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
                <button className="flex items-center justify-between p-6 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-50 text-blue-500">
                      <Building2 className="w-6 h-6" />
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

        {/* Video Modal */}
        {isVideoModalOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8" onClick={() => setIsVideoModalOpen(false)}>
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
      <DiscoverIndia />
    </div>
  );
};

export default Hero;