import React, { useState } from "react";

// SB = Snackbar

const UIContext = React.createContext({
  openSB: false,
  setIsOpenSB: () => {},
});

export const UIContextProvider = ({ children }) => {
  const [openSB, setIsOpenSB] = useState(false);
  const contextValue = {
    openSB,
    setIsOpenSB,
  };
  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  );
};

export default UIContext;
