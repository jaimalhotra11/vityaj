import React from 'react';
import { Download, FileText, Book, Video, Globe, ArrowRight } from 'lucide-react';

const Downloads = () => {
  const resources = [
    {
      icon: <Book className="w-8 h-8 text-rose-600" />,
      title: "Course Brochures",
      items: [
        {
          name: "MBBS Program Guide",
          size: "2.5 MB",
          format: "PDF"
        },
        {
          name: "MD Program Overview",
          size: "3.1 MB",
          format: "PDF"
        },
        {
          name: "Engineering Programs",
          size: "2.8 MB",
          format: "PDF"
        }
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-rose-600" />,
      title: "Application Materials",
      items: [
        {
          name: "Application Checklist",
          size: "1.2 MB",
          format: "PDF"
        },
        {
          name: "Document Requirements",
          size: "890 KB",
          format: "PDF"
        },
        {
          name: "Sample SOP Template",
          size: "750 KB",
          format: "DOCX"
        }
      ]
    },
    {
      icon: <Video className="w-8 h-8 text-rose-600" />,
      title: "Video Resources",
      items: [
        {
          name: "Campus Tour Videos",
          size: "85 MB",
          format: "MP4"
        },
        {
          name: "Student Testimonials",
          size: "120 MB",
          format: "MP4"
        },
        {
          name: "Application Guide",
          size: "95 MB",
          format: "MP4"
        }
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-rose-600" />,
      title: "Country Guides",
      items: [
        {
          name: "Study in India Guide",
          size: "4.2 MB",
          format: "PDF"
        },
        {
          name: "European Education Guide",
          size: "3.8 MB",
          format: "PDF"
        },
        {
          name: "International Student Handbook",
          size: "5.1 MB",
          format: "PDF"
        }
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <Download className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Downloads
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Access our comprehensive collection of resources, guides, and materials
            to support your educational journey.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div>
                        <h3 className="font-semibold mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Size: {item.size} | Format: {item.format}
                        </p>
                      </div>
                      <button className="flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors">
                        <Download className="w-5 h-5" />
                        <span>Download</span>
                      </button>
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
          <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
          <p className="text-xl mb-8">Contact our team for additional resources and personalized guidance</p>
          <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors flex items-center gap-2 mx-auto">
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Downloads;