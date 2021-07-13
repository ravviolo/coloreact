import { useContext } from "react";
import PaletteContext from "../../context/PaletteContext";
import ColorBox from "../ColorBox/ColorBox";

import * as Styled from "./Palette.styles";

const Palette = ({ colors, shadesPalette }) => {
  const { level, format } = useContext(PaletteContext);

  let colorBoxes

  if (shadesPalette){
     colorBoxes = colors.map((color) => (
      <ColorBox name={color.name} color={color[format]} isShadesPalette/>
    ));
  } else {
    colorBoxes = colors[level].map((color) => (
      <ColorBox name={color.name} color={color[format]} colorId={color.id} />
    ));
  }

  //  colorBoxes = colors[level].map((color) => (
  //   <ColorBox name={color.name} color={color[format]} colorId={color.id} />
  // ));
  return <Styled.Palette>{colorBoxes}</Styled.Palette>;
};

export default Palette;
