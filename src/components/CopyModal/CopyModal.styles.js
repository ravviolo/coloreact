import styled, { css } from "styled-components";
import { TEXT_CONTRAST } from "../../constants/textContast";


export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 666;
  position: absolute;
  transform: scale(0);
  background-color: ${(props) => props.bgColor};
  transition: transform 0.5s ease-in-out;
  ${(props) =>
    props.copied &&
    css`
      transform: scale(50);
    `};
`;
export const Content = styled.div`
  position: fixed;
  inset: 0;
  z-index: 667;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  transition: all 0.2s ease-in-out;
  transition-delay: 0.2s;
  color: white;
  & h1 {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-size: 4.5rem;
    text-shadow: 1px 1px 2px rgb(73, 73, 73);
    padding: 0.75em 0;
    background: rgba(255, 255, 255, 0.3);
  }
  & p {
    font-size: 1.5rem;
    font-weight: 100;
    margin-top: 1.2em;
    color: ${TEXT_CONTRAST}
  }
  ${(props) =>
    props.copied &&
    css`
      opacity: 1;
      transform: scale(1);
    `};
`;
