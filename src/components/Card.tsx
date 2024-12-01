import React, { useState } from 'react';
import { Card as CardType } from '../types';
import { Maximize2, Minimize2 } from 'lucide-react';

interface CardProps {
  card: CardType;
}

export default function Card({ card }: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative bg-white rounded-xl shadow-xl p-6 transition-all duration-300 ${
        isExpanded ? 'w-full h-full' : 'w-[90%] h-[90%]'
      }`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        {isExpanded ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
      </button>

      <div className="h-full overflow-auto">
        <div className="space-y-4">
          <div className="text-sm text-gray-500">{card.timestamp}</div>
          
          <div className="prose prose-sm">
            {card.content}
          </div>

          {card.keywords && (
            <div className="flex flex-wrap gap-2 mt-4">
              {card.keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}