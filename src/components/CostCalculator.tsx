import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface CostBreakdown {
  tuition: number;
  accommodation: number;
  living: number;
  total: number;
}

const CostCalculator = () => {
  const [course, setCourse] = useState('mbbs');
  const [city, setCity] = useState('delhi');
  const [duration, setDuration] = useState(1);
  const [costs, setCosts] = useState<CostBreakdown>({
    tuition: 7000,
    accommodation: 2000,
    living: 3000,
    total: 12000
  });

  const calculateCosts = () => {
    let baseTuition = course === 'mbbs' ? 7000 : 5000;
    let baseAccommodation = city === 'delhi' ? 2000 : 1500;
    let baseLiving = city === 'delhi' ? 3000 : 2000;

    const total = (baseTuition + baseAccommodation + baseLiving) * duration;

    setCosts({
      tuition: baseTuition * duration,
      accommodation: baseAccommodation * duration,
      living: baseLiving * duration,
      total
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-rose-600" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cost Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Course
          </label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="mbbs">MBBS</option>
            <option value="md">MD</option>
            <option value="engineering">Engineering</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            City
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="delhi">New Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Duration (Years)
          </label>
          <input
            type="number"
            min="1"
            max="6"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={calculateCosts}
            className="w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition-colors"
          >
            Calculate
          </button>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Cost Breakdown (USD)</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">Tuition Fees</span>
            <span className="font-medium">${costs.tuition.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">Accommodation</span>
            <span className="font-medium">${costs.accommodation.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">Living Expenses</span>
            <span className="font-medium">${costs.living.toLocaleString()}</span>
          </div>
          <div className="pt-3 border-t">
            <div className="flex justify-between font-bold">
              <span className="text-gray-900 dark:text-white">Total Cost</span>
              <span className="text-rose-600">${costs.total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;