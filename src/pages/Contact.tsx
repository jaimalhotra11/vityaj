import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Get in touch with our education experts for personalized guidance
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-rose-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">info@vityazglobal.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-rose-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">+1 234 567 890</p>
                      <p className="text-gray-600 dark:text-gray-300">+1 234 567 891</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-rose-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Visit Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Business Street<br />
                        New Delhi, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-rose-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Working Hours</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-200 dark:bg-gray-600 h-64 rounded-lg">
                {/* Add your map component here */}
                <div className="w-full h-full rounded-lg bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400">Map will be displayed here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;