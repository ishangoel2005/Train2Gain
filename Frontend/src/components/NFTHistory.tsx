import React from 'react';
import { Medal } from 'lucide-react';

const NFTHistory = () => {
  const nfts = [
    {
      id: 1,
      challenge: '100 Push-ups Challenge',
      date: '2024-03-10',
      status: 'Completed',
    },
    {
      id: 2,
      challenge: '5km Run Challenge',
      date: '2024-03-09',
      status: 'Failed',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center space-x-2 mb-6">
        <Medal className="text-yellow-500 w-6 h-6" />
        <h2 className="text-yellow-500 text-2xl font-bold">NFT History</h2>
      </div>
      <div className="space-y-4">
        {nfts.map((nft) => (
          <div key={nft.id} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-900 font-semibold">{nft.challenge}</h3>
                <p className="text-gray-600 text-sm">{nft.date}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  nft.status === 'Completed'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                }`}
              >
                {nft.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTHistory;