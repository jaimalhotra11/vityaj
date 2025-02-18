import React, { useState, useRef } from 'react';
import {
  GraduationCap, Award, DollarSign, Globe, FileText, 
  CalendarClock, Coins, Building2, BookOpen, Microscope,
  Code, Palette, HeartPulse, Scale, Hotel, Camera, Wrench,
  Briefcase
} from 'lucide-react';

const StudyInIndia = () => {
  const [selectedLevel, setSelectedLevel] = useState('diploma');
  const [selectedField, setSelectedField] = useState('engineering');
  const courseExplorerRef = useRef<HTMLElement>(null);

  const scrollToCourses = () => {
    courseExplorerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const educationLevels = {
    certificate: "Certificate Courses (3-6 months)",
    diploma: "Diploma Programs (1-3 years)",
    bachelor: "Bachelor's Degrees (3-5 years)",
    master: "Master's Degrees (2-3 years)",
    doctorate: "Doctoral Programs (3-5 years)"
  };

  const studyFields = {
    engineering: "Engineering & Technology",
    medical: "Medical & Healthcare",
    arts: "Arts & Humanities",
    science: "Science & Research",
    business: "Business & Management",
    law: "Law & Legal Studies",
    it: "Information Technology",
    design: "Design & Architecture",
    hospitality: "Hospitality & Tourism"
  };

  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 text-rose-600" />,
      title: "Diverse Education System",
      description: "From short-term certificates to doctoral programs across multiple disciplines"
    },
    {
      icon: <Award className="w-12 h-12 text-rose-600" />,
      title: "Global Recognition",
      description: "Degrees recognized worldwide with international collaboration opportunities"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-rose-600" />,
      title: "Affordable Education",
      description: "Quality education at competitive rates with scholarship opportunities"
    },
    {
      icon: <Globe className="w-12 h-12 text-rose-600" />,
      title: "Cultural Experience",
      description: "Rich cultural diversity and heritage with modern educational infrastructure"
    }
  ];

  const courseDatabase = {
    certificate: {
      engineering: {
        courses: [
          {
            name: "AutoCAD Design & 3D Modeling",
            description: "Learn professional CAD software for engineering design",
            duration: "6 months",
            fees: "₹50,000",
            eligibility: "10+2 with Mathematics",
            skills: ["AutoCAD", "3D Modeling", "Technical Drawing", "Design Principles"]
          },
          {
            name: "Web Development & Full Stack",
            description: "Comprehensive web development training",
            duration: "6 months",
            fees: "₹60,000",
            eligibility: "10+2 with basic computer knowledge",
            skills: ["HTML/CSS", "JavaScript", "Node.js", "React", "MongoDB"]
          },
          {
            name: "Industrial Safety Management",
            description: "Safety protocols and management in industrial settings",
            duration: "3 months",
            fees: "₹30,000",
            eligibility: "10+2 with Science",
            skills: ["Safety Protocols", "Risk Assessment", "Emergency Response", "OSHA Standards"]
          },
          {
            name: "PCB Design & Electronics",
            description: "Circuit board design and electronic systems",
            duration: "4 months",
            fees: "₹40,000",
            eligibility: "10+2 with Physics",
            skills: ["Circuit Design", "PCB Layout", "Electronic Components", "Testing"]
          },
          {
            name: "Solar Installation & Renewable Energy",
            description: "Solar power systems installation and maintenance",
            duration: "3 months",
            fees: "₹35,000",
            eligibility: "10+2 with Physics",
            skills: ["Solar Panel Installation", "System Design", "Maintenance", "Energy Assessment"]
          }
        ],
        duration: "3-6 months",
        careers: [
          {
            title: "Technical Assistant",
            salary: "₹15,000 - ₹25,000 per month",
            companies: ["Engineering Firms", "Manufacturing Units", "Construction Companies"]
          },
          {
            title: "Junior Designer",
            salary: "₹20,000 - ₹35,000 per month",
            companies: ["Design Studios", "Architecture Firms", "Product Companies"]
          },
          {
            title: "Site Supervisor",
            salary: "₹25,000 - ₹40,000 per month",
            companies: ["Construction Sites", "Industrial Plants", "Infrastructure Projects"]
          },
          {
            title: "Technical Support",
            salary: "₹18,000 - ₹30,000 per month",
            companies: ["IT Companies", "Manufacturing Units", "Service Centers"]
          }
        ]
      },
      medical: {
        courses: [
          {
            name: "Emergency Medical Care",
            description: "Basic emergency medical response and care",
            duration: "6 months",
            fees: "₹45,000",
            eligibility: "10+2 with Biology",
            skills: ["First Aid", "Emergency Response", "Patient Care", "Medical Equipment"]
          },
          {
            name: "Medical Laboratory Technology",
            description: "Basic laboratory techniques and procedures",
            duration: "6 months",
            fees: "₹50,000",
            eligibility: "10+2 with Biology/Chemistry",
            skills: ["Lab Techniques", "Sample Analysis", "Equipment Handling", "Safety Protocols"]
          },
          {
            name: "Healthcare Administration",
            description: "Healthcare facility management basics",
            duration: "4 months",
            fees: "₹35,000",
            eligibility: "10+2 with any stream",
            skills: ["Hospital Management", "Patient Records", "Healthcare Systems", "Administration"]
          },
          {
            name: "Pharmacy Assistant",
            description: "Basic pharmacy operations and medicine management",
            duration: "6 months",
            fees: "₹40,000",
            eligibility: "10+2 with Chemistry",
            skills: ["Medicine Management", "Pharmacy Operations", "Customer Service", "Inventory"]
          },
          {
            name: "Dental Assistant",
            description: "Basic dental procedures and clinic management",
            duration: "6 months",
            fees: "₹45,000",
            eligibility: "10+2 with Biology",
            skills: ["Dental Procedures", "Patient Care", "Sterilization", "Clinic Management"]
          }
        ],
        duration: "4-6 months",
        careers: [
          {
            title: "Medical Assistant",
            salary: "₹15,000 - ₹25,000 per month",
            companies: ["Hospitals", "Clinics", "Healthcare Centers"]
          },
          {
            title: "Lab Technician",
            salary: "₹18,000 - ₹30,000 per month",
            companies: ["Diagnostic Labs", "Hospitals", "Research Centers"]
          },
          {
            title: "Healthcare Support",
            salary: "₹16,000 - ₹28,000 per month",
            companies: ["Hospitals", "Nursing Homes", "Healthcare Facilities"]
          },
          {
            title: "Clinic Assistant",
            salary: "₹15,000 - ₹25,000 per month",
            companies: ["Private Clinics", "Dental Clinics", "Specialty Centers"]
          }
        ]
      },
      it: {
        courses: [
          {
            name: "Python Programming & Data Science",
            description: "Programming fundamentals and data analysis",
            duration: "6 months",
            fees: "₹60,000",
            eligibility: "10+2 with Mathematics",
            skills: ["Python", "Data Analysis", "Machine Learning Basics", "Statistics"]
          },
          {
            name: "Digital Marketing & SEO",
            description: "Online marketing strategies and optimization",
            duration: "3 months",
            fees: "₹35,000",
            eligibility: "10+2 with any stream",
            skills: ["SEO", "Social Media Marketing", "Content Marketing", "Analytics"]
          },
          {
            name: "Data Analytics & Visualization",
            description: "Data analysis and visualization techniques",
            duration: "4 months",
            fees: "₹45,000",
            eligibility: "10+2 with Mathematics",
            skills: ["Data Analysis", "Visualization Tools", "Statistical Methods", "Reporting"]
          },
          {
            name: "Cloud Computing (AWS/Azure)",
            description: "Cloud platform fundamentals and services",
            duration: "6 months",
            fees: "₹55,000",
            eligibility: "10+2 with basic IT knowledge",
            skills: ["AWS", "Azure", "Cloud Services", "DevOps Basics"]
          },
          {
            name: "Cybersecurity Fundamentals",
            description: "Basic security concepts and practices",
            duration: "4 months",
            fees: "₹50,000",
            eligibility: "10+2 with IT background",
            skills: ["Security Basics", "Network Security", "Ethical Hacking", "Security Tools"]
          }
        ],
        duration: "3-6 months",
        careers: [
          {
            title: "Junior Developer",
            salary: "₹25,000 - ₹40,000 per month",
            companies: ["IT Companies", "Software Firms", "Startups"]
          },
          {
            title: "Digital Marketing Executive",
            salary: "₹20,000 - ₹35,000 per month",
            companies: ["Marketing Agencies", "E-commerce", "Corporate"]
          },
          {
            title: "IT Support",
            salary: "₹18,000 - ₹30,000 per month",
            companies: ["IT Services", "Corporate", "Tech Support"]
          },
          {
            title: "Data Analyst",
            salary: "₹25,000 - ₹45,000 per month",
            companies: ["Analytics Firms", "Corporate", "Consulting"]
          }
        ]
      }
    },
    diploma: {
      engineering: {
        courses: [
          {
            name: "Mechanical Engineering",
            description: "Study of mechanical systems and manufacturing",
            duration: "3 years",
            fees: "₹1,50,000 per year",
            eligibility: "10+2 with PCM",
            specializations: ["Manufacturing", "Automobile", "CAD/CAM", "Thermal Engineering"]
          },
          {
            name: "Civil Engineering",
            description: "Infrastructure and construction engineering",
            duration: "3 years",
            fees: "₹1,40,000 per year",
            eligibility: "10+2 with PCM",
            specializations: ["Structural", "Transportation", "Environmental", "Construction Management"]
          },
          {
            name: "Electrical Engineering",
            description: "Study of electrical systems and power",
            duration: "3 years",
            fees: "₹1,45,000 per year",
            eligibility: "10+2 with PCM",
            specializations: ["Power Systems", "Control Systems", "Electronics", "Electrical Machines"]
          },
          {
            name: "Electronics & Communication",
            description: "Electronic systems and communication technology",
            duration: "3 years",
            fees: "₹1,50,000 per year",
            eligibility: "10+2 with PCM",
            specializations: ["Communication Systems", "VLSI", "Embedded Systems", "Signal Processing"]
          },
          {
            name: "Computer Science & Engineering",
            description: "Computer systems and software development",
            duration: "3 years",
            fees: "₹1,60,000 per year",
            eligibility: "10+2 with PCM",
            specializations: ["Software Development", "Networking", "Database Management", "Web Technologies"]
          }
        ],
        duration: "3 years",
        careers: [
          {
            title: "Junior Engineer",
            salary: "₹25,000 - ₹45,000 per month",
            companies: ["Manufacturing", "Construction", "IT Companies"]
          },
          {
            title: "Technical Supervisor",
            salary: "₹30,000 - ₹50,000 per month",
            companies: ["Industrial Plants", "Production Units", "Construction Sites"]
          },
          {
            title: "Design Assistant",
            salary: "₹28,000 - ₹45,000 per month",
            companies: ["Design Firms", "Manufacturing", "R&D Centers"]
          },
          {
            title: "Production Supervisor",
            salary: "₹35,000 - ₹55,000 per month",
            companies: ["Manufacturing Units", "Production Plants", "Assembly Lines"]
          }
        ]
      },
      business: {
        courses: [
          {
            name: "Business Administration",
            description: "Fundamentals of business management",
            duration: "2 years",
            fees: "₹1,20,000 per year",
            eligibility: "10+2 with any stream",
            specializations: ["Marketing", "Finance", "HR", "Operations"]
          },
          {
            name: "Digital Marketing",
            description: "Modern marketing techniques and strategies",
            duration: "2 years",
            fees: "₹1,10,000 per year",
            eligibility: "10+2 with any stream",
            specializations: ["Social Media", "SEO", "Content Marketing", "Analytics"]
          },
          {
            name: "Financial Management",
            description: "Financial planning and management",
            duration: "2 years",
            fees: "₹1,30,000 per year",
            eligibility: "10+2 with Commerce",
            specializations: ["Banking", "Investment", "Accounting", "Risk Management"]
          },
          {
            name: "Human Resources",
            description: "Personnel management and development",
            duration: "2 years",
            fees: "₹1,15,000 per year",
            eligibility: "10+2 with any stream",
            specializations: ["Recruitment", "Training", "Employee Relations", "Compensation"]
          },
          {
            name: "Export Management",
            description: "International trade and export procedures",
            duration: "2 years",
            fees: "₹1,25,000 per year",
            eligibility: "10+2 with Commerce",
            specializations: ["International Trade", "Logistics", "Documentation", "Market Research"]
          }
        ],
        duration: "2 years",
        careers: [
          {
            title: "Business Executive",
            salary: "₹20,000 - ₹35,000 per month",
            companies: ["Corporate", "SMEs", "Startups"]
          },
          {
            title: "Marketing Coordinator",
            salary: "₹25,000 - ₹40,000 per month",
            companies: ["Marketing Agencies", "Corporate", "Media"]
          },
          {
            title: "HR Assistant",
            salary: "₹22,000 - ₹38,000 per month",
            companies: ["Corporate HR", "Recruitment Firms", "Consulting"]
          },
          {
            title: "Finance Executive",
            salary: "₹25,000 - ₹45,000 per month",
            companies: ["Banks", "Financial Services", "Corporate"]
          }
        ]
      }
    },
    bachelor: {
      engineering: {
        courses: [
          {
            name: "Computer Science & Engineering",
            description: "Advanced computer science and software engineering",
            duration: "4 years",
            fees: "₹2,50,000 per year",
            eligibility: "10+2 with PCM",
            specializations: ["AI/ML", "Data Science", "Cloud Computing", "Cybersecurity"]
          },
          {
            name: "Mechanical Engineering",
            description: "Advanced mechanical systems and design",
            duration: "4 years",
            fees: "₹2,30,000 per year",
            eligibility: "10+2 with PCM",
            specializations: ["Robotics", "Automotive", "Industrial Design", "Thermal Systems"]
          },
          {
            name: "Electrical Engineering",
            description: "Advanced electrical systems and power engineering",
            duration: "4 years",
            fees: "₹2,40,000 per year",
            eligibility: "10+2 with PCM",
            specializations: ["Power Systems", "Control Systems", "Renewable Energy", "Smart Grid"]
          },
          {
            name: "Civil Engineering",
            description: "Advanced infrastructure and construction",
            duration: "4 years",
            fees: "₹2,20,000 per year",
            eligibility: "10+2 with PCM",
            specializations: ["Structural", "Transportation", "Environmental", "Urban Planning"]
          },
          {
            name: "Chemical Engineering",
            description: "Chemical processes and industrial chemistry",
            duration: "4 years",
            fees: "₹2,35,000 per year",
            eligibility: "10+2 with PCM",
            specializations: ["Process Engineering", "Petrochemicals", "Biochemical", "Materials"]
          }
        ],
        duration: "4 years",
        careers: [
          {
            title: "Software Engineer",
            salary: "₹40,000 - ₹80,000 per month",
            companies: ["IT Companies", "Tech Giants", "Startups"]
          },
          {
            title: "Design Engineer",
            salary: "₹35,000 - ₹70,000 per month",
            companies: ["Manufacturing", "R&D Centers", "Design Firms"]
          },
          {
            title: "Project Engineer",
            salary: "₹45,000 - ₹85,000 per month",
            companies: ["Construction", "Infrastructure", "Industrial Projects"]
          },
          {
            title: "Research & Development",
            salary: "₹50,000 - ₹90,000 per month",
            companies: ["Research Labs", "Tech Companies", "Innovation Centers"]
          }
        ]
      },
      medical: {
        courses: [
          {
            name: "Bachelor of Medicine (MBBS)",
            description: "Comprehensive medical education",
            duration: "5.5 years",
            fees: "₹5,00,000 per year",
            eligibility: "10+2 with PCB",
            specializations: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"]
          },
          {
            name: "Bachelor of Dental Surgery",
            description: "Dental science and surgery",
            duration: "5 years",
            fees: "₹4,00,000 per year",
            eligibility: "10+2 with PCB",
            specializations: ["Orthodontics", "Periodontics", "Oral Surgery", "Prosthodontics"]
          },
          {
            name: "B.Sc. Nursing",
            description: "Professional nursing education",
            duration: "4 years",
            fees: "₹2,00,000 per year",
            eligibility: "10+2 with PCB",
            specializations: ["General Nursing", "Critical Care", "Pediatric Nursing", "Psychiatric Nursing"]
          },
          {
            name: "B.Pharm (Pharmacy)",
            description: "Pharmaceutical sciences",
            duration: "4 years",
            fees: "₹2,50,000 per year",
            eligibility: "10+2 with PCB",
            specializations: ["Pharmaceutics", "Pharmacology", "Clinical Pharmacy", "Drug Design"]
          },
          {
            name: "Bachelor of Physiotherapy",
            description: "Physical therapy and rehabilitation",
            duration: "4.5 years",
            fees: "₹2,20,000 per year",
            eligibility: "10+2 with PCB",
            specializations: ["Orthopedic", "Neurological", "Sports", "Pediatric"]
          }
        ],
        duration: "4-5.5 years",
        careers: [
          {
            title: "Medical Officer",
            salary: "₹60,000 - ₹1,20,000 per month",
            companies: ["Hospitals", "Clinics", "Healthcare Centers"]
          },
          {
            title: "Dentist",
            salary: "₹50,000 - ₹1,00,000 per month",
            companies: ["Dental Clinics", "Hospitals", "Private Practice"]
          },
          {
            title: "Registered Nurse",
            salary: "₹35,000 - ₹70,000 per month",
            companies: ["Hospitals", "Nursing Homes", "Healthcare Facilities"]
          },
          {
            title: "Pharmacist",
            salary: "₹30,000 - ₹60,000 per month",
            companies: ["Pharmacies", "Hospitals", "Pharmaceutical Companies"]
          }
        ]
      }
    }
  };

  const universities = [
    {
      name: "Indian Institute of Technology (IIT)",
      location: "Multiple Locations",
      ranking: "#1 in Engineering",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      features: [
        "World-class Research Facilities",
        "International Collaborations",
        "Industry Partnerships",
        "Innovation Centers",
        "Entrepreneurship Cell"
      ],
      specializations: [
        "Engineering",
        "Technology",
        "Management",
        "Pure Sciences",
        "Research Programs"
      ]
    },
    {
      name: "Indian Institute of Management (IIM)",
      location: "Multiple Locations",
      ranking: "#1 in Management",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Case Study Based Learning",
        "Industry Integration",
        "Global Exchange Programs",
        "Leadership Development",
        "Research Centers"
      ],
      specializations: [
        "Business Management",
        "Finance",
        "Marketing",
        "Operations",
        "Strategy"
      ]
    },
    {
      name: "National Institute of Design (NID)",
      location: "Ahmedabad",
      ranking: "#1 in Design",
      image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Design Studios",
        "Creative Workshops",
        "Industry Projects",
        "Exhibition Spaces",
        "Digital Labs"
      ],
      specializations: [
        "Industrial Design",
        "Communication Design",
        "Textile Design",
        "UI/UX Design",
        "Animation"
      ]
    }
  ];

  const admissionProcess = [
    {
      icon: <FileText className="w-8 h-8 text-rose-600" />,
      title: "Document Preparation",
      steps: [
        "Academic Transcripts",
        "Entrance Exam Scores",
        "Language Proficiency",
        "Statement of Purpose",
        "Recommendation Letters"
      ]
    },
    {
      icon: <CalendarClock className="w-8 h-8 text-rose-600" />,
      title: "Application Timeline",
      steps: [
        "Research Programs: October-November",
        "Entrance Exams: December-March",
        "Applications: January-April",
        "Admissions: May-July",
        "Academic Year: July-August"
      ]
    },
    {
      icon: <Coins className="w-8 h-8 text-rose-600" />,
      title: "Financial Planning",
      steps: [
        "Tuition Fee Structure",
        "Scholarship Options",
        "Living Expenses",
        "Insurance Requirements",
        "Bank Account Setup"
      ]
    }
  ];

  const getFieldIcon = (field: string) => {
    const icons = {
      engineering: <Wrench className="w-6 h-6" />,
      medical: <HeartPulse className="w-6 h-6" />,
      arts: <Palette className="w-6 h-6" />,
      science: <Microscope className="w-6 h-6" />,
      business: <Building2 className="w-6 h-6" />,
      law: <Scale className="w-6 h-6" />,
      it: <Code className="w-6 h-6" />,
      design: <Camera className="w-6 h-6" />,
      hospitality: <Hotel className="w-6 h-6" />
    };
    return icons[field as keyof typeof icons] || <BookOpen className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-rose-600 to-rose-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Future with Education in India
            </h1>
            <p className="text-xl mb-8">
              Discover world-class education opportunities at affordable costs
            </p>
            <button 
              onClick={scrollToCourses}
              className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Study in India?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Explorer Section */}
      <section ref={courseExplorerRef} className="py-16 bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Education Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              >
                {Object.entries(educationLevels).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Field of Study
              </label>
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              >
                {Object.entries(studyFields).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>
          </div>

          {courseDatabase[selectedLevel as keyof typeof courseDatabase]?.[selectedField as keyof (typeof courseDatabase)[keyof typeof courseDatabase]] && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                {getFieldIcon(selectedField)}
                <h3 className="text-2xl font-semibold">
                  {studyFields[selectedField as keyof typeof studyFields]}
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-rose-600" />
                    Available Courses
                  </h4>
                  <div className="space-y-4">
                    {courseDatabase[selectedLevel as keyof typeof courseDatabase][selectedField as keyof (typeof courseDatabase)[keyof typeof courseDatabase]].courses.map((course, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-rose-50 transition-colors">
                        <h5 className="font-semibold text-gray-900 mb-2">{course.name}</h5>
                        <p className="text-gray-600 text-sm mb-2">{course.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Duration:</span>
                            <span className="ml-2 text-gray-900">{course.duration}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Fees:</span>
                            <span className="ml-2 text-gray-900">{course.fees}</span>
                          </div>
                        </div>
                        {course.skills && (
                          <div className="mt-2">
                            <span className="text-gray-500 text-sm">Skills:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {course.skills.map((skill, idx) => (
                                <span key={idx} className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {course.specializations && (
                          <div className="mt-2">
                            <span className="text-gray-500 text-sm"> Specializations:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {course.specializations.map((spec, idx) => (
                                <span key={idx} className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded">
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-rose-600" />
                    Career Opportunities
                  </h4>
                  <div className="space-y-4">
                    {courseDatabase[selectedLevel as keyof typeof courseDatabase][selectedField as keyof (typeof courseDatabase)[keyof typeof courseDatabase]].careers.map((career, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-rose-50 transition-colors">
                        <h5 className="font-semibold text-gray-900 mb-2">{career.title}</h5>
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          <div>
                            <span className="text-gray-500">Salary Range:</span>
                            <span className="ml-2 text-gray-900">{career.salary}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Top Recruiters:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {career.companies.map((company, idx) => (
                                <span key={idx} className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded">
                                  {company}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-rose-50 rounded-lg">
                <p className="text-rose-700 font-medium">
                  Program Duration: {courseDatabase[selectedLevel as keyof typeof courseDatabase][selectedField as keyof (typeof courseDatabase)[keyof typeof courseDatabase]].duration}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Top Universities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={university.image}
                  alt={university.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{university.name}</h3>
                  <p className="text-gray-600 mb-4">{university.location}</p>
                  <p className="text-rose-600 font-medium mb-4">{university.ranking}</p>
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-1 mb-4">
                    {university.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-rose-600 rounded-full"></div>
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

      {/* Admission Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {admissionProcess.map((process, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4">{process.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
                <ul className="space-y-2">
                  {process.steps.map((step, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-2">
                      <div className="w-1 h-1 bg-rose-600 rounded-full"></div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8">Take the first step towards your future in India</p>
          <button 
            onClick={scrollToCourses}
            className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default StudyInIndia;