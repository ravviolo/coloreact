import ColorBox from "../ColorBox/ColorBox";

const Palette = ({ colors }) => {
  const colorBoxes = colors.map((color) => <ColorBox {...color} />);
  return <section>{colorBoxes}</section>;
};

export default Palette;
