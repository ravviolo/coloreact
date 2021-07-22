import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import clsx from "clsx";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { generateCopyMsg } from "../../utils/helpers/generateCopyMsg";
import CopyModal from "../CopyModal/index";

import { useStyles } from "./styles";

const ColorBox = ({ color, name, colorId, isShadesPalette }) => {
  const [copied, setCopied] = useState(false);
  const [copyMsg, setCopyMsg] = useState("copied");
  const match = useRouteMatch();
  const history = useHistory();
  const classes = useStyles({ isShadesPalette, color });

  const handleCopy = () => {
    setCopied(true);
    setCopyMsg(generateCopyMsg());
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
        <div className={classes.ColorBox}>
          <CopyModal bgColor={color} copied={copied} copyMsg={copyMsg} />
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
