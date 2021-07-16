import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  "@global": {
    "@keyframes rainbow": {
      "0%": { backgroundPosition: "0% 82%" },
      "50%": { backgroundPosition: "100% 19%" },
      "100%": { backgroundPosition: "0% 82%" },
    },
  },
  Nav: {
    height: "6vh",
    maxWidth: '100vw',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
      marginBottom: '2rem'
    },
  },
  SliderContainer: {
    height: "100%",
    width: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 auto",
    position: "relative",

    "& span": {
      position: "absolute",
      left: "-20%",
      fontSize: "1rem",
      opacity: 0,
      transition: "opacity 0.3s ease-in-out",
      [theme.breakpoints.down("md")]: {
        fontSize: ".8rem",
      },
    },

    "&:hover": {
      "& span": {
        opacity: 1,
        [theme.breakpoints.down("xs")]: {
          opacity: 0,
        },
      },
    },

    [theme.breakpoints.down("xs")]: {
      order: 2,
      width: "80vw",
      alignItems:'flex-start'
    },
  },
  // Overwrite Slider Component styles
  "& .rc-slider": {
    width: "70%",
  },
  "& .rc-slider-track": {
    background: "transparent",
  },
  "& .rc-slider-rail": {
    height: 8,
  },
  "& .rc-slider-handle": {
    top: 6,
    height: "1.5rem",
    width: "1.5rem",
    borderColor: "#66a3e9",

    "&:focus, &:active, &:hover": {
      borderColor: "#94c0f3",
    },
  },
  // ---------------------------------
  LogoContainer: {
    width: "12%",
    height: "100%",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    padding: "0 2em",

    "&:hover": {
      "& $Logo": {
        animationName: "$rainbow",
        animationDuration: "6s",
        animationIterationCount: "infinite",
        animationTimingFunction: "ease",
      },
    },
  },

  Logo: {
    fontSize: "1.5rem",
    letterSpacing: 5,
    fontWeight: 500,
    background:
      "linear-gradient(124deg,#1ddde8,#1d64e8,#2b1de8, #641de8,#dd00f3,#b003d3,#cf07c5,#f300df,#ff2400,#e81d1d,#e8b71d,#e3e81d,#1de840)",
    backgroundClip: "text",
    color: "transparent",
    backgroundSize: "400% 100%",
  },

  SelectContainer: {
    marginRight: "1em",
  },
}));
