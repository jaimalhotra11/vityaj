import React, { useState } from 'react';
import { HelpCircle, Plus, Minus, MessageSquare } from 'lucide-react';

const FAQ = () => {
  const categories = [
    {
      title: "Admissions",
      questions: [
        {
          q: "What are the admission requirements for international students?",
          a: "International students need to have completed their secondary education with required subjects, valid passport, and meet English language proficiency requirements. Specific requirements vary by program and university."
        },
        {
          q: "How long does the admission process take?",
          a: "The admission process typically takes 4-6 weeks from application submission to decision. Early application is recommended to ensure timely processing."
        },
        {
          q: "Is NEET mandatory for MBBS admission?",
          a: "Yes, NEET is mandatory for MBBS admission in India for international students, except those applying through government schemes or bilateral agreements."
        }
      ]
    },
    {
      title: "Visa & Immigration",
      questions: [
        {
          q: "What documents are required for a student visa?",
          a: "Required documents include admission letter, passport, financial statements, academic transcripts, and medical insurance. Our visa assistance team provides detailed guidance."
        },
        {
          q: "How long does it take to get a student visa?",
          a: "Student visa processing typically takes 15-30 days. We recommend applying at least 2 months before your course start date."
        },
        {
          q: "Can I work while studying?",
          a: "Part-time work opportunities are available with certain restrictions. Our career guidance team can provide detailed information."
        }
      ]
    },
    {
      title: "Accommodation",
      questions: [
        {
          q: "What accommodation options are available?",
          a: "We offer both on-campus hostel facilities and off-campus private accommodation options. All accommodations are safe, comfortable, and conveniently located."
        },
        {
          q: "Are meals included in accommodation fees?",
          a: "Most university hostels include meal plans. Private accommodations typically have self-catering facilities."
        },
        {
          q: "How much does accommodation cost?",
          a: "Accommodation costs vary by location and type, ranging from $100-300 per month for hostels and $200-500 for private apartments."
        }
      ]
    },
    {
      title: "Financial Matters",
      questions: [
        {
          q: "What are the tuition fee payment options?",
          a: "We accept payments through bank transfer, credit card, and other international payment methods. Installment plans are available for eligible students."
        },
        {
          q: "Are scholarships available?",
          a: "Yes, various merit-based and need-based scholarships are available. Our team can help you identify and apply for suitable scholarships."
        },
        {
          q: "What is the average cost of living?",
          a: "Monthly living expenses typically range from $300-500, including accommodation, food, and other basic necessities."
        }
      ]
    }
  ];

  const [openCategory, setOpenCategory] = useState(0);
  const [openQuestions, setOpenQuestions] = useState<{ [key: number]: boolean }>({});

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    setOpenQuestions(prev => ({
      ...prev,
      [`${categoryIndex}-${questionIndex}`]: !prev[`${categoryIndex}-${questionIndex}`]
    }));
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <HelpCircle className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Find answers to common questions about studying abroad, admissions,
            visa process, and more.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => (
                    <div
                      key={questionIndex}
                      className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between"
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      >
                        <span className="font-semibold">{faq.q}</span>
                        {openQuestions[`${categoryIndex}-${questionIndex}`] ? (
                          <Minus className="w-5 h-5 text-rose-600" />
                        ) : (
                          <Plus className="w-5 h-5 text-rose-600" />
                        )}
                      </button>
                      {openQuestions[`${categoryIndex}-${questionIndex}`] && (
                        <div className="px-6 py-4 bg-white dark:bg-gray-800 border-t dark:border-gray-600">
                          <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8">Our education experts are here to help you</p>
          <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors flex items-center gap-2 mx-auto">
            <MessageSquare className="w-5 h-5" />
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;