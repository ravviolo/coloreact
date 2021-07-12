import * as Styled from "./Footer.styles";

const Footer = ({paletteName, emoji}) => {
  return (
    <Styled.Footer>
      <Styled.PaletteName>{paletteName}</Styled.PaletteName>
      <span>{emoji}</span>
    </Styled.Footer>
  );
};

export default Footer;
