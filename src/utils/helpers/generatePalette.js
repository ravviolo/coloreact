// Generates palette which holds different lightness level of colors taken from input palette

import chroma from "chroma-js";

// Ligtness levels from darkest to lightest
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const getRange = (hexColor) => {
  const beginScale = chroma(hexColor).darken(1.4).hex();
  const endScale = chroma(hexColor).brighten(1.4).hex();

  return [beginScale, hexColor, endScale];
};

const getScale = (hexColor, numberOfColors) =>
  chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);

const generatePalette = (starterPalette) => {
  let newPalette = {
    ...starterPalette,
    colors: {},
  };
  levels.forEach((level) => (newPalette.colors[level] = []));

  starterPalette.colors.forEach((starterColor) => {
    let scale = getScale(starterColor.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${starterColor.name} ${levels[i]}`,
        id: starterColor.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css("rgb"),
        hsl: chroma(scale[i]).css("hsl"),
      });
    }
  });

  return newPalette;
};

export default generatePalette;
