import { useContext } from "react";
<<<<<<< HEAD
import PaletteContext from "../../context/PaletteContext";
import UIContextProvider from '../../context/UIContext'
=======
import PaletteContext from "../../context/mainContext";
>>>>>>> 4967889059d0413beed923f916a60df1c9a45855

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

<<<<<<< HEAD

=======
>>>>>>> 4967889059d0413beed923f916a60df1c9a45855
import * as Styled from "./Nav.styles";

const Nav = () => {
  const { level, setLevel, format, setFormat } = useContext(PaletteContext);
<<<<<<< HEAD
  const { setIsOpenSB } = useContext(UIContextProvider);
=======
>>>>>>> 4967889059d0413beed923f916a60df1c9a45855

  const handleSliderChange = (e) => {
    setLevel(e);
  };
  const handleSelectChange = (e) => {
    setFormat(e.target.value)
<<<<<<< HEAD
    setIsOpenSB(true)
=======
>>>>>>> 4967889059d0413beed923f916a60df1c9a45855
  }
  return (
    <Styled.Nav>
      <Styled.LogoContainer>
        <span>coloreact</span>
      </Styled.LogoContainer>
      <Styled.SliderContainer>
        <span>Level: {level}</span>
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={handleSliderChange}
        />
      </Styled.SliderContainer>
      <Styled.SelectContainer>
        <Select
          labelId="color-format-select-label"
          id="color-format-select"
          value={format}
          onChange={handleSelectChange}
        >
          <MenuItem value="hex">HEX: #ffffff</MenuItem>
          <MenuItem value="rgb">RGB: rgb(255, 255, 255)</MenuItem>
          <MenuItem value="hsl">HSL: hsl(0, 0%, 100%)</MenuItem>
        </Select>
      </Styled.SelectContainer>
    </Styled.Nav>
  );
};

export default Nav;
