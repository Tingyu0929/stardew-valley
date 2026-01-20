
import React from 'react';
import { INFO_BOX_STYLES } from '../constants';

interface InfoBoxProps {
  children: React.ReactNode;
  type?: keyof typeof INFO_BOX_STYLES;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ children, type = 'info' }) => {
  const styleClasses = INFO_BOX_STYLES[type];
  return (
    <div className={`p-4 my-4 rounded-md border-l-4 ${styleClasses}`}>
      {children}
    </div>
  );
};

export const TipBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <InfoBox type="tip">{children}</InfoBox>
);

export const WarningBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <InfoBox type="warning">{children}</InfoBox>
);

export const CheatBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <InfoBox type="cheat">{children}</InfoBox>
);