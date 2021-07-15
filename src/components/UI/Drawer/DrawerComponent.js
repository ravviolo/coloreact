import { useContext, useState } from "react";
import UIContext from "../../../context/UIContext";
import PaletteContext from "../../../context/PaletteContext";
import { ChromePicker } from "react-color";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import { useStyles } from "./DrawerComponent.styles";

const DrawerComponent = () => {
  const { openDR, setOpenDR } = useContext(UIContext);
  const [pickedColor, setPickedColor] = useState("teal");
  const { setNewPalette } = useContext(PaletteContext);
  const classes = useStyles();

  const handleDrawerClose = () => setOpenDR(false);
  const handlePickedColorUpdate = (currentColor) =>
    setPickedColor(currentColor.hex);

  const handleAddColor = () => {
    const newColor = {
      name: "test",
      color: pickedColor,
    };

    setNewPalette((state) => [...state, newColor]);
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

      {/* /////////////////////////////////////////////////////////////////////////////////// */}
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
      <ChromePicker
        color={pickedColor}
        onChange={handlePickedColorUpdate}
        disableAlpha={true}
      />
      <Button
        variant="contained"
        style={{ backgroundColor: pickedColor }}
        onClick={handleAddColor}
      >
        Add Color
      </Button>
    </Drawer>
  );
};

export default DrawerComponent;
