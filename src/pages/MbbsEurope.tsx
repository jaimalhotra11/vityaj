import React from 'react';
import { Stethoscope, GraduationCap, Award, DollarSign, Clock, MapPin, BookOpen, Users, Star, FileText, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const MbbsEurope = () => {
  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 text-rose-600" />,
      title: "European Standards",
      description: "Study in EU-recognized universities with modern infrastructure"
    },
    {
      icon: <Award className="w-12 h-12 text-rose-600" />,
      title: "Global Recognition",
      description: "Degrees recognized worldwide including WHO and European Medical Council"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-rose-600" />,
      title: "Affordable Fees",
      description: "Quality medical education at competitive prices compared to Western universities"
    },
    {
      icon: <Clock className="w-12 h-12 text-rose-600" />,
      title: "Duration",
      description: "Typically 6 years including clinical rotations"
    }
  ];

  const universities = [
    {
      name: "Charles University",
      location: "Prague, Czech Republic",
      ranking: "Top 1% Worldwide",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Historic Medical Institution",
        "Advanced Research Facilities",
        "International Faculty",
        "Modern Teaching Hospitals"
      ]
    },
    {
      name: "Semmelweis University",
      location: "Budapest, Hungary",
      ranking: "#1 in Hungary",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      features: [
        "250+ Years of Excellence",
        "Clinical Training",
        "Research Programs",
        "Global Alumni Network"
      ]
    },
    {
      name: "Medical University of Warsaw",
      location: "Warsaw, Poland",
      ranking: "Top Medical University",
      image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Modern Medical Campus",
        "International Programs",
        "Research Opportunities",
        "Clinical Partnerships"
      ]
    }
  ];

  const countries = [
    {
      name: "Czech Republic",
      fee: "€8,000/year",
      features: [
        "Historic Medical Universities",
        "English-taught Programs",
        "Central European Location",
        "Rich Cultural Experience"
      ]
    },
    {
      name: "Hungary",
      fee: "€9,000/year",
      features: [
        "World-renowned Medical Schools",
        "Modern Healthcare System",
        "Practical Training Focus",
        "Student-friendly Cities"
      ]
    },
    {
      name: "Poland",
      fee: "€7,500/year",
      features: [
        "Affordable Living Costs",
        "EU Standards",
        "Clinical Experience",
        "International Community"
      ]
    },
    {
      name: "Bulgaria",
      fee: "€7,000/year",
      features: [
        "Competitive Fees",
        "Quality Education",
        "Mediterranean Climate",
        "Growing Medical Hub"
      ]
    }
  ];

  const advantages = [
    {
      icon: <BookOpen className="w-8 h-8 text-rose-600" />,
      title: "European Medical Curriculum",
      description: "Study medicine following EU standards and practices"
    },
    {
      icon: <Globe className="w-8 h-8 text-rose-600" />,
      title: "International Recognition",
      description: "Practice medicine worldwide with a European degree"
    },
    {
      icon: <Users className="w-8 h-8 text-rose-600" />,
      title: "Multicultural Environment",
      description: "Study alongside students from around the world"
    },
    {
      icon: <Star className="w-8 h-8 text-rose-600" />,
      title: "Clinical Experience",
      description: "Hands-on training in modern European hospitals"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <Stethoscope className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              MBBS in Europe
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            Study medicine in Europe's prestigious universities with world-class facilities
            and international recognition.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/apply"
              className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors"
            >
              Apply Now
            </Link>
            <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
              Download European MBBS Guide
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why MBBS in Europe?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries & Fees */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Study Destinations & Fees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countries.map((country, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{country.name}</h3>
                <p className="text-rose-600 font-bold text-2xl mb-4">{country.fee}</p>
                <ul className="space-y-2">
                  {country.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Star className="w-4 h-4 text-rose-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Universities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${university.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{university.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{university.location}</span>
                  </div>
                  <p className="text-rose-600 font-medium mb-4">{university.ranking}</p>
                  <ul className="space-y-2">
                    {university.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Star className="w-4 h-4 text-rose-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">European Medical Education Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="mb-4">{advantage.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your European Medical Journey</h2>
          <p className="text-xl mb-8">Get expert guidance for MBBS admission in top European universities</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              Apply Now
            </Link>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MbbsEurope;