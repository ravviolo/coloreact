 import { useContext } from "react";
import PaletteContext from "../../../context/PaletteContext";

import { SortableContainer } from "react-sortable-hoc";
import DragColorBox from "../../ColorBox/DragColorBox";

const DragColorBoxContainer = ({ className }) => {
  const { newPalette } = useContext(PaletteContext);

  return (
    <div className={className}>
      {newPalette.map((newColor, index) => (
        <DragColorBox
          color={newColor.color}
          name={newColor.name}
          index={index}
        />
      ))}
    </div>
  );
};

export default SortableContainer(DragColorBoxContainer);
