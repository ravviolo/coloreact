import React, { useState } from "react";
import initialPalettes from "../initialPalettes";
import generatePalette from "../helpers/colorHelper";

const PaletteContext = React.createContext({
  palettes: [],
  level: 500,
  format: "hex",
  setLevel: () => {},
  getPalette: () => {},
});

export const PaletteContextProvider = ({ children }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const getPalette = (paletteId) => {
    const filteredPalette = initialPalettes.find(
      (palette) => palette.id === paletteId
    );
    return generatePalette(filteredPalette);
  };
  const contextValue = {
    palettes: initialPalettes,
    level,
    setLevel,
    format,
    setFormat,
    getPalette,
  };
  return (
    <PaletteContext.Provider value={contextValue}>
      {children}
    </PaletteContext.Provider>
  );
};

export default PaletteContext;
