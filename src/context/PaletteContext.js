import React, { useState } from "react";
import initialPalettes from "../initialPalettes";
import generatePalette from "../helpers/colorHelper";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const PaletteContext = React.createContext({
  palettes: [],
  level: 500,
  format: "hex",
  setLevel: () => {},
  getPalette: () => {},
  getShades: () => {},
  newPalette: [],
  setNewPalette: () => {},
  pickedColor: "teal",
  setPickedColor: () => {},
});

export const PaletteContextProvider = ({ children }) => {
  const [palettes, setPalettes] = useLocalStorageState(
    "palettes",
    initialPalettes
  );
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const [newPalette, setNewPalette] = useState(initialPalettes[0].colors);
  const [paletteId, setPaletteId] = useState(null);
  const [pickedColor, setPickedColor] = useState("teal");

  const getPalette = (paletteId) => {
    const filteredPalette = palettes.find(
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

  const resetNewPalette = () => setNewPalette(initialPalettes[0].colors);
  const deletePalette = (id) => {
    setPalettes(palettes.filter((palette) => palette.id !== id));
  };
  const restorePalettes = () => {
    const customPalettes = palettes.filter((savedPalette) =>
      initialPalettes.every(
        (initialPalette) => initialPalette.id !== savedPalette.id
      )
    );
    const restoredPalettes = [...customPalettes, ...initialPalettes];
    setPalettes(restoredPalettes);
  };

  const contextValue = {
    palettes,
    setPalettes,
    level,
    setLevel,
    format,
    setFormat,
    getPalette,
    getShades,
    newPalette,
    setNewPalette,
    pickedColor,
    setPickedColor,
    resetNewPalette,
    deletePalette,
    paletteId,
    setPaletteId,
    restorePalettes,
  };
  return (
    <PaletteContext.Provider value={contextValue}>
      {children}
    </PaletteContext.Provider>
  );
};

export default PaletteContext;
