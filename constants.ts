
import { Season } from './types';

export const SEASON_COLORS: Record<Season, string> = {
  [Season.Spring]: 'bg-green-200 text-green-800', // Matches #90EE90 #006400
  [Season.Summer]: 'bg-yellow-200 text-yellow-800', // Matches #FFD700 #8B4513
  [Season.Fall]: 'bg-orange-200 text-orange-800', // Matches #FFA500 #8B0000
  [Season.Winter]: 'bg-blue-200 text-blue-800', // Matches #ADD8E6 #00008B
};

export const INFO_BOX_STYLES = {
  info: 'bg-green-100 border-green-500 text-green-800',
  tip: 'bg-yellow-100 border-yellow-500 text-yellow-800',
  warning: 'bg-red-100 border-red-500 text-red-800',
  cheat: 'bg-blue-100 border-blue-500 text-blue-800',
};