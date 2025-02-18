import React, { useState } from 'react';
import { Search, GraduationCap, BookOpen, MapPin, DollarSign, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Finder = () => {
  const [activeTab, setActiveTab] = useState('university');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');

  const countries = [
    { value: 'india', label: 'India' },
    { value: 'czech', label: 'Czech Republic' },
    { value: 'hungary', label: 'Hungary' },
    { value: 'poland', label: 'Poland' }
  ];

  const programs = [
    { value: 'mbbs', label: 'MBBS' },
    { value: 'md', label: 'MD' },
    { value: 'ms', label: 'MS' },
    { value: 'bds', label: 'BDS' }
  ];

  const budgets = [
    { value: 'under5k', label: 'Under $5,000/year' },
    { value: '5k-10k', label: '$5,000 - $10,000/year' },
    { value: '10k-15k', label: '$10,000 - $15,000/year' },
    { value: 'above15k', label: 'Above $15,000/year' }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 finder-container">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Match</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover the ideal university and program tailored to your needs
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('university')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'university'
                    ? 'bg-rose-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Find University
              </button>
              <button
                onClick={() => setActiveTab('course')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'course'
                    ? 'bg-rose-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Find Course
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab === 'university' ? 'universities' : 'courses'}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent appearance-none"
                >
                  <option value="all">All Countries</option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent appearance-none"
                >
                  <option value="all">All Programs</option>
                  {programs.map((program) => (
                    <option key={program.value} value={program.value}>
                      {program.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent appearance-none"
                >
                  <option value="all">All Budgets</option>
                  {budgets.map((budget) => (
                    <option key={budget.value} value={budget.value}>
                      {budget.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                to={activeTab === 'university' ? '/universities' : '/programs'}
                className="inline-flex items-center gap-2 bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors"
              >
                <Filter className="w-5 h-5" />
                Show Results
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
              <GraduationCap className="w-8 h-8 text-rose-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Universities</div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
              <BookOpen className="w-8 h-8 text-rose-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Programs</div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
              <MapPin className="w-8 h-8 text-rose-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Countries</div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
              <DollarSign className="w-8 h-8 text-rose-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">70%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Cost Savings</div>
            </div>
          </div>

          {/* Need Help CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Need help finding the right university or program?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium"
            >
              Talk to our experts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finder;
