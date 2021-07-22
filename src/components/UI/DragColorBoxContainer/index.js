import { usePalette } from "../../../context/PaletteContext";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SortableContainer } from "react-sortable-hoc";
import DragColorBox from "../../ColorBox/DragColorBox";

const DragColorBoxContainer = ({ className }) => {
  const { newPalette } = usePalette();

  return (
    <TransitionGroup className={className}>
      {newPalette.map((newColor, index) => (
        <CSSTransition key={newColor.name} timeout={300} classNames="fade">
          <DragColorBox
            color={newColor.color}
            name={newColor.name}
            index={index}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default SortableContainer(DragColorBoxContainer);
