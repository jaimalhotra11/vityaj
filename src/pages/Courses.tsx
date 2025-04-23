import React, { useState, useEffect } from 'react';
import { Code, Scale, BookOpen, Camera, BarChart as ChartBar, FlaskRound as Flask, 
         Stethoscope, Palette, GraduationCap, Newspaper, Search, Filter, X } from 'lucide-react';
import CourseCard from './CourseCard';



const courses = [
  {
    title: "Engineering & Technology",
    description: "Explore various engineering disciplines and technology programs",
    icon: <Code className="w-8 h-8 text-white" />,
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    category: "technical",
    averageSalary: "₹6-12 LPA",
    jobRoles: ["Software Engineer", "System Architect", "Technical Lead"],
    subcourses: [
      { name: "B.Tech in Computer Science", duration: "4 years", link: "/universities?course=btech-cs", fees: "₹8-15L" },
      { name: "B.Tech in Electronics", duration: "4 years", link: "/universities?course=btech-ec", fees: "₹7-14L" },
      { name: "B.Tech in Mechanical", duration: "4 years", link: "/universities?course=btech-me", fees: "₹7-13L" },
      { name: "B.Tech in Civil", duration: "4 years", link: "/universities?course=btech-civil", fees: "₹6-12L" },
      { name: "BCA", duration: "3 years", link: "/universities?course=bca", fees: "₹3-7L" },
      { name: "B.Tech in AI & ML", duration: "4 years", link: "/universities?course=btech-aiml", fees: "₹8-16L" },
      { name: "B.Tech in IT", duration: "4 years", link: "/universities?course=btech-it", fees: "₹7-14L" }
    ]
  },
  {
    title: "Medical Sciences",
    description: "Programs in medicine and healthcare",
    icon: <Stethoscope className="w-8 h-8 text-white" />,
    bgColor: "bg-red-600",
    hoverColor: "hover:bg-red-700",
    category: "medical",
    averageSalary: "₹8-15 LPA",
    jobRoles: ["Doctor", "Surgeon", "Medical Specialist"],
    subcourses: [
      { name: "MBBS", duration: "5.5 years", link: "/universities?course=mbbs", fees: "₹15-25L" },
      { name: "BDS", duration: "5 years", link: "/universities?course=bds", fees: "₹12-20L" },
      { name: "B.Pharm", duration: "4 years", link: "/universities?course=bpharm", fees: "₹5-10L" },
      { name: "BAMS", duration: "5.5 years", link: "/universities?course=bams", fees: "₹8-15L" },
      { name: "BSc Nursing", duration: "4 years", link: "/universities?course=bsc-nursing", fees: "₹4-8L" },
      { name: "BPT", duration: "4.5 years", link: "/universities?course=bpt", fees: "₹5-10L" }
    ]
  },
  {
    title: "Law",
    description: "Various law programs for aspiring legal professionals",
    icon: <Scale className="w-8 h-8 text-white" />,
    bgColor: "bg-purple-600",
    hoverColor: "hover:bg-purple-700",
    category: "legal",
    averageSalary: "₹5-10 LPA",
    jobRoles: ["Lawyer", "Legal Consultant", "Corporate Counsel"],
    subcourses: [
      { name: "LLB", duration: "3 years", link: "/universities?course=llb", fees: "₹3-7L" },
      { name: "BA LLB", duration: "5 years", link: "/universities?course=ballb", fees: "₹5-12L" },
      { name: "BBA LLB", duration: "5 years", link: "/universities?course=bballb", fees: "₹6-13L" },
      { name: "B.Com LLB", duration: "5 years", link: "/universities?course=bcomllb", fees: "₹5-12L" },
      { name: "LLM", duration: "2 years", link: "/universities?course=llm", fees: "₹2-5L" }
    ]
  },
  {
    title: "Management & Commerce",
    description: "Business and management education programs",
    icon: <ChartBar className="w-8 h-8 text-white" />,
    bgColor: "bg-green-600",
    hoverColor: "hover:bg-green-700",
    category: "business",
    averageSalary: "₹4-8 LPA",
    jobRoles: ["Business Analyst", "Marketing Manager", "Financial Advisor"],
    subcourses: [
      { name: "BBA", duration: "3 years", link: "/universities?course=bba", fees: "₹3-8L" },
      { name: "B.Com", duration: "3 years", link: "/universities?course=bcom", fees: "₹2-5L" },
      { name: "BBM", duration: "3 years", link: "/universities?course=bbm", fees: "₹3-7L" },
      { name: "BHM", duration: "4 years", link: "/universities?course=bhm", fees: "₹4-10L" },
      { name: "B.Com (Hons)", duration: "3 years", link: "/universities?course=bcom-hons", fees: "₹3-6L" },
      { name: "BBA in Digital Marketing", duration: "3 years", link: "/universities?course=bba-digital", fees: "₹4-9L" }
    ]
  },
  {
    title: "Arts & Humanities",
    description: "Programs in liberal arts and humanities",
    icon: <BookOpen className="w-8 h-8 text-white" />,
    bgColor: "bg-yellow-600",
    hoverColor: "hover:bg-yellow-700",
    category: "arts",
    averageSalary: "₹3-7 LPA",
    jobRoles: ["Content Writer", "Teacher", "Research Analyst"],
    subcourses: [
      { name: "BA in English", duration: "3 years", link: "/universities?course=ba-english", fees: "₹1.5-4L" },
      { name: "BA in Psychology", duration: "3 years", link: "/universities?course=ba-psychology", fees: "₹2-5L" },
      { name: "BA in Economics", duration: "3 years", link: "/universities?course=ba-economics", fees: "₹2-5L" },
      { name: "BA in Political Science", duration: "3 years", link: "/universities?course=ba-polsci", fees: "₹1.5-4L" },
      { name: "BA in History", duration: "3 years", link: "/universities?course=ba-history", fees: "₹1.5-4L" },
      { name: "BA in Sociology", duration: "3 years", link: "/universities?course=ba-sociology", fees: "₹1.5-4L" }
    ]
  },
  {
    title: "Science",
    description: "Various pure and applied science programs",
    icon: <Flask className="w-8 h-8 text-white" />,
    bgColor: "bg-cyan-600",
    hoverColor: "hover:bg-cyan-700",
    category: "science",
    averageSalary: "₹4-9 LPA",
    jobRoles: ["Research Scientist", "Lab Technician", "Data Analyst"],
    subcourses: [
      { name: "B.Sc in Physics", duration: "3 years", link: "/universities?course=bsc-physics", fees: "₹2-5L" },
      { name: "B.Sc in Chemistry", duration: "3 years", link: "/universities?course=bsc-chemistry", fees: "₹2-5L" },
      { name: "B.Sc in Mathematics", duration: "3 years", link: "/universities?course=bsc-maths", fees: "₹2-4L" },
      { name: "B.Sc in Biology", duration: "3 years", link: "/universities?course=bsc-biology", fees: "₹2-5L" },
      { name: "B.Sc in Biotechnology", duration: "3 years", link: "/universities?course=bsc-biotech", fees: "₹3-7L" }
    ]
  },
  {
    title: "Media & Communication",
    description: "Programs in journalism and mass communication",
    icon: <Camera className="w-8 h-8 text-white" />,
    bgColor: "bg-pink-600",
    hoverColor: "hover:bg-pink-700",
    category: "media",
    averageSalary: "₹4-8 LPA",
    jobRoles: ["Journalist", "Content Creator", "PR Manager"],
    subcourses: [
      { name: "BA in Journalism", duration: "3 years", link: "/universities?course=ba-journalism", fees: "₹2-6L" },
      { name: "BA in Mass Communication", duration: "3 years", link: "/universities?course=ba-masscomm", fees: "₹3-7L" },
      { name: "BMM", duration: "3 years", link: "/universities?course=bmm", fees: "₹3-7L" },
      { name: "BA in Digital Media", duration: "3 years", link: "/universities?course=ba-digitalmedia", fees: "₹3-8L" },
      { name: "BA in Film Studies", duration: "3 years", link: "/universities?course=ba-film", fees: "₹3-8L" }
    ]
  },
  {
    title: "Design & Fine Arts",
    description: "Creative and artistic programs",
    icon: <Palette className="w-8 h-8 text-white" />,
    bgColor: "bg-orange-600",
    hoverColor: "hover:bg-orange-700",
    category: "design",
    averageSalary: "₹4-10 LPA",
    jobRoles: ["UI/UX Designer", "Fashion Designer", "Architect"],
    subcourses: [
      { name: "B.Des in Fashion", duration: "4 years", link: "/universities?course=bdes-fashion", fees: "₹4-12L" },
      { name: "B.Des in Interior", duration: "4 years", link: "/universities?course=bdes-interior", fees: "₹4-10L" },
      { name: "B.Des in Product", duration: "4 years", link: "/universities?course=bdes-product", fees: "₹4-10L" },
      { name: "BFA", duration: "4 years", link: "/universities?course=bfa", fees: "₹3-8L" },
      { name: "B.Arch", duration: "5 years", link: "/universities?course=barch", fees: "₹5-15L" }
    ]
  }
];

const categories = [
  { name: "All", value: "all" },
  { name: "Technical", value: "technical" },
  { name: "Medical", value: "medical" },
  { name: "Legal", value: "legal" },
  { name: "Business", value: "business" },
  { name: "Arts", value: "arts" },
  { name: "Science", value: "science" },
  { name: "Media", value: "media" },
  { name: "Design", value: "design" }
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const filtered = courses.filter(course => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.subcourses.some(sub => sub.name.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategory]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Explore Academic Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of undergraduate programs across various disciplines. 
            Find detailed information about courses, duration, fees, and career prospects.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded-lg shadow-md">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2 items-center w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 md:flex-none px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button
                onClick={clearFilters}
                className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing {filteredCourses.length} out of {courses.length} programs
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              icon={course.icon}
              subcourses={course.subcourses}
              bgColor={course.bgColor}
              hoverColor={course.hoverColor}
              averageSalary={course.averageSalary}
              jobRoles={course.jobRoles}
            />
          ))}


        </div>

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-600 mb-4">No courses found</p>
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none"
            aria-label="Scroll to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Courses;
