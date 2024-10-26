import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import SocialProfiles from './components/SocialProfiles';

function App() {
  useEffect(() => {
    const originalTitle = "Saiganesh | Portfolio";

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        document.title = "🫡Come Back to My Portfolio";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <Router>
      <div className='App'>
        <Dashboard />
        <SocialProfiles />
      </div>
    </Router>
  );
}

export default App;
