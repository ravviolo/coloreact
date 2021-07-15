import { useContext} from "react";
import UIContext from "../../../context/UIContext";
import PaletteContext from "../../../context/PaletteContext";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import ColorPickerForm from '../../ColorPickerForm'

import { useStyles } from "./DrawerComponent.styles";

const DrawerComponent = () => {
  const { openDR, setOpenDR } = useContext(UIContext);
  const classes = useStyles();

  const handleDrawerClose = () => setOpenDR(false);
 
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={openDR}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <Typography variant="h4" noWrap>
        Design Your Palette
      </Typography>
      <div>
        <Button variant="contained" color="secondary">
          Clear Palette
        </Button>
        <Button variant="contained" color="primary">
          Get Random
        </Button>
      </div>
      <ColorPickerForm/>
    </Drawer>
  );
};

export default DrawerComponent;
