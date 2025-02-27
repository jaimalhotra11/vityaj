import React from 'react';
import { FileCheck, Plane, Building2, GraduationCap, Globe, Users, BookOpen, Shield, Hotel, MapPin, Clock, Award } from 'lucide-react';

function App() {
  const services = [
    {
      icon: <FileCheck className="w-12 h-12 text-rose-600" />,
      title: "Admission Assistance",
      description: "Simplified & Hassle-Free admission support from university selection to documentation & interviews"
    },
    {
      icon: <Plane className="w-12 h-12 text-rose-600" />,
      title: "Visa & Immigration Support",
      description: "Fast, reliable & stress-free visa processing with official invitation letters and parent visas"
    },
    {
      icon: <Hotel className="w-12 h-12 text-rose-600" />,
      title: "Travel & Accommodation",
      description: "Airport pickup, temporary hotel stay, and complete travel assistance for a comfortable arrival"
    },
    {
      icon: <Building2 className="w-12 h-12 text-rose-600" />,
      title: "Enrollment & Campus Support",
      description: "Complete university registration, hostel allocation, and 24/7 local student support"
    },
    {
      icon: <Users className="w-12 h-12 text-rose-600" />,
      title: "Student Life & Academic Success",
      description: "Cultural events, social gatherings, and special coaching for exams like FMGE (NEXT)"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-rose-600" />,
      title: "Career Guidance",
      description: "Professional development, career planning, and post-graduation assistance"
    }
  ];

  const admissionServices = [
    {
      icon: <BookOpen className="w-8 h-8 text-rose-600" />,
      title: "Eligibility Certificate Verification",
      description: "Ensuring students meet all admission criteria for their chosen programs"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-rose-600" />,
      title: "Legalization, Apostille & Embassy Recognition",
      description: "Hassle-free document processing for international recognition"
    },
    {
      icon: <Users className="w-8 h-8 text-rose-600" />,
      title: "University Admission Interviews",
      description: "Expert guidance to help students clear selection rounds successfully"
    },
    {
      icon: <Award className="w-8 h-8 text-rose-600" />,
      title: "University Offer & Provisional Admission",
      description: "Fast-track confirmations to secure your place at top universities"
    },
    {
      icon: <Globe className="w-8 h-8 text-rose-600" />,
      title: "Pre-Admission & Pre-Departure Counseling",
      description: "Personalized guidance on academics & lifestyle in India"
    }
  ];

  const visaServices = [
    {
      icon: <FileCheck className="w-8 h-8 text-rose-600" />,
      title: "Official Invitation for Student Visa",
      description: "Direct from Indian authorities for faster processing"
    },
    {
      icon: <Plane className="w-8 h-8 text-rose-600" />,
      title: "Complete Visa Application & Processing",
      description: "Assistance from start to approval with expert guidance"
    },
    {
      icon: <Shield className="w-8 h-8 text-rose-600" />,
      title: "Travel & Medical Insurance",
      description: "Comprehensive coverage worth €30,000 for safety & health"
    },
    {
      icon: <Users className="w-8 h-8 text-rose-600" />,
      title: "Visa Assistance for Parents",
      description: "Helping families visit their children with ease"
    }
  ];

  const travelServices = [
    {
      icon: <Users className="w-8 h-8 text-rose-600" />,
      title: "Travel Escort for Student Batches",
      description: "Safe travel with expert guidance throughout the journey"
    },
    {
      icon: <Plane className="w-8 h-8 text-rose-600" />,
      title: "Airport & Immigration Assistance",
      description: "Seamless arrival process in India with dedicated support"
    },
    {
      icon: <Hotel className="w-8 h-8 text-rose-600" />,
      title: "Airport Pickup & Temporary Hotel Stay",
      description: "Comfortable accommodation until hostel allocation"
    },
    {
      icon: <MapPin className="w-8 h-8 text-rose-600" />,
      title: "City Tour & Shopping Assistance",
      description: "Helping students explore and settle in their new environment"
    }
  ];

  const campusServices = [
    {
      icon: <Building2 className="w-8 h-8 text-rose-600" />,
      title: "Complete University Registration Support",
      description: "Hassle-free enrollment process for a smooth start"
    },
    {
      icon: <Hotel className="w-8 h-8 text-rose-600" />,
      title: "Hostel Allotment & Accommodation",
      description: "Comfortable student housing arrangements"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-rose-600" />,
      title: "Library Card, Bank Account & Sports Access",
      description: "Everything a student needs for campus life"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-rose-600" />,
      title: "Application for Residence Permit",
      description: "Long-term stay made easy with expert assistance"
    },
    {
      icon: <Clock className="w-8 h-8 text-rose-600" />,
      title: "24/7 Local Student Support",
      description: "Assistance anytime, anywhere throughout your stay"
    },
    {
      icon: <Award className="w-8 h-8 text-rose-600" />,
      title: "Academic Performance Reports",
      description: "Regular updates for parents about their child's progress"
    }
  ];

  const studentLifeServices = [
    {
      icon: <Users className="w-8 h-8 text-rose-600" />,
      title: "Festivals, Social Gatherings & Picnics",
      description: "A vibrant student community with cultural activities"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-rose-600" />,
      title: "Special Coaching for FMGE (NEXT) Exam",
      description: "Expert faculty for career success and professional growth"
    },
    {
      icon: <Globe className="w-8 h-8 text-rose-600" />,
      title: "Cultural & Career Guidance",
      description: "Helping students adjust & excel in their new environment"
    }
  ];

  const whyIndia = [
    {
      icon: <Award className="w-12 h-12 text-rose-600" />,
      title: "Globally Recognized Degrees",
      description: "Engineering, Medicine, Management & More from prestigious institutions"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-rose-600" />,
      title: "World-Class Education at Affordable Costs",
      description: "High-quality & budget-friendly education options"
    },
    {
      icon: <Shield className="w-12 h-12 text-rose-600" />,
      title: "Safe & Friendly Society",
      description: "A diverse, multicultural environment for international students"
    },
    {
      icon: <Globe className="w-12 h-12 text-rose-600" />,
      title: "Thriving Career Opportunities",
      description: "Global exposure & job placements for successful graduates"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vityaz Global: Your Trusted Partner for Studying in India
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mb-8">
            Committed to helping international students fulfill their dream of studying in India's top universities. With a seamless admission process, expert guidance, and 24/7 support, students can focus on their education while we handle everything else.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-rose-600 text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">🌟 Why Choose Vityaz Global?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-rose-500">
              <p className="font-semibold mb-2">✅ End-to-End Admission Support</p>
              <p className="text-gray-600">From university selection to documentation & interviews.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-rose-500">
              <p className="font-semibold mb-2">✅ Hassle-Free Visa Processing</p>
              <p className="text-gray-600">Official invitation letters, fast approvals, and parent visas.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-rose-500">
              <p className="font-semibold mb-2">✅ Comprehensive Travel Assistance</p>
              <p className="text-gray-600">Escorts, airport pickup, hotel stay, and city tours.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-rose-500">
              <p className="font-semibold mb-2">✅ Complete Campus Support</p>
              <p className="text-gray-600">Hostel allocation, banking, sports, and residence permits.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-rose-500">
              <p className="font-semibold mb-2">✅ 24/7 Student Care</p>
              <p className="text-gray-600">Ongoing support throughout your education.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-rose-500">
              <p className="font-semibold mb-2">✅ Exciting Student Life</p>
              <p className="text-gray-600">Cultural events, social gatherings, and academic excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Exclusive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">1️⃣ Admission Assistance – Simplified & Hassle-Free!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {admissionServices.map((service, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-16">2️⃣ Visa & Immigration Support – Fast, Reliable & Stress-Free!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {visaServices.map((service, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-16">3️⃣ Travel & Accommodation – Arrive Comfortably & Settle Smoothly!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {travelServices.map((service, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-16">4️⃣ Enrollment & Campus Support – Your Home Away from Home!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {campusServices.map((service, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-16">5️⃣ Student Life & Academic Success – Learn, Enjoy & Achieve!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentLifeServices.map((service, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why India Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">🎯 Why India?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyIndia.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl mt-12">
            🌍 With Vityaz Global, your journey to India is not just about education – it's about a life-changing experience! 🌟
          </p>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">24/7 Student Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Support Network</h3>
              <p className="text-gray-600">
                Access to support teams across multiple countries for round-the-clock assistance
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Counselors</h3>
              <p className="text-gray-600">
                Personal education counselor throughout your journey from application to graduation
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Office Support</h3>
              <p className="text-gray-600">
                On-ground support in your study destination for immediate assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey to India?</h2>
          <p className="text-xl mb-8">Contact us today and begin your dream education in India!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
              Book Free Consultation
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors">
              Download Information Pack
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default App;