import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import UIContext from "../../../../context/UIContext";
import PaletteContext from "../../../../context/PaletteContext";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const SaveDialog = () => {
  const { openSaveDialog, setOpenSaveDialog } = useContext(UIContext);
  const [openEmoji, setOpenEmoji] = useState(false);
  const { palettes, newPalette, setPalettes, resetNewPalette } =
    useContext(PaletteContext);
  const [enteredName, setEnteredName] = useState("");
  const [emoji, setEmoji] = useState(null);
  const history = useHistory();

  const handleClose = () => {
    setOpenSaveDialog(false);
  };
  const handleSubmit = () => {
    setOpenSaveDialog(false);
    setOpenEmoji(true);
  };

  const closeEmoji = () => setOpenEmoji(false);
  const handleInputChange = (e) => setEnteredName(e.target.value);
  const handleSave = () => {
    const createdPalette = {
      paletteName: enteredName,
      id: enteredName.toLowerCase().replace(/\s/g, "-"),
      emoji: emoji.native,
      colors: newPalette,
    };
    setPalettes((state) => [...state, createdPalette]);
    closeEmoji();
    resetNewPalette();
    history.replace("/");
  };

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
        aria-labelledby="save-modal-palette-name-title"
      >
        <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
          <DialogTitle id="save-modal-palette-name-title">
            Choose a Palette Name
          </DialogTitle>
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
      <Dialog
        open={openEmoji}
        onClose={closeEmoji}
        aria-labelledby="save-modal-emoji-title"
      >
        <DialogTitle id="save-modal-emoji-title">Choose an Emoji</DialogTitle>
        <DialogContent>
          <Picker
            title={emoji ? emoji["short_names"][0] : "Pick your emoji!"}
            emoji={emoji ? emoji.id : "point_up"}
            onSelect={setEmoji}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEmoji} color="primary">
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleSave}
            disabled={!emoji}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default SaveDialog;
