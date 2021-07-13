import { useContext } from "react";
import PaletteContext from "../../context/PaletteContext";
import { useParams } from "react-router";

import Palette from "../../components/Palette/Palette";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import SnackbarComponent from "../../components/UI/SnackbarComponent";

import * as Styled from "./PalettePage.styles";
import initialPalettes from "../../initialPalettes";

const PalettePage = () => {
  const { getPalette } = useContext(PaletteContext);
  const {paletteId} = useParams();

  const palette = getPalette(paletteId)

  
  return (
    <Styled.PalettePage>
      <Nav />
      <Palette {...palette} />
      <Footer paletteName={palette.paletteName} emoji={palette.emoji}/>
      <SnackbarComponent />
    </Styled.PalettePage>
  );
};

export default PalettePage;
