import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, UserCircle, Search, Bell } from 'lucide-react';

interface NavbarProps {
  showAnnouncement?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showAnnouncement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    window.location.reload();
  };

  return (
    <nav className={`bg-white w-full z-40 transition-all duration-300 sticky top-0 
      ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center text-2xl font-bold text-rose-600 tracking-tight hover:text-rose-700 transition-colors"
          >
            Vityaz Global
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Search Bar */}
            <div className={`relative transition-all duration-300 ${showSearch ? 'w-64' : 'w-10'}`}>
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-rose-600 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Search..."
                className={`w-full py-2 pl-4 pr-10 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-300
                  ${showSearch ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="flex items-center space-x-1.5 text-gray-700 hover:text-rose-600 transition-colors py-2.5 font-medium text-sm group"
                >
                  <span>{item.name}</span>
                  {item.dropdown.length > 0 && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {item.dropdown.length > 0 && (
                  <div className="absolute left-0 mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                    <div className="p-2 bg-white rounded-lg shadow-xl border border-gray-100">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors"
                        >
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  {userRole === 'admin' ? (
                    <Link
                      to="/admin"
                      className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
                    >
                      <UserCircle className="w-5 h-5" />
                      <span>Admin Panel</span>
                    </Link>
                  ) : (
                    <Link
                      to="/student"
                      className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
                    >
                      <UserCircle className="w-5 h-5" />
                      <span>Student Portal</span>
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="bg-red-50 text-red-600 px-6 py-2.5 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="relative bg-rose-600 text-white px-7 py-2.5 rounded-lg hover:bg-rose-700 transition-all duration-300 font-medium text-sm shadow-sm hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-gray-700 hover:text-rose-600"
            >
              <Search className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-rose-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="md:hidden px-4 py-3 border-t border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-4 pr-10 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white py-4 border-t border-gray-100">
            <div className="space-y-2 px-2">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <div 
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => item.dropdown.length > 0 && setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  >
                    <Link
                      to={item.path}
                      className="text-gray-700 font-medium"
                      onClick={() => item.dropdown.length === 0 && setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown.length > 0 && (
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 
                          ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </div>
                  
                  {item.dropdown.length > 0 && activeDropdown === item.name && (
                    <div className="mt-1 ml-4 space-y-1 border-l-2 border-gray-100 pl-4">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block p-2 text-sm text-gray-700 hover:text-rose-600 transition-colors"
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
                        className="flex items-center justify-center space-x-2 w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        <UserCircle className="w-5 h-5" />
                        <span>Admin Panel</span>
                      </Link>
                    ) : (
                      <Link
                        to="/student"
                        className="flex items-center justify-center space-x-2 w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        <UserCircle className="w-5 h-5" />
                        <span>Student Portal</span>
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full bg-red-50 text-red-600 px-4 py-3 rounded-lg hover:bg-red-100 transition-colors font-medium"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block w-full bg-gray-100 text-gray-700 text-center px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block w-full bg-rose-600 text-white text-center px-4 py-3 rounded-lg hover:bg-rose-700 transition-all duration-300 font-medium transform hover:-translate-y-0.5"
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