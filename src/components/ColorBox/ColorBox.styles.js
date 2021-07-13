import styled, { css } from "styled-components";

export const ColorBox = styled.div`
  height: ${({ isShadesPalette }) => (isShadesPalette ? "50%" : "25%")};
  width: 20%;
  background-color: ${(props) => props.bgColor};
  position: relative;

  cursor: pointer;
`;
export const CenteredContainer = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
`;
export const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .colorbox__name {
    letter-spacing: 1px;
    padding-left: 0.5em;
    text-transform: uppercase;
  }
`;
export const Button = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1rem;
  border: none;
  padding: 0.4em 0.8em;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  cursor: pointer;
`;
export const CopyButton = styled(Button)`
  padding: 0.6em 1.5em;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  ${ColorBox}:hover & {
    opacity: 1;
  }
`;
export const LinkButton = styled(CopyButton)`
  opacity: .8;
  ${ColorBox}:hover & {
    opacity: 1
  }
`;
