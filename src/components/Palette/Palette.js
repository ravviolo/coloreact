import { useContext } from "react";
import PaletteContext from "../../context/PaletteContext";
import ColorBox from "../ColorBox/ColorBox";

import * as Styled from "./Palette.styles";

const Palette = ({ colors }) => {
  const { level, format } = useContext(PaletteContext);
  const colorBoxes = colors[level].map((color) => (
    <ColorBox name={color.name} color={color[format]} />
  ));
  return <Styled.Palette>{colorBoxes}</Styled.Palette>;
};

export default Palette;
