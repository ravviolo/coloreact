import styled, { keyframes } from "styled-components";

export const PageContainer = styled.div`
  background-color: #1f17aa;
  min-height: 100vh;
`;
export const PageContent = styled.div`
  width: 60%;
  margin: 0 auto;
`;
const rainbow = keyframes`
     0% {
        background-position: 0 82%;
    }

    50% {
        background-position: 100% 19%;
    }
    100% {
        background-position: 0 82%;
    }
`;
export const Header = styled.header`
  padding-top: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  h1 {
    font-size: 2.5rem;
    margin-right: auto;
    text-transform: lowercase;
    letter-spacing: 5px;
    &:hover {
      cursor: pointer;
      background: linear-gradient(
        124deg,
        #1ddde8,
        #1d64e8,
        #2b1de8,
        #641de8,
        #dd00f3,
        #b003d3,
        #cf07c5,
        #f300df,
        #ff2400,
        #e81d1d,
        #e8b71d,
        #e3e81d,
        #1de840
      );
      background-clip: text;
      color: transparent;
      background-size: 400% 100%;
      animation-name: ${rainbow};
      animation-duration: 6s;
      animation-iteration-count: infinite;
      animation-timing-function: ease;
    }
  }
  span {
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      display: inline-block;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: white;
      transition: width 0.3s ease-in-out;
    }
    &:hover::after {
      width: 100%;
    }
  }
  span + span {
    margin-left: 2em;
  }
`;

export const PaletteList = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3em;
`;
