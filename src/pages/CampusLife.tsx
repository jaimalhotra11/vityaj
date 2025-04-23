import React from 'react';
import { Users, Home, Utensils, Dumbbell, BookOpen, Music, Globe, Heart } from 'lucide-react';

const CampusLife = () => {
  const facilities = [
    {
      icon: <Home className="w-12 h-12 text-rose-600" />,
      title: "Student Housing",
      description: "Modern dormitories with all amenities",
      features: [
        "Single & Shared Rooms",
        "24/7 Security",
        "Wi-Fi Coverage",
        "Common Areas"
      ]
    },
    {
      icon: <Utensils className="w-12 h-12 text-rose-600" />,
      title: "Dining Facilities",
      description: "Multiple dining options across campus",
      features: [
        "International Cuisine",
        "Vegetarian Options",
        "Halal Food",
        "Cafes & Restaurants"
      ]
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-rose-600" />,
      title: "Sports & Recreation",
      description: "World-class sports facilities",
      features: [
        "Gymnasium",
        "Swimming Pool",
        "Sports Fields",
        "Indoor Courts"
      ]
    },
    {
      icon: <BookOpen className="w-12 h-12 text-rose-600" />,
      title: "Academic Facilities",
      description: "State-of-the-art learning spaces",
      features: [
        "Modern Libraries",
        "Study Rooms",
        "Computer Labs",
        "Research Centers"
      ]
    }
  ];

  const activities = [
    {
      title: "Cultural Events",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Regular cultural festivals and events celebrating diversity"
    },
    {
      title: "Student Clubs",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Various clubs and societies for every interest"
    },
    {
      title: "Sports Teams",
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Competitive sports teams and intramural leagues"
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      country: "USA",
      quote: "The campus life here is amazing. There's always something happening!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Maria Garcia",
      country: "Spain",
      quote: "I love the diversity and cultural exchange on campus.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt",
      quote: "The facilities and support services make you feel at home.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
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
              Campus Life
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Experience vibrant student life with world-class facilities, diverse activities,
            and a welcoming international community.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Campus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="mb-4">{facility.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{facility.description}</p>
                <ul className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Heart className="w-4 h-4 text-rose-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Activities */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Student Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${activity.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Student Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <Globe className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">International Community</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Students from 50+ countries</li>
                <li>• Cultural exchange programs</li>
                <li>• International festivals</li>
                <li>• Language exchange clubs</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <Music className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Arts & Culture</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Music performances</li>
                <li>• Art exhibitions</li>
                <li>• Theater productions</li>
                <li>• Cultural workshops</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <Users className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Student Support</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Academic counseling</li>
                <li>• Mental health support</li>
                <li>• Career guidance</li>
                <li>• International student office</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Student Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Vibrant Campus Community</h2>
          <p className="text-xl mb-8">Experience student life at its best</p>
          <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;