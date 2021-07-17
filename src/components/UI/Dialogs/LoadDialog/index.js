import { useContext, useEffect, useState } from "react";
import PaletteContext from "../../../../context/PaletteContext";
import UIContext from "../../../../context/UIContext";

import PalettePreview from "../../../PalettePreview/index";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useStyles } from "./styles";

const LoadDialog = () => {
  const { palettes, setNewPalette } = useContext(PaletteContext);
  const { openLoadDialog, setOpenLoadDialog } = useContext(UIContext);
  const [chosenPalette, setChosenPalette] = useState(null);
  const classes = useStyles();

  const handleClose = () => {
    setOpenLoadDialog(false);
  };

  const handleLoad = () => {
    setNewPalette(chosenPalette.colors);
    handleClose();
  };
  const handlePick = (id) => {
    const pickedPalette = palettes.find((palette) => palette.id === id);
    setChosenPalette(pickedPalette);
  };

  return (
    <div>
      <Dialog
        open={openLoadDialog}
        onClose={handleClose}
        aria-labelledby="load-modal-title"
      >
        <DialogTitle id="load-modal-title">
          Choose a Palette To Load
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Load one of existing palettes to edit them! Delete, add and
            rearrange colors to create a brand new palette!
          </DialogContentText>
          <div className={classes.LoadPaletteList}>
            {palettes.map((palette) => (
              <div className={classes.overlay}>
                <PalettePreview
                  {...palette}
                  className={classes.ModalPalettePreview}
                  goToPalette={() => handlePick(palette.id)}
                  notChosen={chosenPalette && palette.id !== chosenPalette.id}
                  showDelete={false}
                />
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleLoad}
            disabled={!chosenPalette}
          >
            Load
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default LoadDialog;
