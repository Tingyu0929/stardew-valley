
import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, lastUpdated }) => {
  return (
    <header className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 text-center shadow-lg">
      <h1 className="text-4xl font-extrabold mb-2 tracking-wide drop-shadow-md">{title}</h1>
      <p className="text-lg opacity-95">{subtitle}</p>
      <p className="text-sm opacity-80 mt-2">📱 可離線閱讀 | 最後更新：{lastUpdated}</p>
    </header>
  );
};