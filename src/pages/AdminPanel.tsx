import React, { useState, useEffect } from 'react';
import { 
  Users, MessageSquare, Calendar, Settings, 
  LogOut, Search, Download, Plus, Mail, 
  FileText, ChevronRight, Bell
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

// Types
interface Student {
  id: string;
  name: string;
  email: string;
  country: string;
  interestedCourse: string;
  status: 'New' | 'In Progress' | 'Documents Pending' | 'Ready for Application' | 'Applied';
  lastUpdate: Date;
  notes: string;
}

interface Appointment {
  id: string;
  studentName: string;
  date: Date;
  type: 'Initial Consultation' | 'Document Review' | 'Application Help' | 'Visa Guidance';
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}

interface Task {
  id: string;
  studentName: string;
  task: string;
  deadline: Date;
  completed: boolean;
}

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const navigate = useNavigate();

  // Mock data
  const [students] = useState<Student[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      country: 'India',
      interestedCourse: 'Computer Science',
      status: 'New',
      lastUpdate: new Date(),
      notes: 'Interested in fall 2024 intake'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      country: 'Nigeria',
      interestedCourse: 'Business Administration',
      status: 'Documents Pending',
      lastUpdate: new Date(),
      notes: 'Waiting for transcript translation'
    }
  ]);

  const [appointments] = useState<Appointment[]>([
    {
      id: '1',
      studentName: 'John Doe',
      date: new Date(),
      type: 'Initial Consultation',
      status: 'Scheduled'
    },
    {
      id: '2',
      studentName: 'Jane Smith',
      date: new Date(Date.now() + 86400000),
      type: 'Document Review',
      status: 'Scheduled'
    }
  ]);

  const [tasks] = useState<Task[]>([
    {
      id: '1',
      studentName: 'John Doe',
      task: 'Review and verify academic documents',
      deadline: new Date(Date.now() + 172800000),
      completed: false
    },
    {
      id: '2',
      studentName: 'Jane Smith',
      task: 'Submit university application',
      deadline: new Date(Date.now() + 259200000),
      completed: false
    }
  ]);

  // Authentication check
  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (!isAuth) {
      navigate('/login');
    }
  }, [navigate]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Documents Pending':
        return 'bg-orange-100 text-orange-800';
      case 'Ready for Application':
        return 'bg-green-100 text-green-800';
      case 'Applied':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAppointmentStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Student Consultancy</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-rose-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  3
                </span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-5 h-5 mr-2" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  activeTab === 'dashboard'
                    ? 'bg-rose-50 text-rose-700'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Users className="w-5 h-5 mr-3" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('students')}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  activeTab === 'students'
                    ? 'bg-rose-50 text-rose-700'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <FileText className="w-5 h-5 mr-3" />
                Students
              </button>
              <button
                onClick={() => setActiveTab('appointments')}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  activeTab === 'appointments'
                    ? 'bg-rose-50 text-rose-700'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Calendar className="w-5 h-5 mr-3" />
                Appointments
              </button>
              <button
                onClick={() => setActiveTab('tasks')}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  activeTab === 'tasks'
                    ? 'bg-rose-50 text-rose-700'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                Tasks
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  activeTab === 'settings'
                    ? 'bg-rose-50 text-rose-700'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <div className="p-3 bg-rose-50 rounded-lg">
                        <Users className="w-6 h-6 text-rose-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-500">Total Students</p>
                        <h3 className="text-2xl font-bold text-gray-900">{students.length}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-500">Today's Appointments</p>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {appointments.filter(a => 
                            format(a.date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
                          ).length}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <MessageSquare className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-500">Pending Tasks</p>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {tasks.filter(t => !t.completed).length}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Appointments</h3>
                    <div className="space-y-4">
                      {appointments
                        .filter(a => format(a.date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd'))
                        .map((appointment) => (
                          <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium text-gray-900">{appointment.studentName}</p>
                              <p className="text-sm text-gray-500">{appointment.type}</p>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm text-gray-500 mr-4">
                                {format(appointment.date, 'h:mm a')}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAppointmentStatusColor(appointment.status)}`}>
                                {appointment.status}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Tasks</h3>
                    <div className="space-y-4">
                      {tasks
                        .filter(t => !t.completed)
                        .map((task) => (
                          <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium text-gray-900">{task.task}</p>
                              <p className="text-sm text-gray-500">{task.studentName}</p>
                            </div>
                            <div>
                              <span className="text-sm text-gray-500">
                                Due {format(task.deadline, 'MMM d')}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'students' && (
              <div>
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <div className="flex-1 min-w-0 max-w-lg">
                      <div className="relative rounded-lg shadow-sm">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Search students..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="block w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500"
                      >
                        <option value="all">All Status</option>
                        <option value="New">New</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Documents Pending">Documents Pending</option>
                        <option value="Ready for Application">Ready for Application</option>
                        <option value="Applied">Applied</option>
                      </select>
                      <button className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700">
                        <Plus className="w-5 h-5" />
                        Add Student
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Student
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Country
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Interested Course
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Last Update
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {students
                          .filter(student => 
                            (filterStatus === 'all' || student.status === filterStatus) &&
                            (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             student.email.toLowerCase().includes(searchTerm.toLowerCase()))
                          )
                          .map((student) => (
                            <tr key={student.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                      <span className="text-gray-500 font-medium">
                                        {student.name.charAt(0)}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                      {student.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {student.email}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{student.country}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{student.interestedCourse}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(student.status)}`}>
                                  {student.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {format(student.lastUpdate, 'MMM d, yyyy')}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-rose-600 hover:text-rose-900">
                                  View Details
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'appointments' && (
              <div>
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
                  <button className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700">
                    <Plus className="w-5 h-5" />
                    New Appointment
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="space-y-6">
                    {appointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <Calendar className="w-6 h-6 text-gray-400" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{appointment.studentName}</p>
                            <p className="text-sm text-gray-500">{appointment.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">
                              {format(appointment.date, 'MMM d, yyyy')}
                            </p>
                            <p className="text-sm text-gray-500">
                              {format(appointment.date, 'h:mm a')}
                            </p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAppointmentStatusColor(appointment.status)}`}>
                            {appointment.status}
                          </span>
                          <button className="text-gray-400 hover:text-gray-500">
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tasks' && (
              <div>
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Tasks</h2>
                  <button className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700">
                    <Plus className="w-5 h-5" />
                    Add Task
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <input
                            type="checkbox"
                            checked={task.completed}
                            className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{task.task}</p>
                            <p className="text-sm text-gray-500">For {task.studentName}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-500">
                            Due {format(task.deadline, 'MMM d')}
                          </span>
                          <button className="text-gray-400 hover:text-gray-500">
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Templates</h3>
                    <div className="space-y-4">
                      <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                        <Mail className="w-5 h-5" />
                        <span>Welcome Email Template</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                        <Mail className="w-5 h-5" />
                        <span>Document Request Template</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                        <Mail className="w-5 h-5" />
                        <span>Appointment Confirmation Template</span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h3>
                    <div className="space-y-4">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">Email notifications for new inquiries</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">Appointment reminders</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">Task due date reminders</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;