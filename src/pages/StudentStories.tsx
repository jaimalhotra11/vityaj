import React from 'react';
import { Users, Quote, Play, ArrowRight } from 'lucide-react';

const StudentStories = () => {
  const stories = [
    {
      name: "Sarah Johnson",
      country: "Nigeria",
      program: "MBBS",
      university: "All India Institute of Medical Sciences",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "Studying medicine in India has been a transformative experience. The quality of education and clinical exposure is exceptional.",
      video: "https://example.com/video1.mp4"
    },
    {
      name: "Mohammed Al-Sayed",
      country: "UAE",
      program: "MD Pediatrics",
      university: "Christian Medical College",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "The advanced medical facilities and experienced faculty have helped me develop strong clinical skills.",
      video: "https://example.com/video2.mp4"
    },
    {
      name: "Grace Muthoni",
      country: "Kenya",
      program: "MBBS",
      university: "Armed Forces Medical College",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "The multicultural environment and supportive community made my transition to studying abroad seamless.",
      video: "https://example.com/video3.mp4"
    }
  ];

  const testimonials = [
    {
      content: "The support from Vityaz Global throughout my application process was invaluable. They guided me every step of the way.",
      author: "John Smith",
      role: "Medical Student",
      country: "South Africa"
    },
    {
      content: "I'm grateful for the scholarship assistance and career guidance provided by the team. It made my dream of studying abroad possible.",
      author: "Maria Garcia",
      role: "Engineering Student",
      country: "Mexico"
    },
    {
      content: "The cultural exposure and quality education have exceeded my expectations. I've made friends from all over the world.",
      author: "Ahmed Hassan",
      role: "MBBS Student",
      country: "Egypt"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <Users className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Student Stories
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Hear from our students about their experiences, challenges, and
            successes in their educational journey.
          </p>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-64 object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-60 transition-opacity">
                    <Play className="w-16 h-16 text-white" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {story.program} at {story.university}
                  </p>
                  <p className="text-rose-600 mb-4">{story.country}</p>
                  <blockquote className="italic text-gray-600 dark:text-gray-300">
                    "{story.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <Quote className="w-8 h-8 text-rose-600 mb-4" />
                <blockquote className="text-gray-600 dark:text-gray-300 mb-6">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  <p className="text-rose-600">{testimonial.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Success Story</h2>
          <p className="text-xl mb-8">Join our community of successful international students</p>
          <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors flex items-center gap-2 mx-auto">
            Begin Your Journey
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default StudentStories;