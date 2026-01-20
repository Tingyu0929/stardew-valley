
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="mb-8 p-6 bg-gray-50 border-l-8 border-green-500 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-md">
      <h2 className="text-3xl font-bold text-green-700 mb-4 pb-2 border-b-2 border-green-500 tracking-tight">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed text-base">
        {children}
      </div>
    </section>
  );
};