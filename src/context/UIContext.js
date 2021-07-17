import React from "react";
import { useToggle } from "../hooks/useToggle";

// SB = Snackbar
// DR = Drawer

const UIContext = React.createContext({
  openSB: false,
  setOpenSB: () => {},
  openDR: false,
  setOpenDR: () => {},
  openSaveDialog: false,
  setOpenSaveDialog: () => {},
  openLoadDialog: false,
  setOpenLoadDialog: () => {},
  openDeleteDialog: false,
  setOpenDeleteDialog: () => {}
});

export const UIContextProvider = ({ children }) => {
  const [openSB, setOpenSB] = useToggle(false);
  const [openDR, setOpenDR] = useToggle(false);
  const [openSaveDialog, setOpenSaveDialog] = useToggle(false);
  const [openLoadDialog, setOpenLoadDialog] = useToggle(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useToggle(false);
  const [openRestoreDialog, setOpenRestoreDialog] = useToggle(false);

  const contextValue = {
    openSB,
    setOpenSB,
    openDR,
    setOpenDR,
    openSaveDialog,
    setOpenSaveDialog,
    openLoadDialog,
    setOpenLoadDialog,
    openDeleteDialog,
    setOpenDeleteDialog,
    openRestoreDialog,
    setOpenRestoreDialog
  };
  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  );
};

export default UIContext;
