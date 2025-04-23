import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Vityaz Global</h3>
            <p className="text-gray-400 mb-6">
              Your trusted partner in international education, helping students achieve their academic dreams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Universities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Study in India</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Study in Europe</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Visa Assistance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accommodation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-500" />
                <span className="text-gray-400">info@vityazglobal.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-500" />
                <span className="text-gray-400">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-rose-500" />
                <span className="text-gray-400">123 Business Street, New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Vityaz Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;