import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
                <Shield className="w-6 h-6 text-rose-600" />
                Information We Collect
              </h2>
              <p className="mb-6">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>Personal identification information (Name, email address, phone number)</li>
                <li>Educational background and qualifications</li>
                <li>Contact preferences and communication history</li>
                <li>Application and enrollment details</li>
              </ul>

              <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
                <Lock className="w-6 h-6 text-rose-600" />
                How We Use Your Information
              </h2>
              <p className="mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>Process your applications and enrollment</li>
                <li>Communicate with you about our services</li>
                <li>Provide customer support and assistance</li>
                <li>Improve our services and user experience</li>
              </ul>

              <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
                <Eye className="w-6 h-6 text-rose-600" />
                Information Sharing
              </h2>
              <p className="mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>Partner universities for admission purposes</li>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
                <FileText className="w-6 h-6 text-rose-600" />
                Your Rights
              </h2>
              <p className="mb-6">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>Access your personal information</li>
                <li>Request corrections to your data</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="mb-4">
                  If you have any questions about our Privacy Policy, please contact us at:
                </p>
                <ul className="list-none space-y-2">
                  <li>Email: privacy@vityazglobal.com</li>
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

export default PrivacyPolicy;