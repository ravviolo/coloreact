import {useUI} from "../../../context/UIContext";
import {usePalette} from "../../../context/PaletteContext";
import clsx from "clsx";

import DragColorBoxContainer from "../../UI/DragColorBoxContainer";
import arrayMove from "array-move";

import { useStyles } from "./styles";

const Palette = () => {
  const { openDR } = useUI();
  const { newPalette, setNewPalette } = usePalette();
  const classes = useStyles();

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    setNewPalette(arrayMove(newPalette, oldIndex, newIndex));
  };
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: openDR,
      })}
    >
      <div className={classes.drawerHeader} />
      <DragColorBoxContainer
        onSortEnd={handleSortEnd}
        className={classes.ColorsContainer}
        axis="xy"
      />
    </main>
  );
};

export default Palette;
