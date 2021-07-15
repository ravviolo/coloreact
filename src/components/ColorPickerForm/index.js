import { useState, useContext, useEffect } from "react";
import PaletteContext from "../../context/PaletteContext";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";

const ColorPickerForm = () => {
  const [pickedColor, setPickedColor] = useState("teal");
  const [inputText, setInputText] = useState("");
  const { newPalette, setNewPalette } = useContext(PaletteContext);
  const classes = useStyles({ pickedColor });
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
    <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
      <ChromePicker
        color={pickedColor}
        onChange={handlePickedColorUpdate}
        disableAlpha={true}
      />
      <TextValidator
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
        className={classes.AddColorButton}
        type="submit"
        disabled={isPaletteFull}
      >
        {isPaletteFull ? "Palette Full" : "Add Color"}
      </Button>
    </ValidatorForm>
  );
};

export default ColorPickerForm;
