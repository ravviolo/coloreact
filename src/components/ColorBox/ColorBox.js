import { CopyToClipboard } from "react-copy-to-clipboard";
import * as Styled from "./ColorBox.styles";

const ColorBox = ({ color, name }) => {
  const handleCopy = () => {
    console.log("copied");
  };
  return (
    <CopyToClipboard text={color} onCopy={handleCopy}>
      <Styled.ColorBox bgColor={color}>
        <Styled.CopyContainer>
          <Styled.CopyButton>COPY</Styled.CopyButton>
        </Styled.CopyContainer>
        <Styled.InfoContainer>
          <span className="colorbox__name">{name}</span>
          <Styled.Button>MORE</Styled.Button>
        </Styled.InfoContainer>
      </Styled.ColorBox>
    </CopyToClipboard>
  );
};

export default ColorBox;
