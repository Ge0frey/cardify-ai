import React, { useState } from 'react';
import CardStack from './components/CardStack';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';
import { Brain } from 'lucide-react';

const SAMPLE_CARDS = [
  {
    id: '1',
    content: 'AI assistants can help with various tasks including writing, analysis, and problem-solving.',
    keywords: ['AI', 'Writing', 'Analysis'],
    timestamp: new Date().toLocaleString(),
  },
  {
    id: '2',
    content: 'Machine learning models learn patterns from data to make predictions and decisions.',
    keywords: ['ML', 'Data', 'Patterns'],
    timestamp: new Date().toLocaleString(),
  },
];

function App() {
  const { currentTheme, setCurrentTheme, themes } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards] = useState(SAMPLE_CARDS);

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'next' && currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div
      className="min-h-screen transition-colors"
      style={{ backgroundColor: currentTheme.background }}
    >
      <header className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold">AI Response Cards</h1>
        </div>
        <ThemeSelector
          themes={themes}
          currentTheme={currentTheme}
          onThemeChange={setCurrentTheme}
        />
      </header>

      <main className="container mx-auto px-4 py-8">
        <CardStack
          cards={cards}
          currentIndex={currentIndex}
          onNavigate={handleNavigate}
        />
      </main>
    </div>
  );
}

export default App;