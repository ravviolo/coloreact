import { makeStyles } from "@material-ui/core/styles";
import { TEXT_CONTRAST } from "../../../constants/textContast";

export const useStyles = makeStyles((theme) => ({
  ColorBox: {
    width: "20%",
    height: "25%",
    position: "relative",
    cursor: "pointer",
    backgroundColor: (props) => props.color,
    "&:hover": {
      "& $DeleteIcon": {
        opacity: 1,
      },
    },
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
  BottomContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5em 1em",
    ...TEXT_CONTRAST,
    textTransform: "uppercase",
    fontSize: "0.8rem",
    letterSpacing: 2,
  },
  DeleteIcon: {
    opacity: 0,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "rotate(20deg)",
    },
  },
}));
