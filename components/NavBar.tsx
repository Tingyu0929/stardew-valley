
import React from 'react';

interface NavBarProps {
  sections: { id: string; title: string }[];
}

export const NavBar: React.FC<NavBarProps> = ({ sections }) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 bg-gray-100 p-3 border-b-2 border-gray-200 overflow-x-auto whitespace-nowrap z-10 shadow-md">
      <div className="flex space-x-2 px-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="flex-shrink-0 px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            {section.title}
          </button>
        ))}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex-shrink-0 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:bg-orange-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
        >
          ⬆️ 回頂部
        </button>
      </div>
    </nav>
  );
};