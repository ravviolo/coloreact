import { useHistory } from "react-router-dom";
import * as Styled from "./PalettePreview.styles";

const PalettePreview = ({ id, paletteName, emoji, colors }) => {
  const history = useHistory();
  const handleRedirect = () => history.push(`/${id}`);
  return (
    <Styled.Card onClick={handleRedirect}>
      <Styled.ColorContainer>
        {colors.map((color) => (
          <Styled.MiniColorBox bgColor={color} />
        ))}
      </Styled.ColorContainer>
      <Styled.PaletteInfo>
        <h4>{paletteName}</h4>
        <span>{emoji}</span>
      </Styled.PaletteInfo>
    </Styled.Card>
  );
};

export default PalettePreview;
