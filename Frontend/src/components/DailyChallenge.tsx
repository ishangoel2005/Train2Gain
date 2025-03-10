import React, { useState } from 'react';
import { Trophy, Upload } from 'lucide-react';
import Chatbot from './Chatbot';

const DailyChallenge = () => {
  const [isVerifying, setIsVerifying] = useState(false);

  const handleUpload = async () => {
    setIsVerifying(true);
    try {
      // Simulated verification process
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Here you would integrate with your AI verification system
      const challengeCompleted = true; // This would come from your AI verification

      if (challengeCompleted) {
        // Mint NFT reward
        console.log('Challenge verified! Minting NFT reward...');
        // Add your NFT minting logic here
      }
    } catch (error) {
      console.error('Verification failed:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <div className="flex items-center space-x-2 mb-6">
          <Trophy className="text-yellow-500 w-6 h-6" />
          <h2 className="text-yellow-500 text-2xl font-bold">Daily Challenge</h2>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-gray-900 text-xl font-semibold mb-2">Today's Challenge</h3>
          <p className="text-gray-600 mb-4">Complete 100 push-ups in 5 minutes</p>
          <div className="flex items-center justify-between">
            <span className="text-yellow-500">Reward: Exclusive NFT Badge</span>
          </div>
        </div>
        <button
          onClick={handleUpload}
          disabled={isVerifying}
          className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          <Upload className="w-5 h-5" />
          <span>{isVerifying ? 'Verifying...' : 'Upload Verification Video'}</span>
        </button>
      </div>
      <Chatbot />
    </div>
  );
};

export default DailyChallenge;