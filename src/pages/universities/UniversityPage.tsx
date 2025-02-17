import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, GraduationCap, Users, DollarSign, Clock, Calendar, Globe } from 'lucide-react';
import { universities } from '../UniversityList';

interface University {
  name: string;
  location: string;
  courses: string[];
  ranking: string;
  students: string;
  fees: string;
  image: string;
  description?: string;
}

const UniversityPage: React.FC = () => {
  const { universityName } = useParams<{ universityName: string }>();
  const [university, setUniversity] = useState<University | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const formattedName = universityName?.replace(/-/g, ' ');
    const foundUniversity = universities.find(
      u => u.name.toLowerCase() === formattedName?.toLowerCase()
    );

    if (foundUniversity) {
      setUniversity(foundUniversity);
    } else {
      setError('University not found');
    }
    setLoading(false);
  }, [universityName]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error || !university) {
    return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {university.name}
          </h1>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <MapPin className="w-5 h-5" />
            <span>{university.location}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Overview */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">University Overview</h2>
              {university.description && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {university.description}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-rose-600" />
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Programs</p>
                    <p className="font-medium">{university.courses.join(', ')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Users className="w-6 h-6 text-rose-600" />
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Students</p>
                    <p className="font-medium">{university.students}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <DollarSign className="w-6 h-6 text-rose-600" />
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Fees</p>
                    <p className="font-medium">{university.fees}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Clock className="w-6 h-6 text-rose-600" />
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Duration</p>
                    <p className="font-medium">4-5 years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Programs Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Programs Offered</h2>
              <div className="space-y-4">
                {university.courses.map((course, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-semibold mb-2">{course}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Detailed information about the {course} program
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Facts */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Quick Facts</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-rose-600" />
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Established</p>
                    <p className="font-medium">1990</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-rose-600" />
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Website</p>
                    <a href="#" className="text-rose-600 hover:underline">
                      Visit Website
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-rose-600" />
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Ranking</p>
                    <p className="font-medium">{university.ranking}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-rose-600" />
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Address</p>
                    <p className="font-medium">{university.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-rose-600" />
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Website</p>
                    <a href="#" className="text-rose-600 hover:underline">
                      {university.name} Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityPage;
