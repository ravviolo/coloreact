import { useContext } from "react";
import chroma from "chroma-js";
import UIContext from "../../../context/UIContext";
import PaletteContext from "../../../context/PaletteContext";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import ColorPickerForm from "../../ColorPickerForm";

import { useStyles } from "./DrawerComponent.styles";

const DrawerComponent = () => {
  const { openDR, setOpenDR } = useContext(UIContext);
  const { newPalette, setNewPalette, setPickedColor } =
    useContext(PaletteContext);
  const classes = useStyles();

  const handleDrawerClose = () => setOpenDR(false);
  const handleClear = () => setNewPalette([]);
  const handleRandom = () => {
    const randomColor = chroma.random().hex();
    if (newPalette.some(({ color }) => color === randomColor)) {
      this.handleRandom();
    } else {
      setPickedColor(randomColor);
    }
  };

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
      <div className={classes.DrawerContent}>
        <Typography variant="h4" noWrap>
          Design Your Palette
        </Typography>
        <div className={classes.ButtonContainer}>
          <Button variant="contained" color="secondary" onClick={handleClear}>
            Clear Palette
          </Button>
          <Button variant="contained" color="primary" onClick={handleRandom}>
            Get Random
          </Button>
        </div>
        <ColorPickerForm />
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
