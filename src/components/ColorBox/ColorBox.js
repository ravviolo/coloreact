import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useStyles } from "./ColorBox.styles";
import clsx from "clsx";

import CopyModal from "../CopyModal/CopyModal";



const ColorBox = ({ color, name, colorId, isShadesPalette }) => {
  const [copied, setCopied] = useState(false);
  const match = useRouteMatch();
  const history = useHistory();
  const classes = useStyles({ isShadesPalette, color });

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const handleOpenShadesPalette = (e) => {
    e.stopPropagation();
    history.push(`${match.url}/${colorId}`);
  };

  return (
    <>
      <CopyToClipboard text={color} onCopy={handleCopy}>
        <div
          className={classes.ColorBox}
        >
          <CopyModal bgColor={color} copied={copied} />
          <div className={classes.CenteredContainer}>
            <button className={clsx(classes.CenteredButton, classes.Button)}>
              copy
            </button>
          </div>
          <div className={classes.BottomContainer}>
            <span className={classes.ColorName}>{name}</span>
            {!isShadesPalette && (
              <button
                className={classes.Button}
                onClick={handleOpenShadesPalette}
              >
                more
              </button>
            )}
          </div>
        </div>
      </CopyToClipboard>
    </>
  );
};

export default ColorBox;
