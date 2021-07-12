import styled from "styled-components";

export const ColorBox = styled.div`
  height: 25%;
  width: 20%;
  background-color: ${(props) => props.bgColor};
  position: relative;
`;
export const CopyContainer = styled.span`
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
    padding-left: 0.2em;
  }
`;
export const Button = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.3em 0.6em;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  cursor: pointer;
  outline: none;
  border: none;
`;
export const CopyButton = styled(Button)`
  padding: 0.5em 1.2em;
`;
