import { makeStyles } from "@material-ui/core/styles";
import DRAWER_WIDTH from "../../../constants/Drawer";


export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  DrawerContent: {
    height: '100%',
    width: '90%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Title: {
    fontSize: '2.5rem',
  },
  ButtonContainer: {
    width: '100%',
    display: 'flex',
    margin: '1em 0',
    '& > *': {
      margin: '0 0.5em',
      flexGrow: 1
    }
  }
}));
