import { useHistory } from "react-router-dom";
import * as Styled from "./ColorBox.styles";

const ColorBoxLink = ({ isShadesPalette }) => {
  const history = useHistory();
  const handleGoBack = () => history.goBack();
  return (
    <Styled.ColorBox onClick={handleGoBack} bgColor="black" isShadesPalette={isShadesPalette}>
      <Styled.CenteredContainer>
        <Styled.LinkButton bgColor="black">back</Styled.LinkButton>
      </Styled.CenteredContainer>
    </Styled.ColorBox>
  );
};

export default ColorBoxLink;
