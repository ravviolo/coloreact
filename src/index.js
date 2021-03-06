import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PaletteContextProvider } from "./context/PaletteContext";
import { UIContextProvider } from "./context/UIContext";
import App from "./components/App/App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <PaletteContextProvider>
        <UIContextProvider>
          <App />
        </UIContextProvider>
      </PaletteContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
