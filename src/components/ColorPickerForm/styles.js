import { makeStyles } from "@material-ui/core";
import { TEXT_CONTRAST } from "../../constants/textContast";

export const useStyles = makeStyles({
  Form: {
    width: "100%",
  },
  ColorPicker: {
    width: "100% !important",
  },
  Input: {
    width: "100%",
    margin: "1em 0",
    "& input": {
      height: "2rem",
    },
  },
  Button: {
    width: "100%",
    height: "20%",
    fontSize: "1.5rem",
    ...TEXT_CONTRAST,
  },
});
