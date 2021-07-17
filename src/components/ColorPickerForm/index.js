import { useState, useEffect } from "react";
import {usePalette} from "../../context/PaletteContext";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";

const ColorPickerForm = () => {
  const [inputText, setInputText] = useState("");
  const { newPalette, setNewPalette, pickedColor, setPickedColor } = usePalette();
  const classes = useStyles({ color: pickedColor });
  const isPaletteFull = newPalette.length === 20;

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
      id: inputText,
    };
    setNewPalette((state) => [...state, newColor]);
    setInputText("");
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isNameUnique", (enteredName) => {
      return newPalette.every(
        ({ name }) => name.toLowerCase() !== enteredName.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", () => {
      return newPalette.every(({ color }) => color !== pickedColor);
    });
  });

  return (
    <ValidatorForm onSubmit={handleSubmit} instantValidate={false} className={classes.Form}>
      <ChromePicker
        color={pickedColor}
        onChange={handlePickedColorUpdate}
        disableAlpha={true}
        className={classes.ColorPicker}
      />
      <TextValidator
      className={classes.Input}
        value={inputText}
        placeholder="Color Name"
        onChange={handleInputChange}
        validators={["required", "isNameUnique", "isColorUnique"]}
        errorMessages={[
          "Enter color name",
          "Color name already taken",
          "Color is already in the palette",
        ]}
      />
      <Button
        variant="contained"
        type="submit"
        disabled={isPaletteFull}
        style={{ backgroundColor: pickedColor }}
        className={classes.Button}
      >
        {isPaletteFull ? "Palette Full" : "Add Color"}
      </Button>
    </ValidatorForm>
  );
};

export default ColorPickerForm;
