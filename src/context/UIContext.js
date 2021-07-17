import React, {useContext} from "react";
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
  const [openSBFormat, setOpenSBFormat] = useToggle();
  const [openSBDrag, setOpenSBDrag] = useToggle(true);
  const [openDR, setOpenDR] = useToggle();
  const [openSaveDialog, setOpenSaveDialog] = useToggle();
  const [openLoadDialog, setOpenLoadDialog] = useToggle();
  const [openDeleteDialog, setOpenDeleteDialog] = useToggle();
  const [openRestoreDialog, setOpenRestoreDialog] = useToggle();

  const contextValue = {
    openSBFormat,
    setOpenSBFormat,
    openSBDrag,
    setOpenSBDrag,
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

export const useUI = () => useContext(UIContext) 

// export default UIContext;
