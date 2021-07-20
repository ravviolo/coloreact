import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  PaletteList: {
    marginTop: "2em",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "3em",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
}));
