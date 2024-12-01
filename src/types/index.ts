export interface Card {
  id: string;
  content: string;
  keywords?: string[];
  timestamp: string;
}

export interface Theme {
  name: string;
  background: string;
  cardBg: string;
  text: string;
  accent: string;
}