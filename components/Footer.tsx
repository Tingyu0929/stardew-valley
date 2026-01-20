
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 text-center text-sm mt-10">
      <p className="text-lg mb-2">🌾 星露谷物語 完整攻略 🌾</p>
      <p>適用於 iOS 遊戲版本 | 更新日期：2026年1月</p>
      <p className="text-xs opacity-80 mt-2">
        本攻略整合自官方Wiki、玩家社群經驗及實際遊玩心得<br />
        遊戲持續更新中，部分內容可能隨版本而變化
      </p>
      <p className="mt-4 text-base">
        祝你遊戲愉快！🎮
      </p>
    </footer>
  );
};