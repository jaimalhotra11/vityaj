import React from 'react';
import { FileText, Shield, AlertCircle, HelpCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
                <FileText className="w-6 h-6 text-rose-600" />
                Agreement to Terms
              </h2>
              <p className="mb-8">
                By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
              </p>

              <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
                <Shield className="w-6 h-6 text-rose-600" />
                Service Description
              </h2>
              <p className="mb-4">
                Vityaz Global provides educational consulting services including:
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>University admission assistance</li>
                <li>Course selection guidance</li>
                <li>Visa application support</li>
                <li>Accommodation arrangements</li>
                <li>Travel assistance</li>
              </ul>

              <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
                <AlertCircle className="w-6 h-6 text-rose-600" />
                User Responsibilities
              </h2>
              <p className="mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Use our services in good faith</li>
              </ul>

              <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
                <HelpCircle className="w-6 h-6 text-rose-600" />
                Disclaimer and Limitations
              </h2>
              <p className="mb-8">
                Our services are provided "as is" without any warranties, expressed or implied. We do not guarantee admission to any institution or visa approval.
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li>Email: legal@vityazglobal.com</li>
                  <li>Phone: +1 234 567 890</li>
                  <li>Address: 123 Business Street, New Delhi, India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;