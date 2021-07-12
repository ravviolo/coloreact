import * as Styled from "./ColorBox.styles";

const ColorBox = ({ color, name }) => {
  return (
    <Styled.ColorBox bgColor={color}>
      <Styled.CopyContainer>
        <Styled.CopyButton>COPY</Styled.CopyButton>
      </Styled.CopyContainer>
      <Styled.InfoContainer>
        <span className="colorbox__name">{name}</span>
        <Styled.Button>MORE</Styled.Button>
      </Styled.InfoContainer>
    </Styled.ColorBox>
  );
};

export default ColorBox;
