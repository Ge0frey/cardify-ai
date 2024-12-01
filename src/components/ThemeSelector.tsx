import React from 'react';
import { Theme } from '../types';

interface ThemeSelectorProps {
  themes: Theme[];
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export default function ThemeSelector({ themes, currentTheme, onThemeChange }: ThemeSelectorProps) {
  return (
    <div className="flex gap-2 p-4">
      {themes.map((theme) => (
        <button
          key={theme.name}
          onClick={() => onThemeChange(theme)}
          className={`w-8 h-8 rounded-full border-2 transition-all ${
            currentTheme.name === theme.name
              ? 'border-blue-500 scale-110'
              : 'border-transparent'
          }`}
          style={{ backgroundColor: theme.background }}
        />
      ))}
    </div>
  );
}