import { useContext } from "react";
import PaletteContext from "../../context/mainContext";
import ColorBox from "../ColorBox/ColorBox";

import * as Styled from "./Palette.styles";

const Palette = ({ colors }) => {
  const { level } = useContext(PaletteContext);
  const colorBoxes = colors[level].map((color) => (
    <ColorBox name={color.name} color={color.hex} />
  ));
  return <Styled.Palette>{colorBoxes}</Styled.Palette>;
};

export default Palette;
