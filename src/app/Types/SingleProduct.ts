

interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface Product {
  category: string;
  categoryIcon: string;
  categoryNameBn: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  id: number;
  image: string;
  lastMonth: number;
  lastWeek: number;
  markets: Market[];
  nameBn: string;
  slug: string;
  today: number;
  unit: string;
  yesterday: number;
}