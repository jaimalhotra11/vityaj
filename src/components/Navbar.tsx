import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, UserCircle } from 'lucide-react';

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
      name: 'Study In India',
      path: '/mbbs-india',
      dropdown: [
        { name: 'Course Search', path: '/Courses' },
        { name: 'University Search', path: '/universities' }
      ]
    },
    {
      name: 'Affordable MBBS in Europe',
      path: '/mbbs-europe',
      dropdown: []
    },
    {
      name: 'Discover India',
      path: '/discover-india',
      dropdown: []
    },
    {
      name: 'Why Choose Vityaz Global',
      path: '/services',
      dropdown: []
    },
    {
      name: 'Gallery',
      path: '/gallery',
      dropdown: []
    },
    {
      name: 'Blog',
      path: '/blog',
      dropdown: []
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    window.location.reload();
  };

  return (
    <nav className={`bg-white dark:bg-gray-900 shadow-lg w-full z-40 transition-all duration-300 sticky top-0`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-rose-600 tracking-tight hover:text-rose-700 transition-colors">
            Vityaz Global
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="flex items-center space-x-1.5 text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors py-2.5 font-medium text-sm"
                >
                  <span>{item.name}</span>
                  {item.dropdown.length > 0 && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {item.dropdown.length > 0 && (
                  <div className="absolute left-0 mt-1 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2.5 z-50 border border-gray-100 dark:border-gray-700">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-5 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-rose-50 dark:hover:bg-gray-700 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center space-x-4 ml-4">
              {isAuthenticated ? (
                <>
                  {userRole === 'admin' ? (
                    <Link
                      to="/admin"
                      className="block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-center px-6 py-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin Panel
                    </Link>
                  ) : (
                    <Link
                      to="/student"
                      className="block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-center px-6 py-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium text-sm"
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
                    className="block bg-red-50 text-red-600 text-center px-6 py-2.5 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-center px-6 py-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block bg-rose-600 text-white text-center px-7 py-2.5 rounded-lg hover:bg-rose-700 transition-colors font-medium text-sm shadow-sm hover:shadow"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-4 border-t border-gray-100 dark:border-gray-800">
            <div className="space-y-2 px-2">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <div 
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => item.dropdown.length > 0 && setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  >
                    <Link
                      to={item.path}
                      className="text-gray-700 dark:text-gray-200 font-medium"
                      onClick={() => item.dropdown.length === 0 && setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown.length > 0 && (
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    )}
                  </div>
                  
                  {item.dropdown.length > 0 && activeDropdown === item.name && (
                    <div className="mt-1 ml-4 space-y-1 border-l-2 border-gray-100 dark:border-gray-700 pl-4">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block p-2 text-sm text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-6 space-y-3 px-3">
                {isAuthenticated ? (
                  <>
                    {userRole === 'admin' ? (
                      <Link
                        to="/admin"
                        className="block w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-center px-4 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Admin Panel
                      </Link>
                    ) : (
                      <Link
                        to="/student"
                        className="block w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-center px-4 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
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
                      className="block w-full bg-red-50 text-red-600 text-center px-4 py-3 rounded-lg hover:bg-red-100 transition-colors font-medium"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-center px-4 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block w-full bg-rose-600 text-white text-center px-4 py-3 rounded-lg hover:bg-rose-700 transition-colors font-medium shadow-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
