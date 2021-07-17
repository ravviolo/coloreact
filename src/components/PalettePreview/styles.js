import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  Card: {
    margin: "1rem 0",
    height: "25vh",
    backgroundColor: "white",
    border: "1px solid grey",
    borderRadius: 5,
    padding: "0.5em",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    position: "relative",

    "&:hover": {
      transform: "scale(1.1)",
      "& $DeleteIcon": {
        opacity: 1,
      },
    },
  },
  ColorContainer: {
    height: "80%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    borderRadius: 5,
    alignContent: 'flex-start'
  },
  MiniColorBox: {
    height: "25%",
    width: "20%",
  },
  PaletteInfo: {
    height: "20%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "0.25em",
    fontSize: "1rem",

    "& span": {
      fontSize: "1.3rem",
    },
  },
  Overlay: {
    opacity: "0.6",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  DeleteIcon: {
    display: "grid",
    placeItems: "center",
    zIndex: 10,
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: "1.5rem",
    padding: "0.2em 0.2em",
    borderRadius: 5,
    color: "white",
    backgroundColor: "#e61717",
    opacity: 0,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      "& > *": {
        transform: "rotate(20deg)",
        transition: "all 0.3s ease-in-out",
      },
    },
  },

});
