import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/background.svg";

export const useStyles = makeStyles((theme) => ({
  "@global": {
    "@keyframes rainbow": {
      "0%": { backgroundPosition: "0% 82%" },
      "50%": { backgroundPosition: "100% 19%" },
      "100%": { backgroundPosition: "0% 82%" },
    },
  },
  PageContainer: {
    backgroundColor: "#1f17aa",
    minHeight: "100vh",
    backgroundImage: `url(${background})`,
    /* background by SVGBackgrounds.com */
  },
  PageContent: {
    width: "60%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));
