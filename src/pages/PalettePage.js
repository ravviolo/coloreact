import initialPalettes from "../initialPalettes";
import generatePalette from "../helpers/colorHelper";

import Palette from "../components/Palette/Palette";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

import * as Styled from "./PalettePage.styles";

const PalettePage = () => {
  const palette = generatePalette(initialPalettes[4])
  console.log(palette)
  return (
    <Styled.PalettePage>
      <Nav />
      <Palette {...initialPalettes[4]} />
      <Footer />
    </Styled.PalettePage>
  );
};

export default PalettePage;
