import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CardsContextComponent from "./contexts/CardsContextComponent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardsContextComponent>
      <App />
    </CardsContextComponent>
  </StrictMode>
);
