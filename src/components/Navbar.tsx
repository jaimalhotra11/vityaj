import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, UserCircle } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  showAnnouncement: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showAnnouncement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userRole = localStorage.getItem('userRole');

  const navItems = [
    {
      name: 'Why Study in India?',
      path: '/why-study-india',
      dropdown: [
        { name: 'Global Recognition', path: '/why-study-india/recognition' },
        { name: 'Cost Comparison', path: '/why-study-india/cost' },
        { name: 'Career Opportunities', path: '/why-study-india/careers' }
      ]
    },
    {
      name: 'Study in India',
      path: '/mbbs-india',
      dropdown: []
    },
    {
      name: 'MBBS in Europe',
      path: '/mbbs-europe',
      dropdown: []
    },
    {
      name: 'Universities',
      path: '/universities',
      dropdown: [
        { name: 'Partner Universities', path: '/universities' },
        { name: 'Rankings', path: '/universities/rankings' },
        { name: 'Virtual Tours', path: '/universities/virtual-tours' },
        { name: 'Campus Life', path: '/universities/campus-life' }
      ]
    },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Visa Assistance', path: '/visa-assistance' },
        { name: 'Accommodation', path: '/accommodation' },
        { name: 'Career Guidance', path: '/career-guidance' },
        { name: 'Admission Support', path: '/admission-support' }
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      dropdown: [
        { name: 'Downloads', path: '/downloads' },
        { name: 'FAQs', path: '/faq' },
        { name: 'Student Stories', path: '/student-stories' }
      ]
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    window.location.reload();
  };

  return (
    <nav className={`bg-white dark:bg-gray-900 shadow-lg w-full z-40 transition-all ${showAnnouncement ? 'top-8' : 'top-0'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-rose-600">
            Vityaz Global
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors py-2"
                >
                  <span>{item.name}</span>
                  {item.dropdown.length > 0 && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {item.dropdown.length > 0 && (
                  <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-rose-50 dark:hover:bg-gray-700 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center space-x-4">
              <ThemeToggle />

              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-rose-600">
                    <UserCircle className="w-5 h-5" />
                    <span>Account</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {userRole === 'admin' ? (
                      <Link
                        to="/admin"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-rose-50 dark:hover:bg-gray-700"
                      >
                        Admin Panel
                      </Link>
                    ) : (
                      <Link
                        to="/student"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-rose-50 dark:hover:bg-gray-700"
                      >
                        Student Portal
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    to="/login"
                    className="text-gray-700 dark:text-gray-200 hover:text-rose-600 px-4 py-2"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 fixed w-full top-20 left-0 h-[calc(100vh-5rem)] overflow-y-auto z-50">
          {navItems.map((item) => (
            <div key={item.name} className="px-6 py-4 border-b dark:border-gray-800">
              <button
                className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200"
                onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
              >
                <span>{item.name}</span>
                {item.dropdown.length > 0 && (
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                )}
              </button>
              
              {activeDropdown === item.name && item.dropdown.length > 0 && (
                <div className="mt-2 space-y-2">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block pl-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-end">
              <ThemeToggle />
            </div>
            {isAuthenticated ? (
              <>
                {userRole === 'admin' ? (
                  <Link
                    to="/admin"
                    className="block w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-center px-6 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin Panel
                  </Link>
                ) : (
                  <Link
                    to="/student"
                    className="block w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-center px-6 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Student Portal
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="block w-full bg-red-100 text-red-600 text-center px-6 py-2 rounded-lg hover:bg-red-200 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-center px-6 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block w-full bg-rose-600 text-white text-center px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

