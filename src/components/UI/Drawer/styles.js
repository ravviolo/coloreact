import { makeStyles } from "@material-ui/core/styles";
import DRAWER_WIDTH from "../../../utils/constants/drawerWidth";

const draweWidth = DRAWER_WIDTH;
export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: draweWidth,
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  DrawerTitle: {
    fontSize: "2.5rem",
  },
  DrawerContent: {
    height: "100vh",
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonContainer: {
    width: "100%",
    display: "flex",
    margin: "1em 0",
    "& > *": {
      margin: "0 0.5em",
      flexGrow: 1,
    },
  },
}));
