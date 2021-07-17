import {useUI} from "../../../context/UIContext";
import {usePalette} from "../../../context/PaletteContext";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const SnackbarFormat = () => {
  const { openSBFormat, setOpenSBFormat } = useUI();
  const { format } = usePalette();
  const handleClose = () => setOpenSBFormat(false);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openSBFormat}
        autoHideDuration={3000}
        onClose={handleClose}
        message={
          <span id="message-id">
            {`Format changed to ${format.toUpperCase()}`}
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

export default SnackbarFormat;
