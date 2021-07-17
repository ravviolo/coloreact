import clsx from "clsx";
import { useContext } from "react";
import UIContext from "../../context/UIContext";
import PaletteContext from "../../context/PaletteContext";
import { useStyles } from "./PalettePreview.styles";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DeleteDialog from "../../components/UI/DeleteDialog";

const PalettePreview = ({
  paletteName,
  emoji,
  colors,
  id,
  goToPalette,
  notChosen,
  showDelete,
}) => {
  const { setOpenDeleteDialog } = useContext(UIContext);
  const { setPaletteId } = useContext(PaletteContext);
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
