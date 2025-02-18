import React from 'react';
import { Stethoscope, GraduationCap, Award, DollarSign, Clock, MapPin, BookOpen, Users, Star, FileText, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const MbbsInEurope = () => {
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
      description: "Quality medical education at competitive costs"
    },
    {
      icon: <Clock className="w-12 h-12 text-rose-600" />,
      title: "Duration",
      description: "6 years including clinical rotations"
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

  const specializations = [
    {
      title: "General Medicine",
      duration: "6 years",
      description: "Comprehensive medical training with clinical rotations"
    },
    {
      title: "Surgery",
      duration: "6 years",
      description: "Specialized surgical training and practical experience"
    },
    {
      title: "Pediatrics",
      duration: "6 years",
      description: "Focus on child healthcare and development"
    },
    {
      title: "Gynecology",
      duration: "6 years",
      description: "Women's health and reproductive medicine"
    }
  ];

  const admissionProcess = [
    {
      step: 1,
      title: "Document Submission",
      description: "Submit academic transcripts, passport, and other required documents",
      requirements: [
        "High School Certificate",
        "Biology and Chemistry Proficiency",
        "Passport Copy",
        "Birth Certificate",
        "Medical Certificate"
      ]
    },
    {
      step: 2,
      title: "Eligibility Verification",
      description: "Academic qualifications and eligibility criteria verification",
      requirements: [
        "Minimum 60% in Science Subjects",
        "English Proficiency",
        "Age 17-25 years",
        "Medical Fitness"
      ]
    },
    {
      step: 3,
      title: "University Selection",
      description: "Choose from our partner universities based on preferences",
      requirements: [
        "University Application Form",
        "Statement of Purpose",
        "Recommendation Letters",
        "Interview (if required)"
      ]
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description: "Secure your seat with admission letter and fee payment",
      requirements: [
        "Admission Letter",
        "Fee Payment",
        "Visa Processing",
        "Travel Arrangements",
        "Accommodation Booking"
      ]
    }
  ];

  const feeStructure = {
    tuitionFees: [
      { year: "First Year", amount: "€8,000", includes: ["Basic Sciences", "Laboratory Access", "Library"] },
      { year: "Second Year", amount: "€7,500", includes: ["Advanced Sciences", "Clinical Rotations", "Research"] },
      { year: "Third Year", amount: "€7,500", includes: ["Clinical Training", "Hospital Visits", "Specializations"] },
      { year: "Fourth Year", amount: "€7,000", includes: ["Clinical Practice", "Internship", "Final Year Project"] }
    ],
    additionalFees: [
      { type: "Admission Fee", amount: "€500", frequency: "One-time" },
      { type: "Registration Fee", amount: "€300", frequency: "Annual" },
      { type: "Laboratory Fee", amount: "€400", frequency: "Annual" },
      { type: "Library Fee", amount: "€200", frequency: "Annual" }
    ],
    accommodationFees: [
      { type: "University Hostel", amount: "€1,500", frequency: "Annual" },
      { type: "Private Apartment", amount: "€3,000", frequency: "Annual" }
    ]
  };

  const scholarships = [
    {
      title: "Merit Scholarship",
      amount: "Up to 50% tuition waiver",
      eligibility: [
        "90% or above in academics",
        "Excellent entrance exam score",
        "Strong extracurricular record"
      ],
      deadline: "August 30, 2024"
    },
    {
      title: "International Student Grant",
      amount: "30% tuition waiver",
      eligibility: [
        "International student status",
        "Strong academic background",
        "Financial need"
      ],
      deadline: "July 15, 2024"
    },
    {
      title: "Early Bird Scholarship",
      amount: "25% tuition waiver",
      eligibility: [
        "Early application",
        "Complete documentation",
        "Immediate fee payment"
      ],
      deadline: "April 30, 2024"
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
              Download MBBS Guide
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

      {/* Specializations */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Medical Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{spec.title}</h3>
                <p className="text-rose-600 mb-2">{spec.duration}</p>
                <p className="text-gray-600 dark:text-gray-300">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Top Medical Universities</h2>
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

      {/* Admission Process - Enhanced */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900" id="admission">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Admission Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {admissionProcess.map((step) => (
                <div key={step.step} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Requirements:</h4>
                        <ul className="space-y-2">
                          {step.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                              <FileText className="w-4 h-4 text-rose-600" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-white dark:bg-gray-800" id="fees">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Fee Structure</h2>
          
          {/* Tuition Fees */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Tuition Fees</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {feeStructure.tuitionFees.map((year, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">{year.year}</h4>
                  <p className="text-2xl font-bold text-rose-600 mb-4">{year.amount}</p>
                  <ul className="space-y-2">
                    {year.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Star className="w-4 h-4 text-rose-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Fees */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Additional Fees</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {feeStructure.additionalFees.map((fee, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">{fee.type}</h4>
                  <p className="text-2xl font-bold text-rose-600 mb-2">{fee.amount}</p>
                  <p className="text-gray-600 dark:text-gray-300">{fee.frequency}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Accommodation Fees */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Accommodation Fees</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {feeStructure.accommodationFees.map((fee, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">{fee.type}</h4>
                  <p className="text-2xl font-bold text-rose-600 mb-2">{fee.amount}</p>
                  <p className="text-gray-600 dark:text-gray-300">{fee.frequency}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900" id="scholarships">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Scholarships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{scholarship.title}</h3>
                <p className="text-2xl font-bold text-rose-600 mb-4">{scholarship.amount}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Eligibility:</h4>
                  <ul className="space-y-2">
                    {scholarship.eligibility.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Star className="w-4 h-4 text-rose-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span>Deadline: {scholarship.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your European Medical Journey</h2>
          <p className="text-xl mb-8">Get expert guidance for MBBS admission in top European universities</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              Apply Now
            </Link>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MbbsInEurope;
