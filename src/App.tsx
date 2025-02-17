import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import AnnouncementBar from './components/AnnouncementBar';
import { scrollToTop } from './utils/scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudyDestinations from './components/StudyDestinations';
import Finder from './components/Finder';
import AdmissionFeatures from './components/AdmissionFeatures';
import Universities from './components/Universities';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Chatbot from './components/Chatbot';
import Accreditations from './components/Accreditations';
import WhyStudyIndia from './pages/WhyStudyIndia';
import MbbsIndia from './pages/MbbsIndia';
import MbbsEurope from './pages/MbbsEurope';
import UniversityList from './pages/UniversityList';
import UniversityRankings from './pages/UniversityRankings';
import VirtualTours from './pages/VirtualTours';
import CampusLife from './pages/CampusLife';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Apply from './pages/Apply';
import Scholarships from './pages/Scholarships';
import GlobalRecognition from './pages/GlobalRecognition';
import CostComparison from './pages/CostComparison';
import CareerOpportunities from './pages/CareerOpportunities';
import AdmissionSupport from './pages/AdmissionSupport';
import VisaAssistance from './pages/VisaAssistance';
import Accommodation from './pages/Accommodation';
import CareerGuidance from './pages/CareerGuidance';
import Programs from './pages/Programs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminPanel from './pages/AdminPanel';
import StudentPanel from './pages/StudentPanel';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Downloads from './pages/Downloads';
import FAQ from './pages/FAQ';
import StudentStories from './pages/StudentStories';
import MedicalCourses from './pages/MedicalCourses';
import EngineeringCourses from './pages/EngineeringCourses';
import ManagementCourses from './pages/ManagementCourses';
import ArtsCourses from './pages/ArtsCourses';
import ScienceCourses from './pages/ScienceCourses';
import './i18n/config';

// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
          <AnnouncementBar messages={[
            { text: "🎉 New Scholarship Opportunities Available!", link: "/scholarships" },
            { text: "🌟 Explore Our Virtual Campus Tours", link: "/universities/virtual-tours" },
            { text: "📅 Upcoming Admission Deadlines - Apply Now!" }
          ]} />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <StudyDestinations />
                <Finder />
                <AdmissionFeatures />
                <Universities />
                <Accreditations />
                <Testimonials />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/why-study-india" element={<WhyStudyIndia />} />
            <Route path="/why-study-india/recognition" element={<GlobalRecognition />} />
            <Route path="/why-study-india/cost" element={<CostComparison />} />
            <Route path="/why-study-india/careers" element={<CareerOpportunities />} />
            <Route path="/mbbs-india" element={<MbbsIndia />} />
            <Route path="/mbbs-europe" element={<MbbsEurope />} />
            <Route path="/universities" element={<UniversityList />} />
            <Route path="/universities/rankings" element={<UniversityRankings />} />
            <Route path="/universities/virtual-tours" element={<VirtualTours />} />
            <Route path="/universities/campus-life" element={<CampusLife />} />
            <Route path="/services" element={<Services />} />
            <Route path="/visa-assistance" element={<VisaAssistance />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/career-guidance" element={<CareerGuidance />} />
            <Route path="/admission-support" element={<AdmissionSupport />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/student-stories" element={<StudentStories />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/student" element={<StudentPanel />} />
            <Route path="/courses/medical" element={<MedicalCourses />} />
            <Route path="/courses/engineering" element={<EngineeringCourses />} />
            <Route path="/courses/management" element={<ManagementCourses />} />
            <Route path="/courses/arts" element={<ArtsCourses />} />
            <Route path="/courses/science" element={<ScienceCourses />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
          <Chatbot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
