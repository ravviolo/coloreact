import { useContext } from "react";
import UIContextProvider from "../../../context/UIContext";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const SnackbarDrag = () => {
  const { openSBDrag, setOpenSBDrag } = useContext(UIContextProvider);
  const handleClose = () => setOpenSBDrag(false);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={openSBDrag}
        autoHideDuration={3000}
        onClose={handleClose}
        message={
          <span id="message-id">
            Drag and drop color boxes to reorder colors!
          </span>
        }
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </div>
  );
};

export default SnackbarDrag;
