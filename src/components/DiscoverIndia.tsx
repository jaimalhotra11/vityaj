import React from "react";
import { motion } from "framer-motion";

const facts = [
  {
    id: 1,
    title: "Population",
    value: "1.4B",
    description: "India is the world's most populous country with a diverse and vibrant society.",
    color: "from-orange-50 to-orange-100",
    textColor: "text-orange-600",
  },
  {
    id: 2,
    title: "Economy",
    value: "$3.7T",
    description: "World's 5th largest economy with rapid growth and innovation.",
    color: "from-blue-50 to-blue-100",
    textColor: "text-blue-600",
  },
  {
    id: 3,
    title: "Universities",
    value: "1000+",
    description: "Home to world-renowned institutions and cutting-edge research.",
    color: "from-green-50 to-green-100",
    textColor: "text-green-600",
  },
  {
    id: 4,
    title: "Tourism",
    value: "10M+",
    description: "India attracts millions of tourists for its culture, heritage, and nature.",
    color: "from-purple-50 to-purple-100",
    textColor: "text-purple-600",
  },
  {
    id: 5,
    title: "Languages",
    value: "22+",
    description: "A country with linguistic diversity, housing 22 official languages.",
    color: "from-red-50 to-red-100",
    textColor: "text-red-600",
  },
  {
    id: 6,
    title: "Heritage Sites",
    value: "40+",
    description: "Home to iconic UNESCO World Heritage sites.",
    color: "from-yellow-50 to-yellow-100",
    textColor: "text-yellow-600",
  },
];

const DiscoverIndia = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Discover <span className="text-orange-500">India</span> in a Minute
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the vibrant culture, rich heritage, and world-class advancements that make India extraordinary.
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact) => (
            <motion.div
              key={fact.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${fact.color} p-8 rounded-2xl shadow-lg transform transition-transform hover:scale-105`}
            >
              <div className={`text-5xl font-bold ${fact.textColor} mb-4`}>{fact.value}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{fact.title}</h3>
              <p className="text-gray-600">{fact.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-orange-500/30 transition-all"
          >
            Explore More About India
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default DiscoverIndia;
