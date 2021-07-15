import { useHistory } from "react-router-dom";
import { useStyles } from "./ColorBox.styles";
import clsx from "clsx";

const ColorBoxLink = ({ isShadesPalette }) => {
  const classes = useStyles({ color: "black", isShadesPalette });
  const history = useHistory();

  const handleGoBack = () => history.goBack();

  return (
    <div className={classes.ColorBox} onClick={handleGoBack}>
      <div className={classes.CenteredContainer}>
        <button
          className={clsx(
            classes.LinkButton,
            classes.Button,
            classes.CenteredButton
          )}
        >
          back
        </button>
      </div>
    </div>
  );
};

export default ColorBoxLink;
