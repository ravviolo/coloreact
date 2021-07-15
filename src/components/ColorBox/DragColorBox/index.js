import { useContext } from "react";
import PaletteContext from "../../../context/PaletteContext";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useStyles } from "./styles";

const DragColorBox = ({ color, name, id }) => {
  const { newPalette, setNewPalette } = useContext(PaletteContext);
  const classes = useStyles({ color });

  const handleDelete = () => {
    const updatedPalette = newPalette.filter((color) => color.id !== id);
    setNewPalette(updatedPalette);
  };
  return (
    <div className={classes.ColorBox}>
      <div className={classes.BottomContainer}>
        <span>{name}</span>
        <DeleteOutlineIcon
          className={classes.DeleteIcon}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default DragColorBox;
