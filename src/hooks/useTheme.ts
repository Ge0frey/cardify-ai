import { useState } from 'react';
import { Theme } from '../types';

const defaultThemes: Theme[] = [
  {
    name: 'Light',
    background: '#ffffff',
    cardBg: '#ffffff',
    text: '#1a1a1a',
    accent: '#3b82f6',
  },
  {
    name: 'Dark',
    background: '#1a1a1a',
    cardBg: '#2d2d2d',
    text: '#ffffff',
    accent: '#60a5fa',
  },
  {
    name: 'Sepia',
    background: '#f4f1ea',
    cardBg: '#fffcf5',
    text: '#433422',
    accent: '#9c6644',
  },
];

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultThemes[0]);
  const [themes] = useState<Theme[]>(defaultThemes);

  return {
    currentTheme,
    setCurrentTheme,
    themes,
  };
}