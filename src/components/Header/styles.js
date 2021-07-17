import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  Header: {
    paddingTop: "2em",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    flexWrap: "wrap",

    "& span": {
      fontSize: "1.2rem",
      fontWeight: 500,
      cursor: "pointer",
      position: "relative",
      backgroundColor: "#1f17aa",

      "&:after": {
        content: "''",
        position: "absolute",
        display: "inline-block",
        bottom: "-5px",
        left: 0,
        width: 0,
        height: 1,
        backgroundColor: "white",
        transition: "width 0.3s ease-in-out",
      },

      "&:hover::after": {
        width: "100%",
      },
    },

    "& span + span": {
      marginLeft: "2em",
    },
  },
  Logo: {
    fontSize: "2.5rem",
    marginRight: "auto",
    textTransform: "lowercase",
    letterSpacing: 5,
    "@media (max-width: 450px)": {
      marginRight: "100%",
      marginBottom: "2rem",
    },

    "&:hover": {
      cursor: "pointer",
      background:
        "linear-gradient(124deg,#1ddde8,#1d64e8,#2b1de8, #641de8,#dd00f3,#b003d3,#cf07c5,#f300df,#ff2400,#e81d1d,#e8b71d,#e3e81d,#1de840)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      backgroundSize: "400% 100%",
      animationName: "$rainbow",
      animationDuration: "6s",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease",
    },
  },
}));
