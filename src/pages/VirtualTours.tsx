import React from 'react';
import { Video, Camera, Play, Map } from 'lucide-react';

const VirtualTours = () => {
  const tours = [
    {
      name: "All India Institute of Medical Sciences",
      location: "New Delhi",
      thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      duration: "10:25",
      features: [
        "State-of-the-art Labs",
        "Research Centers",
        "Library Facilities",
        "Student Housing"
      ]
    },
    {
      name: "Christian Medical College",
      location: "Vellore",
      thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      duration: "12:15",
      features: [
        "Clinical Facilities",
        "Lecture Halls",
        "Student Commons",
        "Sports Complex"
      ]
    },
    {
      name: "Armed Forces Medical College",
      location: "Pune",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      duration: "15:30",
      features: [
        "Training Centers",
        "Medical Labs",
        "Simulation Rooms",
        "Campus Grounds"
      ]
    }
  ];

  const features = [
    {
      icon: <Camera className="w-8 h-8 text-rose-600" />,
      title: "360° Campus Views",
      description: "Explore every corner of our campuses in immersive detail"
    },
    {
      icon: <Video className="w-8 h-8 text-rose-600" />,
      title: "Guided Video Tours",
      description: "Expert-led tours of facilities and departments"
    },
    {
      icon: <Map className="w-8 h-8 text-rose-600" />,
      title: "Interactive Maps",
      description: "Navigate campus layouts and facilities"
    },
    {
      icon: <Play className="w-8 h-8 text-rose-600" />,
      title: "Live Streams",
      description: "Real-time views of campus life and events"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <Camera className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Virtual Campus Tours
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Experience our partner universities through immersive virtual tours and
            explore world-class facilities from anywhere in the world.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Tour Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tours */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Available Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={tour.thumbnail}
                    alt={tour.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white hover:text-rose-600 transition-colors cursor-pointer" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {tour.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{tour.location}</p>
                  <div className="space-y-2">
                    {tour.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Camera className="w-4 h-4 text-rose-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition-colors">
                    Start Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Campus Life Virtually</h2>
          <p className="text-xl mb-8">Book a guided virtual tour with our counselors</p>
          <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
            Schedule Tour
          </button>
        </div>
      </section>
    </div>
  );
};

export default VirtualTours;