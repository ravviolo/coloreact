import React, { useState } from "react";

// SB = Snackbar
// DR = Drawer

const UIContext = React.createContext({
  openSB: false,
  setOpenSB: () => {},
  openDR: false,
  setOpenDR: () => {},

});

export const UIContextProvider = ({ children }) => {
  const [openSB, setOpenSB] = useState(false);
  const [openDR, setOpenDR] = useState(false);
  const contextValue = {
    openSB,
    setOpenSB,
    openDR,
    setOpenDR
  };
  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  );
};

export default UIContext;
