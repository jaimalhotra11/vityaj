import React from 'react';
import { BookOpen, Download, FileText, Video, Globe, MessageCircle } from 'lucide-react';

const Resources = () => {
  const guides = [
    {
      title: "Complete Guide to MBBS in India",
      description: "Everything you need to know about studying medicine in India",
      icon: <BookOpen className="w-6 h-6" />,
      type: "PDF Guide"
    },
    {
      title: "Student Visa Process",
      description: "Step-by-step guide to obtaining your student visa",
      icon: <FileText className="w-6 h-6" />,
      type: "PDF Guide"
    },
    {
      title: "Cost of Living Calculator",
      description: "Estimate your monthly expenses in different cities",
      icon: <Globe className="w-6 h-6" />,
      type: "Interactive Tool"
    }
  ];

  const videos = [
    {
      title: "Life as a Medical Student in India",
      duration: "15:30",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Campus Tour: Top Medical Universities",
      duration: "12:45",
      thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Student Success Stories",
      duration: "18:20",
      thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const faqs = [
    {
      question: "What are the eligibility criteria for MBBS in India?",
      answer: "To study MBBS in India, international students need to have completed 12th grade with Physics, Chemistry, and Biology, and meet the minimum age requirement of 17 years."
    },
    {
      question: "How much does it cost to study MBBS in India?",
      answer: "The cost of studying MBBS in India varies by university but typically ranges from $6,000 to $12,000 per year, including tuition fees."
    },
    {
      question: "Is NEET mandatory for international students?",
      answer: "Yes, NEET is mandatory for international students seeking admission to MBBS programs in India, except for those applying through government schemes."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Student Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Access guides, tools, and information to support your educational journey
          </p>
        </div>
      </section>

      {/* Guides & Resources */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Guides & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-rose-100 dark:bg-rose-900 rounded-lg">
                    {guide.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{guide.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{guide.type}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{guide.description}</p>
                <button className="flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download Now</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Video Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div 
                  className="relative h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Video className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{video.title}</h3>
                  <button className="text-rose-600 hover:text-rose-700 transition-colors text-sm">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Have More Questions?</h2>
          <p className="text-xl mb-8">Our education experts are here to help you</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Chat with an Expert
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download All Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;