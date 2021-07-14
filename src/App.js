import { Route } from "react-router-dom";

import PalettePage from "./pages/PalettePage/PalettePage";
import "./App.css";
import PaletteListPage from "./pages/PaletteListPage/PaletteListPage";
import NewPalettePage from "./pages/NewPalettePage/NewPalettePage";

function App() {
  return (
    <main className="App">
      <Route path="/" exact>
        <PaletteListPage />
      </Route>
      <Route path="/create-palette" exact>
        <NewPalettePage />
      </Route>
      <Route path="/palette/:paletteId" exact>
        <PalettePage shadesPalette={false} />
      </Route>
      <Route path="/palette/:paletteId/:colorId" exact>
        <PalettePage shadesPalette={true} />
      </Route>
    </main>
  );
}

export default App;
