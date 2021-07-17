import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import { PaletteContextProvider } from "./context/PaletteContext";
import { UIContextProvider } from "./context/UIContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PaletteContextProvider>
        <UIContextProvider>
          <App />
        </UIContextProvider>
      </PaletteContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
