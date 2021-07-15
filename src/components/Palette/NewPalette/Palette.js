import { useContext } from "react";
import UIContext from "../../../context/UIContext";
import PaletteContext from "../../../context/PaletteContext";
import clsx from "clsx";

import DragColorBox from "../../ColorBox/DragColorBox";

import { useStyles } from "./Palette.styles";

const Palette = () => {
  const { openDR } = useContext(UIContext);
  const { newPalette } = useContext(PaletteContext);
  const classes = useStyles();

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: openDR,
      })}
    >
      <div className={classes.drawerHeader} />
      <div className={classes.ColorsContainer}>
        {newPalette.map((newColor) => (
          <DragColorBox color={newColor.color} name={newColor.name} id={newColor.id} />
        ))}
      </div>
    </main>
  );
};

export default Palette;
