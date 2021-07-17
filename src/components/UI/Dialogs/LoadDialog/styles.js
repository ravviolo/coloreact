import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  LoadPaletteList: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    columnGap: "5%",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
}));
