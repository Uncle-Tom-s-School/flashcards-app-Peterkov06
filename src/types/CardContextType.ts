import type { CardType } from "./CardType";

export type CardContextType = {
  cards: CardType[];
  currentCardId: number;
  nextCard: () => void;
};
