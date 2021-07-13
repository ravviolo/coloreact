import { useContext } from "react";
import PaletteContext from "../../context/PaletteContext";

import PalettePreview from "../../components/PalettePreview/PalettePreview";

const PaletteListPage = () => {
  const { palettes } = useContext(PaletteContext);
  return (
    <div>
      <h1>Coloreact</h1>

      {palettes.map((palette) => (
        <PalettePreview {...palette} />
      ))}
    </div>
  );
};

export default PaletteListPage;
