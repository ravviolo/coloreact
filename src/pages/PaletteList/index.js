import { usePalette } from "../../context/PaletteContext";
import { useUI } from "../../context/UIContext";
import { useHistory } from "react-router";

import PalettePreview from "../../components/PalettePreview";
import DeleteDialog from "../../components/UI/Dialogs/DeleteDialog";
import RestoreDialog from "../../components/UI/Dialogs/RestoreDialog";
import { useStyles } from "./styles";

const PaletteList = () => {
  const { palettes } = usePalette();
  const { setOpenRestoreDialog } = useUI();

  const history = useHistory();
  const classes = useStyles();

  const handleCreatePalette = () => history.push("/create-palette");
  const handleOpenRestoreDialog = () => setOpenRestoreDialog(true);
  return (
    <div className={classes.PageContainer}>
      <div className={classes.PageContent}>
        <header className={classes.Header}>
          <h1 className={classes.Logo}>Coloreact</h1>
          <span onClick={handleCreatePalette}>Create Palette</span>
          <span onClick={handleOpenRestoreDialog}>Restore</span>
        </header>
        <div className={classes.PaletteList}>
          {palettes.map((palette) => (
            <PalettePreview
              {...palette}
              goToPalette={() => history.push(`/palette/${palette.id}`)}
              showDelete={true}
            />
          ))}
        </div>
      </div>
      <DeleteDialog />
      <RestoreDialog />
    </div>
  );
};

export default PaletteList;
