import styled, { keyframes } from "styled-components";

export const Nav = styled.nav`
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SliderContainer = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  position: relative;

  & span {
    position: absolute;
    left: -3rem;
    font-size: 1.2rem;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  &:hover {
    span {
      opacity: 1;
    }
  }
  // Overwriting Slider Component styles
  .rc-slider {
    width: 80%;
  }
  .rc-slider-track {
    background: transparent;
  }
  .rc-slider-rail {
    height: 8px;
  }
  .rc-slider-handle {
    top: 6px;
    height: 1.5rem;
    width: 1.5rem;
    border-color: #66a3e9;
    &:hover,
    &:active,
    &:focus {
      border-color: #94c0f3;
    }
  }
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
export const LogoContainer = styled.div`
  width: 12%;
  height: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
  & a {
    font-size: 1.5rem;
    letter-spacing: 5px;
    font-weight: 500;
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
    &:hover {
      animation-name: ${rainbow};
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: ease;
    }
  }
`;
export const SelectContainer = styled.div`
  margin-right: 1em;
`;
