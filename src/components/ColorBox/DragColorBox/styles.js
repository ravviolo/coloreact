import { makeStyles } from "@material-ui/core/styles";
import { TEXT_CONTRAST } from "../../../constants/textContast";

export const useStyles = makeStyles({
  ColorBox: {
    width: "20%",
    height: "25%",
    position: "relative",
    cursor: "pointer",
    backgroundColor: (props) => props.color,
    "&:hover": {
      "& $DeleteIcon": {
        opacity: 1,
      },
    },
  },
  BottomContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5em 1em",
    ...TEXT_CONTRAST,
    textTransform: "uppercase",
  },
  DeleteIcon: {
    opacity: 0,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "rotate(20deg)",
    },
  },
});
