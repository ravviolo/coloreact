import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import MainPalette from "../../pages/MainPalette";
import PaletteList from "../../pages/PaletteList";
import CreatePalette from "../../pages/CreatePalette";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <main className="App">
      <Route>
        <SwitchTransition mode="out-in">
          <CSSTransition timeout={300} classNames="fade" key={location.key}>
            <Switch location={location}>
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
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </CSSTransition>
        </SwitchTransition>
      </Route>
    </main>
  );
}

export default App;
