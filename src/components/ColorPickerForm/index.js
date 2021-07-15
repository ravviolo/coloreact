import { useState, useContext } from "react";
import PaletteContext from "../../context/PaletteContext";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";


const ColorPickerForm = () => {
  const [pickedColor, setPickedColor] = useState("teal");
  const [inputText, setInputText] = useState("");
  const {setNewPalette} = useContext(PaletteContext)
  const classes = useStyles({ pickedColor });

  const handlePickedColorUpdate = (currentColor) => {
    setPickedColor(currentColor.hex);
  };
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newColor = {
      name: inputText,
      color: pickedColor,
    };
    setNewPalette((state) => [...state, newColor])
    setInputText('')
  };

  //   const handleAddColor = () => {
  //     const newColor = {
  //       name: "test",
  //       color: pickedColor,
  //     };

  //     setNewPalette((state) => [...state, newColor]);
  //   };

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <ChromePicker
        color={pickedColor}
        onChange={handlePickedColorUpdate}
        disableAlpha={true}
      />
      <TextValidator value={inputText} onChange={handleInputChange} />
      <Button
        variant="contained"
        className={classes.AddColorButton}
        type='submit'
        // style={{ backgroundColor: pickedColor }}
        // onClick={handleAddColor}
      >
        Add Color
      </Button>
    </ValidatorForm>
  );
};

export default ColorPickerForm;
