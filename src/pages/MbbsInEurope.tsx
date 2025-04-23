import React from 'react';
import { Stethoscope, GraduationCap, Award, DollarSign, Clock, MapPin, Globe, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const europeanCountries = [
  {
    name: "Poland",
    image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    universities: 12,
    duration: "6 years",
    language: "English",
    recognition: "WHO, MCI, EU",
    features: [
      "Top Medical Universities",
      "Modern Infrastructure",
      "Clinical Training",
      "Affordable Fees"
    ]
  },
  {
    name: "Bulgaria",
    image: "https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    universities: 8,
    duration: "6 years",
    language: "English",
    recognition: "WHO, MCI, EU",
    features: [
      "Quality Education",
      "Low Living Costs",
      "Rich Culture",
      "Safe Environment"
    ]
  },
  {
    name: "Hungary",
    image: "https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    universities: 6,
    duration: "6 years",
    language: "English",
    recognition: "WHO, MCI, EU",
    features: [
      "Historic Universities",
      "Research Focus",
      "Modern Facilities",
      "Global Alumni"
    ]
  },
  {
    name: "Romania",
    image: "https://images.unsplash.com/photo-1547223487-c0eda7039c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    universities: 10,
    duration: "6 years",
    language: "English",
    recognition: "WHO, MCI, EU",
    features: [
      "Practical Training",
      "Affordable Education",
      "European Standards",
      "Student Support"
    ]
  },
  {
    name: "Czech Republic",
    image: "https://images.unsplash.com/photo-1562624475-96c2bc08fab9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    universities: 7,
    duration: "6 years",
    language: "English",
    recognition: "WHO, MCI, EU",
    features: [
      "Excellence in Medicine",
      "Research Opportunities",
      "Historic Institutions",
      "Modern Technology"
    ]
  },
  {
    name: "Slovakia",
    image: "https://images.unsplash.com/photo-1589994160839-163cd867cfe8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    universities: 4,
    duration: "6 years",
    language: "English",
    recognition: "WHO, MCI, EU",
    features: [
      "Quality Education",
      "Affordable Living",
      "Clinical Experience",
      "Student-Friendly"
    ]
  }
];

const MbbsInEurope = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <Stethoscope className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Study MBBS in Europe
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            Choose from top European destinations for your medical education journey
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors">
              Get Free Counseling
            </button>
            <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
              Download Country Guide
            </button>
          </div>
        </div>
      </section>

      {/* Why Study MBBS in Europe */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Study MBBS in Europe?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <GraduationCap className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
              <p className="text-gray-600 dark:text-gray-300">World-class medical education with modern facilities</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <Globe className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Recognition</h3>
              <p className="text-gray-600 dark:text-gray-300">Degrees recognized worldwide including WHO and MCI</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <DollarSign className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Affordable Fees</h3>
              <p className="text-gray-600 dark:text-gray-300">Cost-effective education compared to other countries</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <Users className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cultural Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">Rich European culture and diverse student community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Study Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {europeanCountries.map((country, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${country.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Study in {country.name}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Building className="w-5 h-5 text-rose-600" />
                      <span>{country.universities} Medical Universities</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Clock className="w-5 h-5 text-rose-600" />
                      <span>{country.duration} Duration</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Award className="w-5 h-5 text-rose-600" />
                      <span>{country.recognition}</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {country.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-rose-600 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/mbbs/${country.name.toLowerCase()}`}
                    className="block w-full bg-rose-600 text-white text-center py-3 rounded-lg hover:bg-rose-700 transition-colors"
                  >
                    Explore Universities
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your European Medical Journey Today</h2>
          <p className="text-xl mb-8">Get expert guidance for MBBS admission in top European universities</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors">
              Get Free Counseling
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MbbsInEurope;