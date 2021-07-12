import { useContext } from "react";
import PaletteContext from "../../context/mainContext";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import * as Styled from "./Nav.styles";

const Nav = () => {
  const { level, setLevel } = useContext(PaletteContext);

  const handleSliderChange = (e) => {
    setLevel(e);
  };
  return (
    <Styled.Nav>
      <Styled.SliderContainer>
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={handleSliderChange}
        />
      </Styled.SliderContainer>
    </Styled.Nav>
  );
};

export default Nav;
