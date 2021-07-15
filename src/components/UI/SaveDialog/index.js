import { useContext, useEffect, useState } from "react";
import UIContext from "../../../context/UIContext";
import PaletteContext from "../../../context/PaletteContext";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const SaveDialog = () => {
  const { openSaveDialog, setOpenSaveDialog } = useContext(UIContext);
  const { palettes } = useContext(PaletteContext);
  const [enteredName, setEnteredName] = useState("");

  const handleClose = () => {
    setOpenSaveDialog(false);
  };
  const handleSubmit = () => {
    setOpenSaveDialog(false);
    //open emoji dialog
  };
  const handleInputChange = (e) => setEnteredName(e.target.value);

  useEffect(() => {
    ValidatorForm.addValidationRule("isNameUnique", () => {
      return palettes.every(
        ({ paletteName }) =>
          paletteName.toLowerCase() !== enteredName.toLowerCase()
      );
    });
  });

  return (
    <div>
      <Dialog
        open={openSaveDialog}
        onClose={handleClose}
        aria-labelledby="save-modal-title"
      >
        <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
          <DialogTitle id="save-modal-title">Choose a Palette Name</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You have chosen some lovely colors!
              <br />
              Time to give this palette a proper name. Make sure it's unique!
            </DialogContentText>
            <TextValidator
              autoFocus
              margin="dense"
              id="name"
              label="Palette Name"
              fullWidth
              value={enteredName}
              onChange={handleInputChange}
              validators={["required", "isNameUnique"]}
              errorMessages={[
                "Enter palette name",
                "Palette name already taken",
              ]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button color="primary" variant="contained" type="submit">
              Next
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
};
export default SaveDialog;
