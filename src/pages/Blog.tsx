import React from 'react';
import { Calendar, User, Clock, ChevronRight, Facebook, Twitter, Instagram, Mail, ArrowRight, TrendingUp, Award, Heart, Eye, Star, Zap, BookOpen, Globe, MapPin, Phone, MessageCircle } from 'lucide-react';

function App() {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Global Education: Trends to Watch in 2025",
      excerpt: "Explore how technology and policy changes are reshaping education systems worldwide and creating new opportunities for international students.",
      author: "Dr. Emma Richardson",
      date: "June 15, 2025",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      category: "Featured",
      readTime: "8 min read",
      views: "4.2K"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Advanced Study Techniques Based on Cognitive Science",
      excerpt: "Discover evidence-based learning methods that improve retention and recall for exams, helping you excel in your academic journey.",
      author: {
        name: "Dr. Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      date: "June 10, 2025",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Study Tips",
      categoryColor: "purple",
      readTime: "6 min read"
    },
    {
      id: 2,
      title: "Complete Guide to Securing International Scholarships",
      excerpt: "Application strategies and essay writing tips for major scholarships around the world, with special focus on opportunities in India.",
      author: {
        name: "Prof. James Wilson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      date: "June 8, 2025",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Scholarships",
      categoryColor: "green",
      readTime: "10 min read"
    },
    {
      id: 3,
      title: "Top 20 Universities for International Students in India",
      excerpt: "Best institutions based on academic excellence, student support systems, and international student satisfaction ratings.",
      author: {
        name: "Dr. Lisa Thompson",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      date: "June 5, 2025",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "University Guide",
      categoryColor: "blue",
      readTime: "12 min read"
    },
    {
      id: 4,
      title: "Cultural Intelligence: Skills for International Students in India",
      excerpt: "Navigate cultural differences and thrive in diverse academic environments across India's vibrant cultural landscape.",
      author: {
        name: "Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      date: "June 3, 2025",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Student Life",
      categoryColor: "orange",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Mastering the IELTS: Strategies for a Band 8+ Score",
      excerpt: "Expert techniques and practice methods to excel in all sections of the IELTS exam, essential for studying in India's top universities.",
      author: {
        name: "Dr. Aisha Patel",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      date: "June 1, 2025",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Test Prep",
      categoryColor: "red",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Financial Planning for International Education in India",
      excerpt: "Budgeting strategies, funding sources, and money management tips for studying in India, where quality education meets affordability.",
      author: {
        name: "Robert Chang",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
      },
      date: "May 29, 2025",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Financial Aid",
      categoryColor: "emerald",
      readTime: "11 min read"
    }
  ];

  const popularPosts = [
    {
      id: 1,
      title: "Student Visa Guide for India: Common Mistakes to Avoid",
      date: "May 10, 2025",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      views: "12.4K"
    },
    {
      id: 2,
      title: "Acing Your Scholarship Interview: Expert Tips from Indian University Advisors",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      views: "9.8K"
    },
    {
      id: 3,
      title: "How to Choose the Right University Program in India",
      date: "May 1, 2025",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      views: "8.5K"
    },
    {
      id: 4,
      title: "Medical Education in India: A Guide for International Students",
      date: "April 25, 2025",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      views: "7.2K"
    }
  ];

  const categories = [
    { name: "Study in India", count: 42, icon: <Globe className="h-4 w-4 mr-2 text-blue-600" />, color: "blue" },
    { name: "Scholarships", count: 28, icon: <Award className="h-4 w-4 mr-2 text-green-600" />, color: "green" },
    { name: "University Guides", count: 35, icon: <BookOpen className="h-4 w-4 mr-2 text-purple-600" />, color: "purple" },
    { name: "Student Life", count: 19, icon: <Heart className="h-4 w-4 mr-2 text-orange-600" />, color: "orange" },
    { name: "Test Preparation", count: 24, icon: <Star className="h-4 w-4 mr-2 text-red-600" />, color: "red" },
    { name: "Career Advice", count: 31, icon: <TrendingUp className="h-4 w-4 mr-2 text-indigo-600" />, color: "indigo" }
  ];

  const tags = [
    "#StudyInIndia", "#IndianScholarships", "#StudentLifeIndia", "#MedicalEducation", 
    "#EngineeringInIndia", "#StudentVisa", "#IELTS", "#TOEFL", 
    "#AffordableEducation", "#GlobalCampus", "#InternationalStudent"
  ];

  const testimonials = [
    {
      id: 1,
      quote: "The guidance I received through this blog helped me secure a full scholarship to study medicine in India. The step-by-step application advice was invaluable!",
      name: "Sophia Martinez",
      country: "Mexico",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      quote: "As a student from Nigeria, I was worried about adapting to life in India. The cultural integration tips on this blog made my transition smooth and enjoyable.",
      name: "Emmanuel Okonkwo",
      country: "Nigeria",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const locations = [
    {
      city: "New Delhi",
      address: "Connaught Place, New Delhi 110001",
      phone: "+91 11 2345 6789"
    },
    {
      city: "Mumbai",
      address: "Bandra West, Mumbai 400050",
      phone: "+91 22 6789 1234"
    },
    {
      city: "Bangalore",
      address: "Indiranagar, Bangalore 560038",
      phone: "+91 80 4567 8901"
    }
  ];

  const upcomingEvents = [
    {
      title: "Virtual Open Day: Study Medicine in India",
      date: "July 15, 2025",
      time: "10:00 AM - 12:00 PM IST"
    },
    {
      title: "Scholarship Application Workshop",
      date: "July 22, 2025",
      time: "2:00 PM - 4:00 PM IST"
    },
    {
      title: "Student Visa Information Session",
      date: "July 30, 2025",
      time: "11:00 AM - 1:00 PM IST"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">EduInsights Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted guide to studying in India - Expert advice, insider tips, and success stories
          </p>
          
          {/* Navigation Pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#" className="bg-white/20 hover:bg-white/30 px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
              All Articles
            </a>
            <a href="#" className="bg-white text-blue-700 px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
              Featured
            </a>
            <a href="#" className="bg-white/20 hover:bg-white/30 px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
              Latest
            </a>
            <a href="#" className="bg-white/20 hover:bg-white/30 px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
              Popular
            </a>
            <a href="#" className="bg-white/20 hover:bg-white/30 px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
              Success Stories
            </a>
          </div>
        </div>
      </header>

      {/* Featured Post */}
      <section className="container mx-auto px-4 py-10 -mt-16">
        <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01]">
          <img 
            src={featuredPosts[0].image}
            alt="Featured post" 
            className="w-full h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-8 md:p-12">
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                {featuredPosts[0].category}
              </span>
              <span className="text-gray-300 text-sm flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {featuredPosts[0].readTime}
              </span>
              <span className="text-gray-300 text-sm flex items-center">
                <Eye className="h-3 w-3 mr-1" />
                {featuredPosts[0].views}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {featuredPosts[0].title}
            </h2>
            <p className="text-gray-200 text-xl mb-6 max-w-3xl">
              {featuredPosts[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-300 text-sm">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">By {featuredPosts[0].author}</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span>{featuredPosts[0].date}</span>
              </div>
              <button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-full text-sm font-medium transition-colors flex items-center">
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in India Banner */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Study in India?</h2>
              <ul className="space-y-4 text-white">
                <li className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-3 mt-1">
                    <Award className="h-4 w-4" />
                  </div>
                  <p><span className="font-semibold">Globally Recognized Degrees</span> - Engineering, Medicine, Management & More</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-3 mt-1">
                    <Star className="h-4 w-4" />
                  </div>
                  <p><span className="font-semibold">World-Class Education at Affordable Costs</span> - High-quality & budget-friendly</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-3 mt-1">
                    <Heart className="h-4 w-4" />
                  </div>
                  <p><span className="font-semibold">Safe & Friendly Society</span> - A diverse, multicultural environment</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-3 mt-1">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <p><span className="font-semibold">Thriving Career Opportunities</span> - Global exposure & job placements</p>
                </li>
              </ul>
              <button className="mt-6 bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center">
                Learn More About Studying in India
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1565003665784-d5ca7080378a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Students in India" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Success Stories from International Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg relative">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 bg-indigo-600 text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
              </div>
              <p className="text-gray-700 italic mb-6 text-lg">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">International Student from {testimonial.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Articles Section */}
          <main className="lg:w-2/3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Latest Insights</h2>
              <div className="flex space-x-2">
                <button className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">All Topics</button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium">For Students</button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium">For Parents</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:translate-y-[-5px] group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-56 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`bg-${article.categoryColor}-100 text-${article.categoryColor}-800 text-xs font-medium px-2.5 py-1 rounded-full`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-xs mb-2">
                      <Clock className="w-3 h-3 mr-1" />
                      <span className="mr-3">{article.readTime}</span>
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={article.author.avatar} 
                          alt={article.author.name} 
                          className="w-8 h-8 rounded-full mr-2 object-cover border-2 border-white"
                        />
                        <span className="text-sm text-gray-700 font-medium">{article.author.name}</span>
                      </div>
                      <a href="#" className="text-blue-700 font-medium text-sm flex items-center">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-8 flex justify-center">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-full transition-colors text-sm flex items-center shadow-md hover:shadow-lg">
                Load More Articles
                <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* About Blog */}
            <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-3">About Vityaz Global</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Vityaz Global is committed to helping international students fulfill their dream of studying in India's top universities. With a seamless admission process, expert guidance, and 24/7 support, students can focus on their education while we handle everything else.
              </p>
              <a href="#" className="inline-flex items-center text-sm font-medium bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                Our Services
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Explore Topics</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors">
                      <span className="flex items-center text-gray-700 text-sm font-medium">
                        {category.icon}
                        {category.name}
                      </span>
                      <span className={`bg-${category.color}-100 text-${category.color}-800 text-xs font-medium px-2.5 py-0.5 rounded-full`}>
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Most Popular</h3>
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <a key={post.id} href="#" className="flex gap-4 group">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <span className="absolute top-0 left-0 bg-black/60 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-tl-lg rounded-br-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 group-hover:text-blue-700 transition-colors text-sm leading-snug">
                        {post.title}
                      </h4>
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="mr-3">{post.date}</span>
                        <Eye className="h-3 w-3 mr-1" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Get Expert Guidance</h3>
              <p className="text-indigo-100 mb-4 text-sm">Receive personalized advice for studying in India. Our education experts will help you find the perfect program.</p>
              <form className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full px-4 py-2.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                />
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                />
                <select className="w-full px-4 py-2.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white text-sm">
                  <option value="">Interested program</option>
                  <option value="medicine">Medicine</option>
                  <option value="engineering">Engineering</option>
                  <option value="business">Business</option>
                  <option value="arts">Arts & Humanities</option>
                  <option value="science">Science</option>
                </select>
                <button className="w-full bg-white text-indigo-700 hover:bg-indigo-50 transition-colors font-medium px-4 py-2.5 rounded-lg text-sm flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Request Free Consultation
                </button>
              </form>
              <p className="text-xs text-indigo-200 mt-3 text-center">
                We respect your privacy. Your information is safe with us.
              </p>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="bg-gray-100 hover:bg-blue-100 hover:text-blue-700 text-gray-800 text-xs px-3 py-1.5 rounded-full transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Follow Us */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex justify-between">
                <a href="#" className="flex flex-col items-center justify-center w-16 h-16 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                  <Facebook className="h-6 w-6 text-blue-700" />
                  <span className="text-xs mt-1 text-blue-700">Facebook</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center w-16 h-16 bg-sky-100 rounded-lg hover:bg-sky-200 transition-colors">
                  <Twitter className="h-6 w-6 text-sky-600" />
                  <span className="text-xs mt-1 text-sky-600">Twitter</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center w-16 h-16 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors">
                  <Instagram className="h-6 w-6 text-pink-700" />
                  <span className="text-xs mt-1 text-pink-700">Instagram</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center w-16 h-16 bg-red-100 rounded-lg hover:bg-red-200 transition-colors">
                  <Mail className="h-6 w-6 text-red-700" />
                  <span className="text-xs mt-1 text-red-700">Email</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Services Overview */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Exclusive Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Admission Assistance</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Eligibility Certificate Verification</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Legalization & Embassy Recognition</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>University Admission Interviews</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Pre-Admission & Pre-Departure Counseling</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Visa & Immigration Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Official Invitation for Student Visa</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Complete Visa Application & Processing</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Travel & Medical Insurance Worth €30,000</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Visa Assistance for Parents</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-700"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Travel & Accommodation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Travel Escort for Student Batches</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Airport & Immigration Assistance</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Airport Pickup & Temporary Hotel Stay</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>City Tour & Shopping Assistance</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a href="#" className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-full transition-colors shadow-md hover:shadow-lg">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey to India?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of international students who have successfully started their education in India with our expert guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#" className="bg-blue-600 text-white hover:bg-blue-500 px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center">
              Download Brochure
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </a>
          </div>
        </div>
      </section>

      
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors flex items-center justify-center group">
          <MessageCircle className="h-6 w-6 group-hover:hidden" />
          <span className="hidden group-hover:block text-sm font-medium">Chat with us</span>
        </button>
      </div>
    </div>
  );
}

export default App;