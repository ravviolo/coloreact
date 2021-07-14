import chroma from "chroma-js";

export const TEXT_CONTRAST = (props) =>
  chroma.contrast(props.bgColor, "white") < 4.5
    ? "rgba(0, 0, 0, 0.6)"
    : "rgba(255, 255, 255, 0.8)" ;

