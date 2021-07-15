import chroma from "chroma-js";

export const TEXT_CONTRAST = {
  color: (props) =>
      chroma.contrast(props.color, "white") < 4.5
        ? "rgba(0, 0, 0, 0.6)"
        : "rgba(255, 255, 255, 0.8)"
}