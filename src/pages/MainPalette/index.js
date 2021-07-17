import { useContext } from "react";
import PaletteContext from "../../context/PaletteContext";
import { useParams } from "react-router";

import Palette from "../../components/Palette/MainPalette/index";
import Nav from "../../components/Nav/MainPaletteNav/index";
import Footer from "../../components/Footer/index";
import SnackbarFormat from "../../components/UI/Snackbars/SnackbarFormat";

import { useStyles } from "./styles";

const MainPalette = ({ shadesPalette }) => {
  const { getPalette, getShades } = useContext(PaletteContext);
  const { paletteId, colorId } = useParams();
  const classes = useStyles();

  let palette = getPalette(paletteId);

  if (shadesPalette) {
    const shades = getShades(palette, colorId);
    palette = { ...palette, colors: shades.slice(1) };
  }

  return (
    <div className={classes.PalettePage}>
      <Nav shadesPalette={shadesPalette} />
      <Palette {...palette} shadesPalette={shadesPalette} />
      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
      <SnackbarFormat />
    </div>
  );
};

export default MainPalette;
