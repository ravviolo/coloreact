import React, { useState } from "react";
import initialPalettes from "../initialPalettes";
import generatePalette from "../helpers/colorHelper";

const PaletteContext = React.createContext({
  palettes: [],
  level: 500,
  format: "hex",
  setLevel: () => {},
  getPalette: () => {},
  getShades: () => {},
  newPalette: [],
  setNewPalette: () => {}, 
});

export const PaletteContextProvider = ({ children }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const [newPalette, setNewPalette] = useState([
    { name: "pink", color: "pink" },
    { name: "blue", color: "blue" },
  ]);

  const getPalette = (paletteId) => {
    const filteredPalette = initialPalettes.find(
      (palette) => palette.id === paletteId
    );
    return generatePalette(filteredPalette);
  };

  const getShades = (palette, targetColorId) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === targetColorId)
      );
    }
    return shades;
  };

  const contextValue = {
    palettes: initialPalettes,
    level,
    setLevel,
    format,
    setFormat,
    getPalette,
    getShades,
    newPalette,
    setNewPalette
  };
  return (
    <PaletteContext.Provider value={contextValue}>
      {children}
    </PaletteContext.Provider>
  );
};

export default PaletteContext;
