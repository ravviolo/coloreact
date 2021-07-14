import { useContext } from "react";
import PaletteContext from "../../context/PaletteContext";
import { useHistory } from "react-router";

import PalettePreview from "../../components/PalettePreview/PalettePreview";
import * as Styled from "./PaletteListPage.styles";

const PaletteListPage = () => {
  const { palettes } = useContext(PaletteContext);
  const history = useHistory();
  const handleCreatePalette = () => history.push("/create-palette");
  return (
    <Styled.PageContainer>
      <Styled.PageContent>
        <Styled.Header>
          <h1>Coloreact</h1>
          <span onClick={handleCreatePalette}>Create Palette</span>
          <span>Reset</span>
        </Styled.Header>
        <Styled.PaletteList>
          {palettes.map((palette) => (
            <PalettePreview {...palette} />
          ))}
        </Styled.PaletteList>
      </Styled.PageContent>
    </Styled.PageContainer>
  );
};

export default PaletteListPage;
