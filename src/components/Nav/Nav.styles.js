import styled from "styled-components";

export const Nav = styled.nav`
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SliderContainer = styled.div`
  display: inline-block;
  width: 30%;
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
    border-color: grey;
    &:hover,
    &:active,
    &:focus {
        border-color: #64a3eb;
    }
  }
`;
