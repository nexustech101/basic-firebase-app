import React from "react";
import { Plus, Settings, User } from "lucide-react";

const cards = [
  {
    title: "Create Project",
    description:
      "Start a new project and invite your team members to collaborate.",
    icon: <Plus className='w-6 h-6 text-blue-600' />,
    bg: "bg-blue-100",
    btnColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "Manage Settings",
    description: "Customize your workspace and configure your preferences.",
    icon: <Settings className='w-6 h-6 text-purple-600' />,
    bg: "bg-purple-100",
    btnColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    title: "Team Collaboration",
    description: "Connect with your team and manage collaborative workflows.",
    icon: <User className='w-6 h-6 text-green-600' />,
    bg: "bg-green-100",
    btnColor: "bg-green-600 hover:bg-green-700",
  },
];

const ActionCards: React.FC = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16 grid md:grid-cols-3 gap-8'>
      {cards.map((card, idx) => (
        <div
          key={idx}
          className='bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow'>
          <div
            className={`w-12 h-12 ${card.bg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
            {card.icon}
          </div>
          <h3 className='text-xl font-semibold text-gray-900 mb-3'>
            {card.title}
          </h3>
          <p className='text-gray-600 mb-6'>{card.description}</p>
          <button
            className={`w-full text-white py-2 rounded-lg transition-colors ${card.btnColor}`}>
            {card.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ActionCards;
