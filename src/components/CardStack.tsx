import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card as CardType } from '../types';
import Card from './Card';

interface CardStackProps {
  cards: CardType[];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export default function CardStack({ cards, currentIndex, onNavigate }: CardStackProps) {
  if (cards.length === 0) return null;

  return (
    <div className="relative w-full max-w-3xl mx-auto h-[60vh]">
      <div className="absolute inset-0 flex items-center justify-center">
        <Card card={cards[currentIndex]} />
      </div>
      
      <div className="absolute inset-y-0 left-4 flex items-center">
        <button
          onClick={() => onNavigate('prev')}
          disabled={currentIndex === 0}
          className="p-2 rounded-full bg-white/90 shadow-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-4 flex items-center">
        <button
          onClick={() => onNavigate('next')}
          disabled={currentIndex === cards.length - 1}
          className="p-2 rounded-full bg-white/90 shadow-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {cards.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-blue-500 w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}