import React from 'react';
import { Dumbbell } from 'lucide-react';

const Navbar = () => {
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <nav className="bg-white p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Dumbbell className="text-yellow-500 w-8 h-8" />
          <span className="text-yellow-500 text-xl font-bold">Train2Gain</span>
        </div>
        <button
          onClick={connectWallet}
          className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
        >
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;