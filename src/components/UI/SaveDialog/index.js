import { useContext } from "react";
import UIContext from "../../../context/UIContext";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const SaveDialog = () => {
  const {openSaveDialog, setOpenSaveDialog} = useContext(UIContext)

  const handleClose = () => {
    setOpenSaveDialog(false);
  };
  const handleNext = () => {
    setOpenSaveDialog(false);
  //open emoji dialog
  }

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog
        open={openSaveDialog}
        onClose={handleClose}
        aria-labelledby="save-modal-title"
      >
        <DialogTitle id="save-modal-title">Choose a Palette Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have chosen some lovely colors!
            <br />
            Time to give this palette a proper name. Make sure it's unique!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Palette Name"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleNext} color="primary">
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default SaveDialog;
