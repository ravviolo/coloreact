import ColorBox from "../ColorBox/ColorBox";

const Palette = ({ colors }) => {
  const colorBoxes = colors.map((color) => <ColorBox {...color}/>);
  return (
    <div>
      <h1>Single Palette</h1>
      {colorBoxes}
    </div>
  );
};

export default Palette;
