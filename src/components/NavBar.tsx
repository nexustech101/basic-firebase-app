import React from "react";
import { Bell, Search, Settings, User, LogOut } from "lucide-react";
import type { LandingPageProps } from "../types/props";


const Navbar: React.FC<LandingPageProps> = ({ user, onSignOut }) => {
  return (
    <nav className='bg-white shadow-sm border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <div className='w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>A</span>
            </div>
            <span className='ml-2 text-xl font-semibold text-gray-900'>
              TypeScript
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

            <div className='relative group'>
              <button className='flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors'>
                <div className='w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center'>
                  <User className='w-5 h-5 text-indigo-600' />
                </div>
                <span className='text-sm font-medium text-gray-700'>
                  {user?.name || user?.email}
                </span>
              </button>

              {/* Dropdown */}
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
                    <LogOut className='w-4 h-4 mr-2' /> Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
