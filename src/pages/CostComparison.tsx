import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingDown, PieChart, BarChart3, Calculator } from 'lucide-react';

const CostComparison = () => {
  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [program, setProgram] = useState('mbbs');
  const [duration, setDuration] = useState(4);
  const [accommodation, setAccommodation] = useState('hostel');
  const [includeExtras, setIncludeExtras] = useState(false);

  const countries = {
    usa: {
      name: "United States",
      tuition: 50000,
      hostel: 12000,
      apartment: 24000,
      living: 15000,
      extras: 5000,
      currency: "USD"
    },
    uk: {
      name: "United Kingdom",
      tuition: 35000,
      hostel: 10000,
      apartment: 18000,
      living: 12000,
      extras: 4000,
      currency: "GBP"
    },
    canada: {
      name: "Canada",
      tuition: 40000,
      hostel: 10000,
      apartment: 20000,
      living: 12000,
      extras: 4000,
      currency: "CAD"
    },
    australia: {
      name: "Australia",
      tuition: 45000,
      hostel: 11000,
      apartment: 22000,
      living: 13000,
      extras: 4500,
      currency: "AUD"
    },
    germany: {
      name: "Germany",
      tuition: 15000,
      hostel: 6000,
      apartment: 12000,
      living: 8000,
      extras: 3000,
      currency: "EUR"
    },
    france: {
      name: "France",
      tuition: 16000,
      hostel: 7000,
      apartment: 14000,
      living: 9000,
      extras: 3000,
      currency: "EUR"
    },
    india: {
      name: "India",
      tuition: 7000,
      hostel: 2000,
      apartment: 4000,
      living: 3000,
      extras: 1000,
      currency: "USD"
    }
  };

  const [costs, setCosts] = useState({
    tuition: 0,
    accommodation: 0,
    living: 0,
    extras: 0,
    total: 0,
    savings: 0
  });

  useEffect(() => {
    calculateCosts();
  }, [selectedCountry, program, duration, accommodation, includeExtras]);

  const calculateCosts = () => {
    const country = countries[selectedCountry];
    const indiaBaseline = countries.india;

    // Calculate costs for selected country
    const tuition = country.tuition * duration;
    const accommodationCost = country[accommodation] * duration;
    const living = country.living * duration;
    const extras = includeExtras ? country.extras * duration : 0;
    const total = tuition + accommodationCost + living + extras;

    // Calculate equivalent costs in India for comparison
    const indiaTuition = indiaBaseline.tuition * duration;
    const indiaAccommodation = indiaBaseline[accommodation] * duration;
    const indiaLiving = indiaBaseline.living * duration;
    const indiaExtras = includeExtras ? indiaBaseline.extras * duration : 0;
    const indiaTotal = indiaTuition + indiaAccommodation + indiaLiving + indiaExtras;

    // Calculate savings
    const savings = total - indiaTotal;

    setCosts({
      tuition,
      accommodation: accommodationCost,
      living,
      extras,
      total,
      savings
    });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Cost Comparison
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Compare education costs worldwide and see how much you can save by studying in India
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-rose-600" />
                Cost Calculator
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2">Country</label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600"
                  >
                    {Object.entries(countries).map(([code, country]) => (
                      <option key={code} value={code}>{country.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Program</label>
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600"
                  >
                    <option value="mbbs">MBBS</option>
                    <option value="md">MD</option>
                    <option value="ms">MS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Duration (Years)</label>
                  <input
                    type="number"
                    min="1"
                    max="6"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Accommodation</label>
                  <select
                    value={accommodation}
                    onChange={(e) => setAccommodation(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600"
                  >
                    <option value="hostel">University Hostel</option>
                    <option value="apartment">Private Apartment</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeExtras}
                    onChange={(e) => setIncludeExtras(e.target.checked)}
                    className="rounded text-rose-600 focus:ring-rose-600"
                  />
                  <span>Include additional costs (books, insurance, etc.)</span>
                </label>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Cost Breakdown (in {countries[selectedCountry].currency})</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Tuition Fees</span>
                    <span className="font-medium">{costs.tuition.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Accommodation</span>
                    <span className="font-medium">{costs.accommodation.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Living Expenses</span>
                    <span className="font-medium">{costs.living.toLocaleString()}</span>
                  </div>
                  {includeExtras && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Additional Costs</span>
                      <span className="font-medium">{costs.extras.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="pt-3 border-t">
                    <div className="flex justify-between font-bold">
                      <span>Total Cost</span>
                      <span className="text-rose-600">{costs.total.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="flex justify-between font-bold">
                      <span>Potential Savings vs. India</span>
                      <span className="text-green-600">{costs.savings.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Chart */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Cost Comparison by Country</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(countries).map(([code, country]) => (
              <div key={code} className={`rounded-xl p-6 ${
                code === 'india' 
                  ? 'bg-rose-600 text-white transform scale-105' 
                  : 'bg-white dark:bg-gray-800'
              }`}>
                <h3 className="text-xl font-bold mb-4">{country.name}</h3>
                <div className="space-y-2">
                  <p>Tuition: {country.tuition.toLocaleString()} {country.currency}/year</p>
                  <p>Living: {country.living.toLocaleString()} {country.currency}/year</p>
                  <div className="pt-4 border-t">
                    <p className="font-bold">
                      Total: {(country.tuition + country.living).toLocaleString()} {country.currency}/year
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Saving Today</h2>
          <p className="text-xl mb-8">Get quality education without the hefty price tag</p>
          <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default CostComparison;