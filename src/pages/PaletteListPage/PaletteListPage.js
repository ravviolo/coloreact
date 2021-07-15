import { useContext } from "react";
import PaletteContext from "../../context/PaletteContext";
import { useHistory } from "react-router";

import PalettePreview from "../../components/PalettePreview/PalettePreview";
import { useStyles } from "./PaletteListPage.styles";

const PaletteListPage = () => {
  const { palettes } = useContext(PaletteContext);
  const history = useHistory();
  const classes = useStyles();

  const handleCreatePalette = () => history.push("/create-palette");
  return (
    <div className={classes.PageContainer}>
      <div className={classes.PageContent}>
        <header className={classes.Header}>
          <h1 className={classes.Logo}>Coloreact</h1>
          <span onClick={handleCreatePalette}>Create Palette</span>
          <span>Reset</span>
        </header>
        <div className={classes.PaletteList}>
          {palettes.map((palette) => (
            <PalettePreview
              {...palette}
              goToPalette={() => history.push(`/palette/${palette.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaletteListPage;
