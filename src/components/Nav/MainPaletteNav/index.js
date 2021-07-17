import { usePalette } from "../../../context/PaletteContext";
import { useUI } from "../../../context/UIContext";

import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import Logo from "../../Logo";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { useStyles } from "./styles";

const Nav = ({ shadesPalette }) => {
  const { level, setLevel, format, setFormat } = usePalette();
  const { setOpenSBFormat } = useUI();
  const classes = useStyles();

  const handleSliderChange = (e) => {
    setLevel(e);
  };
  const handleSelectChange = (e) => {
    setFormat(e.target.value);
    setOpenSBFormat(true);
  };

  return (
    <nav className={classes.Nav}>
      <div className={classes.LogoContainer}>
        <Logo main={false}/>
      </div>
      {!shadesPalette && (
        <div className={classes.SliderContainer}>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={handleSliderChange}
            className={classes.Slider}
          />
        </div>
      )}

      <div className={classes.SelectContainer}>
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
      </div>
    </nav>
  );
};

export default Nav;
