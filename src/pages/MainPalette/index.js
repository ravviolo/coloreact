import { usePalette } from "../../context/PaletteContext";
import { useParams } from "react-router";
import Page from '../../components/UI/Page'

import Palette from "../../components/Palette/MainPalette";
import Nav from "../../components/Nav/MainPaletteNav";
import Footer from "../../components/Footer";
import SnackbarFormat from "../../components/UI/Snackbars/SnackbarFormat";

import { useStyles } from "./styles";

const MainPalette = ({ shadesPalette }) => {
  const { getPalette, getShades } = usePalette();
  const { paletteId, colorId } = useParams();
  const classes = useStyles();

  let palette = getPalette(paletteId);

  if (shadesPalette) {
    const shades = getShades(palette, colorId);
    palette = { ...palette, colors: shades.slice(1) };
  }

  return (
    <Page className={classes.PalettePage}>
      <Nav shadesPalette={shadesPalette} />
      <Palette {...palette} shadesPalette={shadesPalette} />
      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
      <SnackbarFormat />
    </Page>
  );
};

export default MainPalette;
