import React, { useState } from 'react';
import { Coins } from 'lucide-react';

const Staking = () => {
  const [amount, setAmount] = useState('');

  const handleStake = async () => {
    // Implement staking logic here
    console.log('Staking:', amount, 'ETH');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center space-x-2 mb-6">
        <Coins className="text-yellow-500 w-6 h-6" />
        <h2 className="text-yellow-500 text-2xl font-bold">Stake ETH</h2>
      </div>
      <div className="space-y-4">
        <div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter ETH amount"
            className="w-full bg-gray-50 text-gray-900 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <button
          onClick={handleStake}
          className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
        >
          Stake Now
        </button>
      </div>
    </div>
  );
};

export default Staking;