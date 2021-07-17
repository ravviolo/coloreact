import { useHistory } from "react-router";
import { usePalette } from "../../context/PaletteContext";
import PalettePreview from "../PalettePreview";
import { useStyles } from "./styles";

const AllPalettes = () => {
  const classes = useStyles();
  const history = useHistory();
  const { palettes } = usePalette();
  return (
    <div className={classes.PaletteList}>
      {palettes.map((palette) => (
        <PalettePreview
          {...palette}
          goToPalette={() => history.push(`/palette/${palette.id}`)}
          showDelete={true}
        />
      ))}
    </div>
  );
};

export default AllPalettes;
