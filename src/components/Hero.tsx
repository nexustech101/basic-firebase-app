import React from "react";
import { User } from "lucide-react";
import type { User as UserType } from "../types/user";

interface HeroProps {
  user: UserType | null;
}

const Hero: React.FC<HeroProps> = ({ user }) => {
  return (
    <section className='bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h1 className='text-5xl font-bold text-gray-900 mb-6'>
          Welcome to Your Dashboard
        </h1>
        <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto m-10'>
          You've successfully signed in! This is your personalized dashboard
          where you can manage your projects, track progress, and collaborate.
        </p>

        <div className='bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto mt-15'>
          <div className='flex items-center justify-center mb-4'>
            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center'>
              <User className='w-8 h-8 text-indigo-700' />
            </div>
          </div>
          <h2 className='text-2xl font-semibold text-gray-900 mb-2'>
            Hello, {user?.name || user?.email?.split("@")[0] || "User"}! 👋
          </h2>
          <p className='text-gray-600 mb-6'>
            You're now logged in and ready to explore all the features we offer.
          </p>
          <button className='bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
