import { useContext } from "react";
import { Link } from "react-router-dom";
import PaletteContext from "../../context/PaletteContext";
import UIContextProvider from "../../context/UIContext";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import * as Styled from "./Nav.styles";

const Nav = ({ shadesPalette }) => {
  const { level, setLevel, format, setFormat } = useContext(PaletteContext);
  const { setIsOpenSB } = useContext(UIContextProvider);

  const handleSliderChange = (e) => {
    setLevel(e);
  };
  const handleSelectChange = (e) => {
    setFormat(e.target.value);
    setIsOpenSB(true);
  };

  return (
    <Styled.Nav>
      <Styled.LogoContainer>
        <Link to="/">coloreact</Link>
      </Styled.LogoContainer>
      {!shadesPalette && (
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
      )}

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
