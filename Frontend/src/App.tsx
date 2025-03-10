import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Staking from './components/Staking';
import DailyChallenge from './components/DailyChallenge';
import NFTHistory from './components/NFTHistory';
import UserExperience from './components/UserExperience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="animated-gradient"></div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8">
            <Dashboard />
            <Staking />
          </div>
          <div className="space-y-8">
            <DailyChallenge />
            <NFTHistory />
          </div>
        </div>
        <div className="space-y-12">
          <UserExperience />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;