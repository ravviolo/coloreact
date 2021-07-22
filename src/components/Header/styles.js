import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
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
});
