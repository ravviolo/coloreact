import Palette from "./components/Palette/Palette";
import initialPalettes from "./initialPalettes";

function App() {
  return (
    <div className="App">
      <Palette {...initialPalettes[4]}/>
    </div>
  );
}

export default App;
