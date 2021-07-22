import { useHistory } from "react-router";
import { usePalette } from "../../context/PaletteContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PalettePreview from "../PalettePreview";
import { useStyles } from "./styles";

const AllPalettes = () => {
  const classes = useStyles();
  const history = useHistory();
  const { palettes } = usePalette();
  return (
    <TransitionGroup className={classes.PaletteList}>
      {palettes.map((palette) => (
        <CSSTransition key={palette.id} timeout={500} classNames="fade">
          <PalettePreview
            {...palette}
            goToPalette={() => history.push(`/palette/${palette.id}`)}
            showDelete={true}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default AllPalettes;
