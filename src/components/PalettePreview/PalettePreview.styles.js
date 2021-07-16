// import styled from "styled-components";
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

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  ColorContainer: {
    height: "80%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    borderRadius: 5,
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
});
