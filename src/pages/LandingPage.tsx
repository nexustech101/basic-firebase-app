import React from "react";
import { LogOut, User, Settings, Bell, Search, Plus } from "lucide-react";
import type { LandingPageProps } from "../types/props";


const LandingPage: React.FC<LandingPageProps> = ({ user, onSignOut }) => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Navigation */}
      <nav className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <div className='flex items-center'>
              <div className='w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>A</span>
              </div>
              <span className='ml-2 text-xl font-semibold text-gray-900'>
                AppName
              </span>
            </div>

            {/* Search Bar */}
            <div className='flex-1 max-w-lg mx-8'>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                <input
                  type='text'
                  placeholder='Search...'
                  className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                />
              </div>
            </div>

            {/* User Menu */}
            <div className='flex items-center space-x-4'>
              <button className='p-2 text-gray-400 hover:text-gray-600 transition-colors'>
                <Bell className='w-5 h-5' />
              </button>
              <button className='p-2 text-gray-400 hover:text-gray-600 transition-colors'>
                <Settings className='w-5 h-5' />
              </button>

              {/* User Dropdown */}
              <div className='relative group'>
                <button className='flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors'>
                  <div className='w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center'>
                    <User className='w-5 h-5 text-indigo-600' />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    {user?.name || user?.email}
                  </span>
                </button>

                {/* Dropdown Menu */}
                <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
                  <div className='py-1'>
                    <div className='px-4 py-2 border-b'>
                      <p className='text-sm font-medium text-gray-900'>
                        {user?.name || "User"}
                      </p>
                      <p className='text-xs text-gray-500'>{user?.email}</p>
                    </div>
                    <button className='w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors'>
                      Profile Settings
                    </button>
                    <button className='w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors'>
                      Preferences
                    </button>
                    <button
                      onClick={onSignOut}
                      className='w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center'>
                      <LogOut className='w-4 h-4 mr-2' />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className='bg-gradient-to-br from-indigo-50 via-white to-purple-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <div className='text-center'>
            <h1 className='text-5xl font-bold text-gray-900 mb-6'>
              Welcome to Your Dashboard
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              You've successfully signed in! This is your personalized dashboard
              where you can manage your projects, track your progress, and
              collaborate with your team.
            </p>

            {/* Welcome Message */}
            <div className='bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center'>
                  <User className='w-8 h-8 text-green-600' />
                </div>
              </div>
              <h2 className='text-2xl font-semibold text-gray-900 mb-2'>
                Hello, {user?.name || user?.email?.split("@")[0] || "User"}! 👋
              </h2>
              <p className='text-gray-600 mb-6'>
                You're now logged in and ready to explore all the features we
                have to offer.
              </p>
              <button className='bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors'>
                Get Started
              </button>
            </div>

            {/* Action Cards */}
            <div className='grid md:grid-cols-3 gap-8 mt-16'>
              <div className='bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Plus className='w-6 h-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  Create Project
                </h3>
                <p className='text-gray-600 mb-6'>
                  Start a new project and invite your team members to
                  collaborate.
                </p>
                <button className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors'>
                  New Project
                </button>
              </div>

              <div className='bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow'>
                <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Settings className='w-6 h-6 text-purple-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  Manage Settings
                </h3>
                <p className='text-gray-600 mb-6'>
                  Customize your workspace and configure your preferences.
                </p>
                <button className='w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors'>
                  Open Settings
                </button>
              </div>

              <div className='bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow'>
                <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <User className='w-6 h-6 text-green-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  Team Collaboration
                </h3>
                <p className='text-gray-600 mb-6'>
                  Connect with your team and manage collaborative workflows.
                </p>
                <button className='w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors'>
                  View Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-white border-t'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='text-center'>
            <p className='text-gray-600'>
              &copy; 2024 AppName. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
