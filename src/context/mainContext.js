import React, { useState } from "react";
import initialPalettes from "../initialPalettes";
import generatePalette from "../helpers/colorHelper";

const PaletteContext = React.createContext({
  palette: {},
  level: 500,
  setLevel: () => {},
});

export const PaletteContextProvider = ({ children }) => {
  const [level, setLevel] = useState(500);
  const contextValue = {
    level,
    setLevel,
    palette: generatePalette(initialPalettes[1]),
  };
  return (
    <PaletteContext.Provider value={contextValue}>
      {children}
    </PaletteContext.Provider>
  );
};

export default PaletteContext;
