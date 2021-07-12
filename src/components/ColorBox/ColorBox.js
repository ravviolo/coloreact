import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import CopyModal from "../CopyModal/CopyModal";

import * as Styled from "./ColorBox.styles";

const ColorBox = ({ color, name }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <>
      <CopyToClipboard text={color} onCopy={handleCopy}>
        <Styled.ColorBox bgColor={color}>
          <CopyModal bgColor={color} copied={copied}/>
          <Styled.CopyContainer>
            <Styled.CopyButton>COPY</Styled.CopyButton>
          </Styled.CopyContainer>
          <Styled.InfoContainer>
            <span className="colorbox__name">{name}</span>
            <Styled.Button>MORE</Styled.Button>
          </Styled.InfoContainer>
        </Styled.ColorBox>
      </CopyToClipboard>
    </>
  );
};

export default ColorBox;
