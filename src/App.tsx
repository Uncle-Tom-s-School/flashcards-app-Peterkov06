import { useContext } from "react";
import Flashcard from "./components/Flashcard";
import { CardsContext } from "./contexts/CardsContextComponent";

function App() {
  const ctx = useContext(CardsContext);

  return (
    <div className="col center">
      <div className="row center">
        {ctx.cards.length > 0 && (
          <Flashcard card={ctx.cards[ctx.currentCardId]}></Flashcard>
        )}
      </div>
      <div className="row center">
        <p className="meter-text">
          {ctx.currentCardId + 1}/{ctx.cards.length}
        </p>
      </div>
      <div className="row center">
        <meter
          className="meterfill"
          value={ctx.currentCardId}
          max={ctx.cards.length}
        ></meter>
      </div>
      <div className="row self-end">
        <div className="col" style={{ gap: 10 }}>
          <input
            className="btn interact_btn bold"
            type="button"
            value="Új gyakorlás indítása"
          />
          <input
            className="btn interact_btn bold"
            type="button"
            value="Új kártya hozzáadása"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
