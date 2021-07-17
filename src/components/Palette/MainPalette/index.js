import { useContext } from "react";
import PaletteContext from "../../../context/PaletteContext";
import ColorBox from "../../ColorBox/index";
import ColorBoxLink from "../../ColorBox/ColorBoxLink";

import { useStyles } from "./styles";

const Palette = ({ colors, shadesPalette }) => {
  const { level, format } = useContext(PaletteContext);
  const classes = useStyles();

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

  return (
    <div className={classes.Palette}>
      {colorBoxes}
      {shadesPalette && <ColorBoxLink isShadesPalette={true} />}
    </div>
  );
};

export default Palette;
