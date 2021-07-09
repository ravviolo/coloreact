import Palette from "../components/Palette/Palette";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import initialPalettes from '../initialPalettes'

const PalettePage = () => {
  return (
    <>
      <Nav />
      <Palette {...initialPalettes[4]}/>
      <Footer />
    </>
  );
};

export default PalettePage;
