import React from "react";
import AuthPage from "./pages/AuthPage";
// import LandingPage from "./pages/LandingPage";
import LandingPage from "./pages/Landing";
import { useAuth } from "./hooks/useAuth";
import "./App.css";

const App: React.FC = () => {
  const { user, loading, signOut } = useAuth();

  // Show loading spinner while checking auth state
  if (loading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center'>
        <div className='text-center'>
          <div className='w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4'></div>
          <p className='text-gray-600'>Loading...</p>
        </div>
      </div>
    );
  }

  // Render appropriate component based on auth state
  return (
    <div className='App'>
      {user ? <LandingPage user={user} onSignOut={signOut} /> : <AuthPage />}
    </div>
  );
};

export default App;
