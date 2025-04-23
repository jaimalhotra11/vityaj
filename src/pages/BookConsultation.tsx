import React, { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    topic: '',
    message: ''
  });

  const consultationTopics = [
    'Admission Process',
    'Program Selection',
    'Visa Assistance',
    'Financial Planning',
    'Accommodation',
    'Career Guidance',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Book a Consultation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Schedule a one-on-one consultation with our education experts to discuss
            your academic journey.
          </p>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Consultation Topic
                    </label>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600"
                    >
                      <option value="">Select a topic</option>
                      {consultationTopics.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600"
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition-colors"
                >
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <Calendar className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose a date and time that works best for you
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">30-Minute Sessions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Focused discussions to address your queries
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Counselors</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Guidance from experienced education advisors
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <MessageSquare className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Advice</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tailored guidance for your specific needs
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookConsultation;