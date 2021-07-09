import ColorBox from "../ColorBox/ColorBox";

import * as Styled from "./Palette.styles";
const Palette = ({ colors }) => {
  const colorBoxes = colors.map((color) => <ColorBox {...color} />);
  return <Styled.Palette>{colorBoxes}</Styled.Palette>;
};

export default Palette;
