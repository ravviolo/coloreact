import { useContext } from "react";
import { Link } from "react-router-dom";
import PaletteContext from "../../context/PaletteContext";

const PaletteListPage = () => {
  const { palettes } = useContext(PaletteContext);
  return (
    <div>
      <h1>Coloreact</h1>

        {palettes.map((palette) => (
          <Link to={`/${palette.id}`}>{palette.paletteName}</Link>
        ))}

    </div>
  );
};

export default PaletteListPage;
