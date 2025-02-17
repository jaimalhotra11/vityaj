import React, { useState, useEffect } from 'react';
import { Users, MessageSquare, FileText, Settings, LogOut, Search, Filter, Download, Plus, Edit, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Student {
  id: string;
  name: string;
  email: string;
  program: string;
  status: string;
  appliedDate: Date;
}

interface Message {
  id: string;
  sender: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

interface Application {
  id: string;
  studentName: string;
  program: string;
  status: string;
  submittedDate: Date;
  documents: string[];
}

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [adminEmail, setAdminEmail] = useState('admin@example.com');
  const [notificationPreferences, setNotificationPreferences] = useState({
    applications: true,
    messages: true
  });
  const navigate = useNavigate();

  // Check authentication
  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    const role = localStorage.getItem('userRole');
    if (!isAuth || role !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  const [students] = useState<Student[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      program: 'MBBS',
      status: 'Under Review',
      appliedDate: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      program: 'MD',
      status: 'Admitted',
      appliedDate: new Date('2024-01-20')
    }
  ]);

  const [messages] = useState<Message[]>([
    {
      id: '1',
      sender: 'John Doe',
      message: 'Need information about scholarships',
      timestamp: new Date(),
      read: false
    },
    {
      id: '2',
      sender: 'Jane Smith',
      message: 'Query about visa process',
      timestamp: new Date(),
      read: true
    }
  ]);

  const [applications] = useState<Application[]>([
    {
      id: '1',
      studentName: 'John Doe',
      program: 'MBBS',
      status: 'Under Review',
      submittedDate: new Date('2024-01-15'),
      documents: ['Passport', 'Transcripts', 'Medical Certificate']
    },
    {
      id: '2',
      studentName: 'Jane Smith',
      program: 'MD',
      status: 'Approved',
      submittedDate: new Date('2024-01-20'),
      documents: ['Passport', 'Transcripts', 'Recommendation Letter']
    }
  ]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const handleNotificationChange = (type: 'applications' | 'messages') => {
    setNotificationPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'admitted':
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'under review':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Total Students</h3>
        <p className="text-3xl font-bold text-rose-600">{students.length}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">New Applications</h3>
        <p className="text-3xl font-bold text-rose-600">{applications.length}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Unread Messages</h3>
        <p className="text-3xl font-bold text-rose-600">
          {messages.filter(m => !m.read).length}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed w-64 h-full bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
          <p className="text-sm text-gray-600 mt-1">Welcome back, Admin</p>
        </div>
        <nav className="mt-6">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              activeTab === 'dashboard'
                ? 'bg-rose-50 text-rose-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Users className="w-5 h-5" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              activeTab === 'students'
                ? 'bg-rose-50 text-rose-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Users className="w-5 h-5" />
            Students
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
            {messages.filter(m => !m.read).length > 0 && (
              <span className="ml-auto bg-rose-600 text-white text-xs px-2 py-1 rounded-full">
                {messages.filter(m => !m.read).length}
              </span>
            )}
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
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
            {renderDashboard()}
          </div>
        )}

        {activeTab === 'students' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Students</h2>
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-600"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-600"
                >
                  <option value="all">All Status</option>
                  <option value="admitted">Admitted</option>
                  <option value="under review">Under Review</option>
                  <option value="rejected">Rejected</option>
                </select>
                <button className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700">
                  <Plus className="w-5 h-5" />
                  Add Student
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Program
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applied Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.program}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(student.status)}`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.appliedDate.toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Messages</h2>
              <button className="flex items-center gap-2 text-rose-600 hover:text-rose-700">
                <Download className="w-5 h-5" />
                Export Messages
              </button>
            </div>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`bg-white rounded-lg shadow p-4 ${
                    !message.read ? 'border-l-4 border-rose-600' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{message.sender}</h3>
                      <span className="text-sm text-gray-500">
                        {message.timestamp.toLocaleString()}
                      </span>
                    </div>
                    {!message.read && (
                      <span className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{message.message}</p>
                  <div className="mt-4 flex gap-2">
                    <button className="text-rose-600 hover:text-rose-700">
                      Reply
                    </button>
                    {!message.read && (
                      <button className="text-gray-600 hover:text-gray-700">
                        Mark as Read
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Applications</h2>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700">
                  <Filter className="w-5 h-5" />
                  Filter
                </button>
                <button className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                  <Download className="w-5 h-5" />
                  Export
                </button>
              </div>
            </div>

            <div className="grid gap-6">
              {applications.map((application) => (
                <div key={application.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{application.studentName}</h3>
                      <p className="text-gray-600">{application.program}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(application.status)}`}>
                      {application.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Submitted Date</p>
                      <p>{application.submittedDate.toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Documents</p>
                      <div className="flex flex-wrap gap-2">
                        {application.documents.map((doc, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                          >
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700">
                      Review
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50">
                      Download Documents
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Settings</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">General Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Admin Email
                      </label>
                      <input
                        type="email"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-rose-600"
                        value={adminEmail}
                        onChange={(e) => setAdminEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Notification Preferences
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            checked={notificationPreferences.applications}
                            onChange={() => handleNotificationChange('applications')}
                          />
                          Email notifications for new applications
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            checked={notificationPreferences.messages}
                            onChange={() => handleNotificationChange('messages')}
                          />
                          Email notifications for new messages
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

export default AdminPanel;