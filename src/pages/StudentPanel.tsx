import React, { useState, useEffect } from 'react';
import { User, Book, FileText, MessageSquare, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudentPanel = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    program: 'MBBS',
    enrollmentStatus: 'Active',
    applicationStatus: 'Admitted',
    currentSemester: '2nd Semester'
  });

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    const role = localStorage.getItem('userRole');
    if (!isAuth || role !== 'student') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed w-64 h-full bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Student Portal</h2>
          <p className="text-sm text-gray-600 mt-1">Welcome, {studentData.name}</p>
        </div>
        <nav className="mt-6">
          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              activeTab === 'profile'
                ? 'bg-rose-50 text-rose-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <User className="w-5 h-5" />
            Profile
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              activeTab === 'courses'
                ? 'bg-rose-50 text-rose-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Book className="w-5 h-5" />
            Courses
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              activeTab === 'applications'
                ? 'bg-rose-50 text-rose-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FileText className="w-5 h-5" />
            Applications
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              activeTab === 'messages'
                ? 'bg-rose-50 text-rose-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            Messages
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              activeTab === 'settings'
                ? 'bg-rose-50 text-rose-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Settings className="w-5 h-5" />
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-6 py-3 text-red-600 hover:bg-red-50 mt-auto"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {activeTab === 'profile' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Student Profile</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600">Full Name</label>
                      <p className="text-lg">{studentData.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">Email</label>
                      <p className="text-lg">{studentData.email}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Academic Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600">Program</label>
                      <p className="text-lg">{studentData.program}</p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">Current Semester</label>
                      <p className="text-lg">{studentData.currentSemester}</p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">Enrollment Status</label>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {studentData.enrollmentStatus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">My Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Course cards would go here */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-2">Anatomy 101</h3>
                <p className="text-gray-600 mb-4">Basic Human Anatomy</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Progress: 60%</span>
                  <button className="text-rose-600 hover:text-rose-700">
                    View Details
                  </button>
                </div>
              </div>
              {/* More course cards */}
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">My Applications</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold">MBBS Application</h3>
                <p className="text-gray-600">Submitted on: January 15, 2024</p>
                <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {studentData.applicationStatus}
                </span>
              </div>
              <div className="p-6">
                <h4 className="font-medium mb-2">Application Timeline</h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                    <div>
                      <p className="font-medium">Application Submitted</p>
                      <p className="text-sm text-gray-600">January 15, 2024</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                    <div>
                      <p className="font-medium">Documents Verified</p>
                      <p className="text-sm text-gray-600">January 20, 2024</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                    <div>
                      <p className="font-medium">Interview Completed</p>
                      <p className="text-sm text-gray-600">February 1, 2024</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                    <div>
                      <p className="font-medium">Admission Confirmed</p>
                      <p className="text-sm text-gray-600">February 15, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Messages</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold">Admission Office</h3>
                    <p className="text-sm text-gray-500">February 20, 2024</p>
                  </div>
                  <span className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full">
                    New
                  </span>
                </div>
                <p className="text-gray-600">
                  Welcome to the MBBS program! Please complete your registration...
                </p>
                <button className="mt-4 text-rose-600 hover:text-rose-700">
                  Read More
                </button>
              </div>
              {/* More messages */}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Settings</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Notifications
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            defaultChecked
                          />
                          Course updates and announcements
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            defaultChecked
                          />
                          Application status changes
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Security</h3>
                  <button className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPanel;