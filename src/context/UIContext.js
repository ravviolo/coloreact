import React, { useState } from "react";

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
  const [openSB, setOpenSB] = useState(false);
  const [openDR, setOpenDR] = useState(false);
  const [openSaveDialog, setOpenSaveDialog] = useState(false);
  const [openLoadDialog, setOpenLoadDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openRestoreDialog, setOpenRestoreDialog] = useState(false);

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
