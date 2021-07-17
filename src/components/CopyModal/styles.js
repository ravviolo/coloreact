import { TEXT_CONTRAST } from "../../utils/helpers/textContrast";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  Overlay: {
    width: "100%",
    height: "100%",
    zIndex: 666,
    position: "absolute",
    transform: (props) => (props.copied ? "scale(50)" : "scale(0)"),
    backgroundColor: (props) => props.color,
    transition: "transform 0.5s ease-in-out",
  },
  Content: {
    position: "fixed",
    inset: 0,
    zIndex: 667,
    opacity: (props) => (props.copied ? 1 : 0),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transform: (props) => (props.copied ? "scale(1)" : "scale(0)"),
    transition: "all 0.2s ease-in-out",
    transitionDelay: "0.2s",
    color: "white",

    "& h1": {
      width: "100%",
      textAlign: "center",
      textTransform: "uppercase",
      fontSize: "4.5rem",
      textShadow: "1px 1px 2px rgb(73, 73, 73)",
      padding: "0.75em 0",
      background: "rgba(255, 255, 255, 0.3)",
    },

    "& p": {
      fontSize: "1.2rem",
      letterSpacing: 1,
      fontWeight: 100,
      marginTop: "1.2em",
      ...TEXT_CONTRAST,
    },
  },
});
