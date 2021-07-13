import { useContext } from "react";
import PaletteContext from "../../context/PaletteContext";
import ColorBox from "../ColorBox/ColorBox";
import ColorBoxLink from "../ColorBox/ColorBoxLink";

import * as Styled from "./Palette.styles";

const Palette = ({ colors, shadesPalette }) => {
  const { level, format } = useContext(PaletteContext);

  let colorBoxes;

  if (shadesPalette) {
    colorBoxes = colors.map((color) => (
      <ColorBox
        name={color.name}
        color={color[format]}
        isShadesPalette={true}
      />
    ));
  } else {
    colorBoxes = colors[level].map((color) => (
      <ColorBox
        name={color.name}
        color={color[format]}
        colorId={color.id}
        isShadesPalette={false}
      />
    ));
  }

  return <Styled.Palette>
    {colorBoxes}
    {shadesPalette && <ColorBoxLink isShadesPalette={true}/>}
    </Styled.Palette>;
};

export default Palette;
