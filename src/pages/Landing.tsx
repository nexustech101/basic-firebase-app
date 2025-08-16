/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import ActionCards from "../components/ActionCards";
import Footer from "../components/Footer";
import type { LandingPageProps } from "../types/props";

// interface LandingPageProps {
//   user: UserType | null;
//   onSignOut: () => void;
// }

const LandingPage: React.FC<LandingPageProps> = ({ user, onSignOut }) => {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      <Navbar user={user} onSignOut={onSignOut} />
      <Hero user={user} />
      <ActionCards />
      <Footer />
    </div>
  );
};

export default LandingPage;
