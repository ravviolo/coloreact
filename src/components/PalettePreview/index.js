import {useUI} from "../../context/UIContext";
import {usePalette} from "../../context/PaletteContext";
import clsx from "clsx";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import { useStyles } from "./styles";

const PalettePreview = ({
  paletteName,
  emoji,
  colors,
  id,
  goToPalette,
  notChosen,
  showDelete,
}) => {
  const { setOpenDeleteDialog } = useUI();
  const { setPaletteId } = usePalette();
  const classes = useStyles();
  const handleDeleteDialog = (e) => {
    e.stopPropagation();
    setOpenDeleteDialog(true);
    setPaletteId(id);
  };
  return (
    <div
      className={clsx(classes.Card, notChosen && classes.Overlay)}
      onClick={goToPalette}
    >
      {showDelete && (
        <span className={classes.DeleteIcon}>
          <DeleteOutlineIcon onClick={handleDeleteDialog} />
        </span>
      )}
      <div className={classes.ColorContainer}>
        {colors.map((color) => (
          <div
            className={classes.MiniColorBox}
            style={{ backgroundColor: color.color }}
          />
        ))}
      </div>
      <div className={classes.PaletteInfo}>
        <h4>{paletteName}</h4>
        <span>{emoji}</span>
      </div>
    </div>
  );
};

export default PalettePreview;
