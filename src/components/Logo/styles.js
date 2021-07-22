import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  "@keyframes rainbow": {
    "0%": { backgroundPosition: "0% 82%" },
    "50%": { backgroundPosition: "100% 19%" },
    "100%": { backgroundPosition: "0% 82%" },
  },
  Logo: {
    cursor: "pointer",
    textTransform: "lowercase",
    letterSpacing: 5,

    "&:hover": {
      animationName: "$rainbow",
      animationDuration: "6s",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease",
    },
  },
  Main: {
    fontSize: "2.5rem",
    color: "white",

    "@media (max-width: 450px)": {
      marginBottom: "2rem",
    },

    "&:hover": {
      background:
        "linear-gradient(124deg,#1ddde8,#1d64e8,#2b1de8, #641de8,#dd00f3,#b003d3,#cf07c5,#f300df,#ff2400,#e81d1d,#e8b71d,#e3e81d,#1de840)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      backgroundSize: "400% 100%",
    },
  },
  Secondary: {
    fontSize: "1.5rem",
    fontWeight: 500,
    background:
      "linear-gradient(124deg,#1ddde8,#1d64e8,#2b1de8, #641de8,#dd00f3,#b003d3,#cf07c5,#f300df,#ff2400,#e81d1d,#e8b71d,#e3e81d,#1de840)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundSize: "400% 100%",
  },
  AddMargin: {
    marginRight: "auto",
    "@media (max-width: 450px)": {
      display: "block",
      width: "100%",
    },
  },
});
