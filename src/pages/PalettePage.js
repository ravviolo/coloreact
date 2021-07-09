import initialPalettes from "../initialPalettes";

import Palette from "../components/Palette/Palette";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

import * as Styled from "./PalettePage.styles";

const PalettePage = () => {
  return (
    <Styled.PalettePage>
      <Nav />
      <Palette {...initialPalettes[4]} />
      <Footer />
    </Styled.PalettePage>
  );
};

export default PalettePage;
