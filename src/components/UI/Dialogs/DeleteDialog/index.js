import {useUI} from "../../../../context/UIContext";
import {usePalette} from "../../../../context/PaletteContext";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { blue, red } from "@material-ui/core/colors";

const DeleteDialog = () => {
  const { openDeleteDialog, setOpenDeleteDialog } = useUI();
  const { paletteId, deletePalette } = usePalette();
  const handleClose = () => {
    setOpenDeleteDialog(false);
  };
  const handleDeletePalette = () => {
    deletePalette(paletteId);
    handleClose();
  };
  return (
    <Dialog open={openDeleteDialog} onClose={handleClose}>
      <DialogTitle>Delete This Palette?</DialogTitle>
      <List>
        <ListItem button onClick={handleDeletePalette}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: blue[500] }}>
              <CheckIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Delete" />
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

export default DeleteDialog;
