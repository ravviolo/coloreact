import { useHistory } from "react-router-dom";
import { useStyles } from "./PalettePreview.styles";

const PalettePreview = ({ id, paletteName, emoji, colors }) => {
  const history = useHistory();
  const classes = useStyles();
  const handleRedirect = () => history.push(`/palette/${id}`);
  return (
    <div className={classes.Card} onClick={handleRedirect}>
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
