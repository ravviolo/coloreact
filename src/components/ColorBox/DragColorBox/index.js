import {usePalette} from "../../../context/PaletteContext";
import { SortableElement } from "react-sortable-hoc";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useStyles } from "./styles";

const DragColorBox = ({ color, name}) => {
  const { newPalette, setNewPalette } = usePalette();
  const classes = useStyles({ color });

  const handleDelete = () => {
    const updatedPalette = newPalette.filter((color) => color.name !== name);
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

export default SortableElement(DragColorBox);
