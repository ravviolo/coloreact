import { makeStyles } from "@material-ui/core/styles";
import DRAWER_WIDTH from "../../../utils/constants/drawerWidth";

const drawerWidth = DRAWER_WIDTH;

export const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  ColorsContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    "@media (max-width: 389px)": {
      marginTop: "2.3rem",
    },
  },
}));
