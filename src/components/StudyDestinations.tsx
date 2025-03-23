import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Globe, DollarSign, ArrowRight, PhoneCall } from 'lucide-react';

const StudyDestinations = () => {
  const destinations = [
    {
      title: "Study in India",
      description: "World-class education at affordable costs with global recognition",
      features: [
        "Top-ranked universities",
        "Affordable tuition fees",
        "Global recognition",
        "Rich cultural experience"
      ],
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      link: "/mbbs-india",
      icon: <DollarSign className="w-8 h-8 text-rose-600" />
    },
    {
      title: "Affordable mbbs in Europe",
      description: "Experience excellence in education with European standards",
      features: [
        "EU recognized degrees",
        "Modern infrastructure",
        "International exposure",
        "Career opportunities"
      ],
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      link: "/mbbs-europe",
      icon: <Globe className="w-8 h-8 text-rose-600" />
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Study Destination</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-70 transition-opacity"></div>
              </div>
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="mb-auto">
                  <div className="inline-block p-3 bg-white dark:bg-gray-800 rounded-lg mb-4">
                    {destination.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{destination.title}</h3>
                  <p className="text-gray-200 mb-6">{destination.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {destination.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-200">
                        <GraduationCap className="w-5 h-5 text-rose-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={destination.link}
                  className="inline-flex items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Counselling Button */}
        <div className="flex justify-center">
          <Link
            to="/counselling"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-600 to-rose-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-rose-500/25 hover:scale-105 transition-all duration-300"
          >
            <PhoneCall className="w-6 h-6" />
            Avail Free Counselling
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;