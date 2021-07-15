import Nav from "../../components/Nav/CreatePaletteNav/Nav";
import DrawerComponent from "../../components/UI/Drawer/DrawerComponent";
import Palette from "../../components/Palette/NewPalette/Palette";
import SaveDialog from '../../components/UI/SaveDialog'
import LoadDialog from "../../components/UI/LoadDialog";

import { useStyles } from "./NewPalettePage.styles";

const NewPalettePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav />
      <DrawerComponent />
      <Palette />
      <SaveDialog/>
      <LoadDialog/>
    </div>
  );
};

export default NewPalettePage;
