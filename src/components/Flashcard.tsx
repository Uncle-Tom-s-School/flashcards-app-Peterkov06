import React from "react";
import type { CardType } from "../types/CardType";
import { CardsContext } from "../contexts/CardsContextComponent";

const Flashcard = (props: { card: CardType }) => {
  const ctx = React.useContext(CardsContext);
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      className={isFlipped ? "flipcard-flip flipcard" : "flipcard"}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flipcard-inner">
        <div className="flipcard-front col center">
          <h2>{props.card.question}</h2>
        </div>
        <div className="flipcard-back col center">
          <div className="question-num-bar">{ctx.currentCardId + 1}</div>
          <h2>{props.card.answer}</h2>
          <div className="row space-evenly">
            <div className="col center btn" onClick={() => ctx.nextCard()}>
              <p className="check-text">Eltaláltam</p>
              <div className="check-outer">
                <i className="fa-regular fa-circle-check"></i>
              </div>
            </div>
            <div className="col center btn" onClick={() => ctx.nextCard()}>
              <p className="x-text">Nem sikerült</p>
              <div className="x-outer">
                <i className="fa-regular fa-circle-xmark"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
