import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { CopyToClipboard } from "react-copy-to-clipboard";

import CopyModal from "../CopyModal/CopyModal";

import * as Styled from "./ColorBox.styles";

const ColorBox = ({ color, name, colorId, isShadesPalette }) => {
  const [copied, setCopied] = useState(false);
  const match = useRouteMatch();
  const history = useHistory();

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  const handleOpenShadesPalette = (e) => {
    e.stopPropagation();
    history.push(`${match.url}/${colorId}`);
  };
  return (
    <>
      <CopyToClipboard text={color} onCopy={handleCopy}>
        <Styled.ColorBox bgColor={color} isShadesPalette={isShadesPalette}>
          <CopyModal bgColor={color} copied={copied} />
          <Styled.CopyContainer>
            <Styled.CopyButton>copy</Styled.CopyButton>
          </Styled.CopyContainer>
          <Styled.InfoContainer>
            <span className="colorbox__name">{name}</span>
            {!isShadesPalette && <Styled.Button onClick={handleOpenShadesPalette}>
              more
            </Styled.Button>}
            
          </Styled.InfoContainer>
        </Styled.ColorBox>
      </CopyToClipboard>
    </>
  );
};

export default ColorBox;
