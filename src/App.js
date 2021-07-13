import { Route } from "react-router-dom";

import PalettePage from "./pages/PalettePage";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Route path="/:paletteId">
        <PalettePage />
      </Route>
    </main>
  );
}

export default App;
