import {useUI} from "../../../../context/UIContext";
import {usePalette} from "../../../../context/PaletteContext";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { blue, red } from "@material-ui/core/colors";

const RestoreDialog = () => {
  const { openRestoreDialog, setOpenRestoreDialog } = useUI();
  const { restorePalettes } = usePalette();
  const handleClose = () => {
    setOpenRestoreDialog(false);
  };
  const handleResetPalette = () => {
    restorePalettes();
    setOpenRestoreDialog(false);
  };
  return (
    <Dialog open={openRestoreDialog} onClose={handleClose}>
      <DialogTitle>Restore Palettes?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This action will restore default palettes. Don't worry, you will not
          lose your custom palettes!
        </DialogContentText>
      </DialogContent>
      <List>
        <ListItem button onClick={handleResetPalette}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: blue[500] }}>
              <CheckIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Restore" />
        </ListItem>
        <ListItem button onClick={handleClose}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: red[500] }}>
              <CloseIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Cancel" />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default RestoreDialog;
