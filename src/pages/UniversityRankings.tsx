import React from 'react';
import { Trophy, Star, Award, TrendingUp, BarChart3 } from 'lucide-react';

const UniversityRankings = () => {
  const rankings = [
    {
      name: "All India Institute of Medical Sciences",
      location: "New Delhi",
      nationalRank: "#1",
      worldRank: "#235",
      researchScore: 92,
      teachingScore: 95,
      employabilityScore: 89,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Christian Medical College",
      location: "Vellore",
      nationalRank: "#2",
      worldRank: "#342",
      researchScore: 88,
      teachingScore: 91,
      employabilityScore: 87,
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Armed Forces Medical College",
      location: "Pune",
      nationalRank: "#3",
      worldRank: "#456",
      researchScore: 85,
      teachingScore: 89,
      employabilityScore: 90,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const rankingCriteria = [
    {
      icon: <Star className="w-8 h-8 text-rose-600" />,
      title: "Academic Excellence",
      description: "Based on faculty qualifications, research output, and academic programs"
    },
    {
      icon: <Trophy className="w-8 h-8 text-rose-600" />,
      title: "Research Impact",
      description: "Measured by research citations, publications, and innovation"
    },
    {
      icon: <Award className="w-8 h-8 text-rose-600" />,
      title: "Global Recognition",
      description: "International accreditations and partnerships"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-rose-600" />,
      title: "Graduate Employability",
      description: "Career success and employer reputation"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <BarChart3 className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              University Rankings
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Discover how our partner universities rank globally and nationally based on
            academic excellence, research impact, and graduate employability.
          </p>
        </div>
      </section>

      {/* Ranking Criteria */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Ranking Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rankingCriteria.map((criteria, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="mb-4">{criteria.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{criteria.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Rankings */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Top Ranked Universities</h2>
          <div className="space-y-8">
            {rankings.map((university, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div 
                    className="h-64 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url(${university.image})` }}
                  />
                  <div className="p-6 md:col-span-2">
                    <h3 className="text-2xl font-semibold mb-2">{university.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{university.location}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">National Rank</p>
                        <p className="text-2xl font-bold text-rose-600">{university.nationalRank}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">World Rank</p>
                        <p className="text-2xl font-bold text-rose-600">{university.worldRank}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Research Score</p>
                        <p className="text-2xl font-bold text-rose-600">{university.researchScore}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Teaching Score</p>
                        <p className="text-2xl font-bold text-rose-600">{university.teachingScore}%</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <button className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition-colors">
                        View Details
                      </button>
                      <button className="border border-rose-600 text-rose-600 px-6 py-2 rounded-lg hover:bg-rose-50 transition-colors">
                        Compare
                      </button>
                    </div>
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
          <h2 className="text-3xl font-bold mb-6">Study at Top-Ranked Universities</h2>
          <p className="text-xl mb-8">Begin your journey towards academic excellence</p>
          <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default UniversityRankings;