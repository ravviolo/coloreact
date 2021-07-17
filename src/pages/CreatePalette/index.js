import Nav from "../../components/Nav/CreatePaletteNav";
import DrawerComponent from "../../components/UI/Drawer";
import Palette from "../../components/Palette/CreatePalette";
import SaveDialog from "../../components/UI/Dialogs/SaveDialog";
import LoadDialog from "../../components/UI/Dialogs/LoadDialog";
import SnackbarDrag from '../../components/UI/Snackbars/SnackbarDrag'

import { useStyles } from "./styles";

const CreatePalette = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav />
      <DrawerComponent />
      <Palette />
      <SaveDialog />
      <LoadDialog />
      <SnackbarDrag/>
    </div>
  );
};

export default CreatePalette;
