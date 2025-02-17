import React from 'react';
import { Briefcase, Globe, Award, DollarSign, GraduationCap, Users, Building2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareerOpportunities = () => {
  const careers = [
    {
      title: "Clinical Practice",
      roles: [
        "Hospital Physician",
        "Private Practice Doctor",
        "Specialist Consultant",
        "Emergency Medicine Doctor"
      ],
      icon: <Building2 className="w-12 h-12 text-rose-600" />
    },
    {
      title: "Research & Academia",
      roles: [
        "Medical Researcher",
        "University Professor",
        "Clinical Trial Manager",
        "Medical Writer"
      ],
      icon: <GraduationCap className="w-12 h-12 text-rose-600" />
    },
    {
      title: "Healthcare Management",
      roles: [
        "Hospital Administrator",
        "Healthcare Consultant",
        "Medical Director",
        "Quality Assurance Manager"
      ],
      icon: <Users className="w-12 h-12 text-rose-600" />
    },
    {
      title: "Global Health",
      roles: [
        "WHO Consultant",
        "NGO Medical Officer",
        "Public Health Specialist",
        "International Health Advisor"
      ],
      icon: <Globe className="w-12 h-12 text-rose-600" />
    }
  ];

  const statistics = [
    { number: "95%", label: "Employment Rate" },
    { number: "$150K+", label: "Average Starting Salary" },
    { number: "40+", label: "Countries to Practice" },
    { number: "1000+", label: "Partner Hospitals" }
  ];

  const opportunities = [
    {
      country: "United States",
      requirements: [
        "USMLE Qualification",
        "Clinical Experience",
        "Residency Program",
        "State License"
      ],
      salary: "$200,000 - $300,000",
      demand: "High"
    },
    {
      country: "United Kingdom",
      requirements: [
        "PLAB Examination",
        "GMC Registration",
        "Foundation Training",
        "NHS Experience"
      ],
      salary: "£60,000 - £90,000",
      demand: "High"
    },
    {
      country: "Canada",
      requirements: [
        "MCCQE Examination",
        "Residency Training",
        "Provincial License",
        "Language Proficiency"
      ],
      salary: "CAD 150,000 - 250,000",
      demand: "Very High"
    },
    {
      country: "Australia",
      requirements: [
        "AMC Examination",
        "Internship",
        "Registration",
        "Specialist Training"
      ],
      salary: "AUD 150,000 - 200,000",
      demand: "High"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <Briefcase className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Career Opportunities
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            Explore global career paths and opportunities available to our graduates
            in medicine and healthcare.
          </p>
          <Link
            to="/apply"
            className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors inline-flex items-center gap-2"
          >
            Start Your Career Journey
            <Star className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-rose-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careers.map((career, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="mb-4">{career.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{career.title}</h3>
                <ul className="space-y-2">
                  {career.roles.map((role, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Star className="w-4 h-4 text-rose-600" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Opportunities */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Global Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunities.map((opp, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{opp.country}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">Requirements:</p>
                    <ul className="space-y-2">
                      {opp.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                          <Star className="w-4 h-4 text-rose-600" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Average Salary:</p>
                    <p className="text-rose-600 font-semibold">{opp.salary}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Demand:</p>
                    <p className="text-rose-600 font-semibold">{opp.demand}</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Medical Career?</h2>
          <p className="text-xl mb-8">Get personalized career guidance from our experts</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              Apply Now
            </Link>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors">
              Download Career Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerOpportunities;