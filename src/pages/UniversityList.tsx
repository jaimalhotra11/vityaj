import React, { useState } from 'react';
import { Search, MapPin, GraduationCap, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const universities = [
    {
      name: "SRM Kattankulathur",
      location: "Chennai, India",
      courses: ["MBBS", "MD", "MS"],
      ranking: "#21 in India",
      students: "5,000+",
      fees: "$8,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "SRM Ramapuram",
      location: "Chennai, India",
      courses: ["Medicine", "Dentistry"],
      ranking: "Top 1% Worldwide",
      students: "8,000+",
      fees: "€8,000/year",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Symbiosis Pune",
      location: "Pune, India",
      courses: ["Management", "Law", "Engineering"],
      ranking: "Top 10 in India",
      students: "10,000+",
      fees: "$10,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Parul University",
      location: "Vadodara, India",
      courses: ["Engineering", "Pharmacy", "Architecture"],
      ranking: "Top 50 in India",
      students: "15,000+",
      fees: "$5,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Graphic Era University",
      location: "Dehradun, India",
      courses: ["Engineering", "Management", "Computer Applications"],
      ranking: "Top 30 in India",
      students: "12,000+",
      fees: "$6,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "DIT University",
      location: "Dehradun, India",
      courses: ["Engineering", "Architecture", "Management"],
      ranking: "Top 40 in India",
      students: "7,000+",
      fees: "$7,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Amity University Rajasthan",
      location: "Jaipur, India",
      courses: ["Engineering", "Management", "Law"],
      ranking: "Top 20 in India",
      students: "20,000+",
      fees: "$9,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Amity University Gurgaon",
      location: "Gurgaon, India",
      courses: ["Engineering", "Management", "Biotechnology"],
      ranking: "Top 25 in India",
      students: "18,000+",
      fees: "$9,500/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Manipal University",
      location: "Manipal, India",
      courses: ["Medicine", "Engineering", "Management"],
      ranking: "Top 15 in India",
      students: "25,000+",
      fees: "$12,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Lovely Professional University (LPU)",
      location: "Punjab, India",
      courses: ["Engineering", "Management", "Pharmacy"],
      ranking: "Top 35 in India",
      students: "30,000+",
      fees: "$6,500/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Chandigarh University",
      location: "Chandigarh, India",
      courses: ["Engineering", "Management", "Law"],
      ranking: "Top 50 in India",
      students: "22,000+",
      fees: "$7,500/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Thapar Institute of Engineering and Technology",
      location: "Patiala, India",
      courses: ["Engineering", "Management", "Computer Science"],
      ranking: "Top 10 in India",
      students: "10,000+",
      fees: "$11,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Nirma University",
      location: "Ahmedabad, India",
      courses: ["Engineering", "Management", "Pharmacy"],
      ranking: "Top 20 in India",
      students: "15,000+",
      fees: "$8,500/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "VIT Jaipur",
      location: "Jaipur, India",
      courses: ["Engineering", "Management", "Computer Applications"],
      ranking: "Top 30 in India",
      students: "12,000+",
      fees: "$7,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Poornima University",
      location: "Jaipur, India",
      courses: ["Engineering", "Management", "Design"],
      ranking: "Top 40 in India",
      students: "8,000+",
      fees: "$6,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "JECRC University",
      location: "Jaipur, India",
      courses: ["Engineering", "Management", "Science"],
      ranking: "Top 50 in India",
      students: "10,000+",
      fees: "$5,500/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "NMIMS Mumbai",
      location: "Mumbai, India",
      courses: ["Management", "Engineering", "Pharmacy"],
      ranking: "Top 10 in India",
      students: "20,000+",
      fees: "$12,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Presidency University",
      location: "Bengaluru, India",
      courses: ["Management", "Law", "Commerce"],
      ranking: "Top 25 in India",
      students: "5,000+",
      fees: "$9,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "NIT Silchar",
      location: "Silchar, India",
      courses: ["Engineering", "Management", "Science"],
      ranking: "Top 20 in India",
      students: "5,000+",
      fees: "$3,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "GITAM University",
      location: "Visakhapatnam, India",
      courses: ["Engineering", "Management", "Pharmacy"],
      ranking: "Top 50 in India",
      students: "10,000+",
      fees: "$4,500/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Hindustan Institute of Technology and Science (HITS)",
      location: "Chennai, India",
      courses: ["Engineering", "Management", "Architecture"],
      ranking: "Top 40 in India",
      students: "8,000+",
      fees: "$5,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Bennet University",
      location: "Greater Noida, India",
      courses: ["Engineering", "Management", "Law"],
      ranking: "Top 30 in India",
      students: "6,000+",
      fees: "$7,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Vignan University",
      location: "Guntur, India",
      courses: ["Engineering", "Management", "Pharmacy"],
      ranking: "Top 60 in India",
      students: "12,000+",
      fees: "$3,500/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Manav Rachna University",
      location: "Faridabad, India",
      courses: ["Engineering", "Management", "Design"],
      ranking: "Top 70 in India",
      students: "9,000+",
      fees: "$4,000/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Alliance University",
      location: "Bengaluru, India",
      courses: ["Management", "Law", "Commerce"],
      ranking: "Top 25 in India",
      students: "7,000+",
      fees: "$8,500/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Acharya Bangalore B School",
      location: "Bengaluru, India",
      courses: ["Management", "Commerce", "Finance"],
      ranking: "Top 35 in India",
      students: "3,000+",
      fees: "$6,500/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "SRM University AP",
      location: "Amaravati, India",
      courses: ["Engineering", "Management", "Science"],
      ranking: "Top 50 in India",
      students: "5,000+",
      fees: "$5,500/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Christ University",
      location: "Bengaluru, India",
      courses: ["Management", "Law", "Commerce"],
      ranking: "Top 20 in India",
      students: "10,000+",
      fees: "$7,500/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    },
    {
      name: "Atria Institute of Technology",
      location: "Bengaluru, India",
      courses: ["Engineering", "Management", "Design"],
      ranking: "Top 40 in India",
      students: "4,000+",
      fees: "$4,500/year",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      country: "India"
    }
];

const UniversityList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [visibleUniversities, setVisibleUniversities] = useState(6); // Number of universities to show initially

  const filteredUniversities = universities.filter((university) => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || university.country.toLowerCase() === selectedCountry.toLowerCase();
    return matchesSearch && matchesCountry;
  });

  const loadMoreUniversities = () => {
    setVisibleUniversities((prev) => prev + 6); // Increase the number of visible universities
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Partner Universities
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            Explore top-ranked universities across India and Europe
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search universities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                />
              </div>
            </div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
            >
              <option value="all">All Countries</option>
              <option value="india">India</option>
              <option value="europe">Europe</option>
            </select>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.slice(0, visibleUniversities).map((university, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${university.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{university.name}</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{university.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>{university.courses.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{university.students} Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{university.fees}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link 
                      to={`/universities/${university.name.toLowerCase().replace(/ /g, '-')}`}
                      className="w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition-colors flex justify-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleUniversities < filteredUniversities.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={loadMoreUniversities}
                className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Choosing a University?</h2>
          <p className="text-xl mb-8">Our education experts will guide you to the perfect choice</p>
          <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
            Get Free Counseling
          </button>
        </div>
      </section>
    </div>
  );
};

export { universities };
export default UniversityList;
