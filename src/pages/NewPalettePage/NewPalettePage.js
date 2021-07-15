import Nav from "../../components/Nav/CreatePaletteNav/Nav";
import DrawerComponent from "../../components/UI/Drawer/DrawerComponent";
import Palette from "../../components/Palette/NewPalette/Palette";

import { useStyles } from "./NewPalettePage.styles";

const NewPalettePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav />
      <DrawerComponent />
      <Palette />
    </div>
  );
};

export default NewPalettePage;
