import React from 'react';
import { Home, Building2, Shield, Wifi, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Accommodation = () => {
  const accommodationTypes = [
    {
      icon: <Building2 className="w-12 h-12 text-rose-600" />,
      title: "University Hostels",
      description: "Safe and comfortable on-campus accommodation",
      features: [
        "24/7 Security",
        "Mess Facilities",
        "Wi-Fi Coverage",
        "Common Areas",
        "Laundry Services",
        "Study Rooms"
      ],
      price: "From $200/month"
    },
    {
      icon: <Home className="w-12 h-12 text-rose-600" />,
      title: "Private Apartments",
      description: "Modern apartments near campus",
      features: [
        "Furnished Options",
        "Kitchen Facilities",
        "Utilities Included",
        "Maintenance Support",
        "Security Systems",
        "Parking Available"
      ],
      price: "From $400/month"
    },
    {
      icon: <Users className="w-12 h-12 text-rose-600" />,
      title: "Shared Housing",
      description: "Cost-effective shared accommodation",
      features: [
        "Shared Facilities",
        "Roommate Matching",
        "Bills Included",
        "Furnished Rooms",
        "Community Events",
        "Support Services"
      ],
      price: "From $150/month"
    }
  ];

  const facilities = [
    {
      icon: <Shield className="w-8 h-8 text-rose-600" />,
      title: "Security",
      description: "24/7 security personnel and CCTV surveillance"
    },
    {
      icon: <Wifi className="w-8 h-8 text-rose-600" />,
      title: "Internet",
      description: "High-speed Wi-Fi coverage throughout"
    },
    {
      icon: <Users className="w-8 h-8 text-rose-600" />,
      title: "Community",
      description: "Active student community and events"
    },
    {
      icon: <MapPin className="w-8 h-8 text-rose-600" />,
      title: "Location",
      description: "Convenient access to campus and amenities"
    }
  ];

  const locations = [
    {
      city: "New Delhi",
      areas: ["North Campus", "South Campus", "Karol Bagh", "Laxmi Nagar"],
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      city: "Mumbai",
      areas: ["Andheri", "Powai", "Vile Parle", "Bandra"],
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      city: "Bangalore",
      areas: ["Koramangala", "HSR Layout", "Indiranagar", "BTM Layout"],
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <Home className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Student Accommodation
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            Find your perfect home away from home with our comprehensive accommodation solutions
          </p>
          <Link
            to="/contact"
            className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors inline-flex items-center gap-2"
          >
            Find Accommodation
            <MapPin className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Accommodation Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodationTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{type.description}</p>
                <ul className="space-y-2 mb-4">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Shield className="w-4 h-4 text-rose-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-rose-600 font-semibold">{type.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Standard Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="mb-4">{facility.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${location.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{location.city}</h3>
                  <div className="space-y-2">
                    {location.areas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <MapPin className="w-4 h-4 text-rose-600" />
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Finding Accommodation?</h2>
          <p className="text-xl mb-8">Our accommodation experts will help you find the perfect place</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              Contact Us
            </Link>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors">
              View Availability
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;