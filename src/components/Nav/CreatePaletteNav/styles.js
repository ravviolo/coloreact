import { makeStyles } from "@material-ui/core/styles";
import DRAWER_WIDTH from "../../../utils/constants/drawerWidth";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  ButtonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  Button: {
    margin: "0.5em 1em 0.5em 0",
  },
}));
