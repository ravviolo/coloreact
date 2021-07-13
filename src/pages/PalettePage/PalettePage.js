import { useContext } from "react";
import PaletteContext from "../../context/PaletteContext";
import { useParams } from "react-router";

import Palette from "../../components/Palette/Palette";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import SnackbarComponent from "../../components/UI/SnackbarComponent";

import * as Styled from "./PalettePage.styles";
import initialPalettes from "../../initialPalettes";

const PalettePage = ({shadesPalette}) => {
  const { getPalette, getShades } = useContext(PaletteContext);
  const {paletteId, colorId} = useParams();

  let palette = getPalette(paletteId)

  if (shadesPalette) {
    const shades = getShades(palette, colorId)
    palette = {...palette, colors:shades.slice(1)}
  }

  
  return (
    <Styled.PalettePage>
      <Nav shadesPalette={shadesPalette}/>
      <Palette {...palette} shadesPalette={shadesPalette} />
      <Footer paletteName={palette.paletteName} emoji={palette.emoji}/>
      <SnackbarComponent />
    </Styled.PalettePage>
  );
};

export default PalettePage;
