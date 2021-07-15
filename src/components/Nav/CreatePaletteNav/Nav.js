import { useContext } from "react";
import UIContext from "../../../context/UIContext";
import { useHistory } from "react-router";

import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import { useStyles } from "./Nav.styles";

const Nav = () => {
  const { openDR, setOpenDR, setOpenSaveDialog, setOpenLoadDialog } =
    useContext(UIContext);
  const history = useHistory();
  const classes = useStyles();

  const handleDrawerOpen = () => setOpenDR(true);
  const handleGoBack = () => history.goBack();
  const openSaveDialog = () => {
    setOpenSaveDialog(true);
  };
  const openLoadDialog = () => setOpenLoadDialog(true);

  return (
    <>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDR,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, openDR && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.ButtonContainer}>
            <div>
              <Button
                className={classes.Button}
                variant="contained"
                color="secondary"
                onClick={openSaveDialog}
              >
                Save Palette
              </Button>
              <Button
                className={classes.Button}
                variant="contained"
                color="primary"
                onClick={openLoadDialog}
              >
                Load Palette
              </Button>
            </div>
            <Button className={classes.Button} onClick={handleGoBack}>
              Back
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
