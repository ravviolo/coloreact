import { Route } from "react-router-dom";

import PalettePage from "./pages/PalettePage/PalettePage";
import "./App.css";
import PaletteListPage from "./pages/PaletteListPage/PaletteListPage";

function App() {
  return (
    <main className="App">
      <Route path='/' exact>
        <PaletteListPage/>
      </Route>
      <Route path="/:paletteId" exact>
        <PalettePage />
      </Route>
    </main>
  );
}

export default App;
