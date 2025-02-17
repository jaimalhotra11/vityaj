import React from 'react';
import { Building2, Globe, Award, Users, BookOpen } from 'lucide-react';

const PartnerUniversities = () => {
  const universities = [
    {
      name: "University of Delhi",
      location: "Delhi, India",
      programs: ["Medical", "Engineering", "Management"],
      ranking: "Top 5 in India"
    },
    {
      name: "Indian Institute of Technology",
      location: "Mumbai, India",
      programs: ["Engineering", "Science"],
      ranking: "Top Engineering Institute"
    },
    {
      name: "All India Institute of Medical Sciences",
      location: "New Delhi, India",
      programs: ["Medical"],
      ranking: "Top Medical College"
    },
    {
      name: "Indian Institute of Management",
      location: "Ahmedabad, India",
      programs: ["Management"],
      ranking: "Top Business School"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Partner Universities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {universities.map((university, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Building2 className="w-8 h-8 text-blue-500" />
                </div>
                <h2 className="text-xl font-semibold mb-2">{university.name}</h2>
                <p className="text-gray-600 mb-2">{university.location}</p>
                <p className="text-sm text-gray-500">{university.ranking}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerUniversities;
