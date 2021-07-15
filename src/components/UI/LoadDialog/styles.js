import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  LoadPaletteList: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "5%",
  },
});
