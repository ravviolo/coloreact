import { TEXT_CONTRAST } from "../../constants/textContast";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  ColorBox: {
    height: (props) => (props.isShadesPalette ? "50%" : "25%"),
    width: "20%",
    backgroundColor: (props) => props.color,
    position: "relative",
    cursor: "pointer",
    fontSize: "0.8rem",
    ...TEXT_CONTRAST,
    [theme.breakpoints.down("md")]: {
      width: "25%",
      height: (props) => (props.isShadesPalette ? "33.3333%" : "20%"),
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      height: (props) => (props.isShadesPalette ? "20%" : "10%"),
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: (props) => (props.isShadesPalette ? "10%" : "5%"),
    },
  },
  CenteredContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
    letterSpacing: 2,
    paddingLeft: "0.5em",
    textTransform: "uppercase",
  },
  Button: {
    textTransform: "uppercase",
    textDecoration: "none",
    fontSize: "0.8rem",
    border: "none",
    padding: "0.5em 1em",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    cursor: "pointer",
    ...TEXT_CONTRAST,
  },
  CenteredButton: {
    padding: ".8em 2em",
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
}));
