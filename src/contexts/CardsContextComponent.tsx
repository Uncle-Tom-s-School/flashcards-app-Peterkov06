import React, { useEffect, useState } from "react";
import type { CardType } from "../types/CardType";
import type { CardContextType } from "../types/CardContextType";

export const CardsContext = React.createContext<CardContextType>({
  cards: [],
  currentCardId: 0,
  nextCard: () => {},
});

const CardsContextComponent = (props: { children: React.ReactNode }) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [currentCardId, setCurrentCardId] = useState<number>(0);

  useEffect(() => {
    console.log("hell");
    fetch("/public/cards.json")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  const nextCard = () => {
    setCurrentCardId((id) => id + 1);
  };

  return (
    <div className="full">
      <CardsContext.Provider
        value={{
          cards: cards,
          currentCardId: currentCardId,
          nextCard: nextCard,
        }}
      >
        {props.children}
      </CardsContext.Provider>
    </div>
  );
};

export default CardsContextComponent;
