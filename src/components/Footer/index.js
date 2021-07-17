import { useStyles } from "./styles";

const Footer = ({ paletteName, emoji }) => {

  const classes = useStyles();

  return (
    <footer className={classes.Footer}>
      <span className={classes.PaletteName}>{paletteName}</span>
      <span>{emoji}</span>
    </footer>
  );
};

export default Footer;
