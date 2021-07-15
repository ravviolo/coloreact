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
});

export const UIContextProvider = ({ children }) => {
  const [openSB, setOpenSB] = useState(false);
  const [openDR, setOpenDR] = useState(false);
  const [openSaveDialog, setOpenSaveDialog] = useState(false);
  const [openLoadDialog, setOpenLoadDialog] = useState(false);

  const contextValue = {
    openSB,
    setOpenSB,
    openDR,
    setOpenDR,
    openSaveDialog,
    setOpenSaveDialog,
    openLoadDialog,
    setOpenLoadDialog,
  };
  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  );
};

export default UIContext;
