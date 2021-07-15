import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  ColorBox: {
    width: "20%",
    height: "25%",
    position: "relative",
    cursor: "pointer",
    backgroundColor: (props) => props.color,
  },
  BottomContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
