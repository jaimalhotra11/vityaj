import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, GraduationCap, Users, Globe, Building, BookOpen } from 'lucide-react';
import { universities } from './UniversityList';

interface Course {
  name: string;
  subcourses: string[];
}

interface University {
  name: string;
  location: string;
  courses: string[];
  ranking: string;
  students: string;
  image: string;
  description?: string;
}

const courseDomains: Record<string, string[]> = {
  Engineering: ['Computer Science', 'Mechanical', 'Civil', 'Electrical', 'Electronics'],
  Medical: ['MBBS', 'BDS', 'Nursing', 'Pharmacy', 'Physiotherapy'],
  Management: ['MBA', 'BBA', 'Finance', 'Marketing', 'HR'],
  Law: ['LLB', 'LLM', 'Corporate Law', 'Criminal Law'],
  Journalism: ['Mass Communication', 'Digital Media', 'Broadcasting'],
  Science: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
  Arts: ['Fine Arts', 'Liberal Arts', 'Design', 'Music'],
  Commerce: ['B.Com', 'M.Com', 'Accounting', 'Economics']
};

const UniversityPage: React.FC = () => {
  const { universityName } = useParams<{ universityName: string }>();
  const [university, setUniversity] = useState<University | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedDomain, setExpandedDomain] = useState<string | null>(null);

 

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error || !university) {
    return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  }

  const getAvailableDomains = () => {
    return Object.keys(courseDomains).filter(domain =>
      university.courses.some(course => 
        courseDomains[domain].includes(course) || domain.toLowerCase() === course.toLowerCase()
      )
    );
  };

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

      {/* International Students Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">International Student Life</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join our diverse community of international students from over 50 countries. Experience
                a rich cultural environment while pursuing your academic goals.
              </p>
              <div className="flex items-center gap-6 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600">{university.students}</div>
                  <div className="text-sm text-gray-600">Total Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600">50+</div>
                  <div className="text-sm text-gray-600">Nationalities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600">95%</div>
                  <div className="text-sm text-gray-600">Placement Rate</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="International students"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Campus life"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* University Overview */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">About {university.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {university.description || `${university.name} is a prestigious institution known for its academic excellence and innovative approach to education. With state-of-the-art facilities and experienced faculty, we provide students with an enriching learning environment.`}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <Building className="w-6 h-6 text-rose-600" />
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Established</p>
                      <p className="font-medium">1990</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <Users className="w-6 h-6 text-rose-600" />
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Students</p>
                      <p className="font-medium">{university.students}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Programs Offered */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Programs Offered</h2>
                <div className="space-y-4">
                  {getAvailableDomains().map((domain) => (
                    <div key={domain} className="border rounded-lg overflow-hidden">
                      <button
                        className="w-full p-4 flex items-center justify-between bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setExpandedDomain(expandedDomain === domain ? null : domain)}
                      >
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-5 h-5 text-rose-600" />
                          <span className="font-medium">{domain}</span>
                        </div>
                      </button>
                      {expandedDomain === domain && (
                        <div className="p-4 space-y-2">
                          {courseDomains[domain].map((subcourse) => (
                            <div key={subcourse} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                              <GraduationCap className="w-4 h-4" />
                              <span>{subcourse}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">Location & Contact</h2>
                <div className="space-y-4">
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
                        Visit Official Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition-colors">
                    Apply Now
                  </button>
                  <button className="w-full bg-white border border-rose-600 text-rose-600 py-3 rounded-lg hover:bg-rose-50 transition-colors">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniversityPage;