import { useContext } from "react";
import PaletteContext from "../context/mainContext";


import Palette from "../components/Palette/Palette";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

import * as Styled from "./PalettePage.styles";

const PalettePage = () => {
  const {palette} = useContext(PaletteContext)
  return (
    <Styled.PalettePage>
      <Nav />
      <Palette {...palette} />
      <Footer />
    </Styled.PalettePage>
  );
};

export default PalettePage;
