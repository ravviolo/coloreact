import { useContext } from "react";
import PaletteContext from "../../context/PaletteContext";
import UIContext from "../../context/UIContext";
import { useHistory } from "react-router";

import PalettePreview from "../../components/PalettePreview/PalettePreview";
import DeleteDialog from "../../components/UI/DeleteDialog";
import ResetDialog from "../../components/UI/ResetDialog";
import { useStyles } from "./PaletteListPage.styles";

const PaletteListPage = () => {
  const { palettes } = useContext(PaletteContext);
  const { setOpenRestoreDialog } = useContext(UIContext);

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
      <ResetDialog />
    </div>
  );
};

export default PaletteListPage;
