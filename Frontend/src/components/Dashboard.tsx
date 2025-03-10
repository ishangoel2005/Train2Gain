import React from 'react';
import { Activity, Flame } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-yellow-500 text-2xl font-bold mb-6">Daily Stats</h2>
      <div className="flex justify-around items-center">
        <div className="stats-circle">
          <Activity className="text-yellow-500 w-8 h-8 mb-2" />
          <p className="text-gray-600">Steps Today</p>
          <p className="text-yellow-500 text-3xl font-bold">8,432</p>
        </div>
        <div className="stats-circle">
          <Flame className="text-yellow-500 w-8 h-8 mb-2" />
          <p className="text-gray-600">Calories Burned</p>
          <p className="text-yellow-500 text-3xl font-bold">342</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;