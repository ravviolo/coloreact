import { TEXT_CONTRAST } from "../../constants/textContast";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  ColorBox: {
    height: (props) => (props.isShadesPalette ? "50%" : "25%"),
    width: "20%",
    backgroundColor: (props) => props.color,
    position: "relative",
    ...TEXT_CONTRAST,
  },
  CenteredContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "1rem",
  },
  BottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ColorName: {
    letterSpacing: 1,
    paddingLeft: "0.5em",
    textTransform: "uppercase",
  },
  Button: {
    textTransform: "uppercase",
    textDecoration: "none",
    fontSize: "1rem",
    border: "none",
    padding: "0.4em 0.8em",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    cursor: "pointer",
    ...TEXT_CONTRAST,
  },
  CenteredButton: {
    padding: "0.6em 1.5em",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
    "$ColorBox:hover &": {
      opacity: 1,
    },
  },
  LinkButton: {
    opacity: 0.8,
    "$ColorBox:hover &": {
      opacity: 1,
    },
  },
});
