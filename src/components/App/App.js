import { Route } from "react-router-dom";

import MainPalette from "../../pages/MainPalette";
import PaletteList from "../../pages/PaletteList";
import CreatePalette from "../../pages/CreatePalette";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Route path="/" exact>
        <PaletteList />
      </Route>
      <Route path="/create-palette" exact>
        <CreatePalette />
      </Route>
      <Route path="/palette/:paletteId" exact>
        <MainPalette shadesPalette={false} />
      </Route>
      <Route path="/palette/:paletteId/:colorId" exact>
        <MainPalette shadesPalette={true} />
      </Route>
    </main>
  );
}

export default App;
