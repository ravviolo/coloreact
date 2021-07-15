import clsx from "clsx";
import { useStyles } from "./PalettePreview.styles";

const PalettePreview = ({ paletteName, emoji, colors, goToPalette, notChosen }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.Card, notChosen && classes.Overlay)} onClick={goToPalette}>
      <div className={classes.ColorContainer}>
        {colors.map((color) => (
          <div
            className={classes.MiniColorBox}
            style={{ backgroundColor: color.color }}
          />
        ))}
      </div>
      <div className={classes.PaletteInfo}>
        <h4>{paletteName}</h4>
        <span>{emoji}</span>
      </div>
    </div>
  );
};

export default PalettePreview;
