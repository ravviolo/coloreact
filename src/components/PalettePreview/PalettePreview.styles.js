import styled from "styled-components";

export const Card = styled.div`
  margin: 1rem;
  height: 25vh;
  width: 200px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 0.5em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
export const ColorContainer = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
`;
export const MiniColorBox = styled.div`
  height: 25%;
  width: 20%;
  background-color: ${({ bgColor }) => bgColor.color};
`;
export const PaletteInfo = styled.div`
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25em;
`;
