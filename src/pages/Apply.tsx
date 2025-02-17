import React, { useState } from 'react';
import { GraduationCap, FileText, Send } from 'lucide-react';

const Apply = () => {
  const [step, setStep] = useState(1);

  const programs = [
    { id: 'mbbs-india', name: 'MBBS in India' },
    { id: 'mbbs-europe', name: 'MBBS in Europe' },
    { id: 'md', name: 'MD Programs' },
    { id: 'engineering', name: 'Engineering' }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-6">
            <GraduationCap className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Apply Now
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Start your journey towards a world-class education
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="flex justify-between mb-12">
              {[1, 2, 3].map((number) => (
                <div key={number} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 ${
                    step >= number ? 'bg-rose-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {number}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {number === 1 ? 'Personal Info' : number === 2 ? 'Program Selection' : 'Documents'}
                  </span>
                </div>
              ))}
            </div>

            {/* Form Steps */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
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
                    <label className="block text-sm font-medium mb-2">Nationality</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                      required
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Program Selection</h2>
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Program</label>
                    <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600">
                      {programs.map((program) => (
                        <option key={program.id} value={program.id}>
                          {program.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Start Date</label>
                    <input
                      type="month"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Academic Background</label>
                    <textarea
                      rows={4}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                      placeholder="Brief description of your academic background..."
                      required
                    ></textarea>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Document Upload</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Academic Transcripts</label>
                      <div className="flex items-center gap-4">
                        <FileText className="w-6 h-6 text-rose-600" />
                        <input
                          type="file"
                          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Passport Copy</label>
                      <div className="flex items-center gap-4">
                        <FileText className="w-6 h-6 text-rose-600" />
                        <input
                          type="file"
                          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">English Proficiency Test</label>
                      <div className="flex items-center gap-4">
                        <FileText className="w-6 h-6 text-rose-600" />
                        <input
                          type="file"
                          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-2 border border-rose-600 text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                  >
                    Previous
                  </button>
                )}
                <button
                  onClick={() => step < 3 ? setStep(step + 1) : console.log('Submit')}
                  className="ml-auto bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition-colors flex items-center gap-2"
                >
                  {step === 3 ? (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Application
                    </>
                  ) : (
                    'Next'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;