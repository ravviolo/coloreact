import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import clsx from "clsx";

const Logo = ({ main }) => {
  const classes = useStyles();
  return (
    <Link to="/" className={classes.AddMargin}>
      <h1
        className={clsx(classes.Logo, main ? classes.Main : classes.Secondary)}
      >
        Coloreact
      </h1>
    </Link>
  );
};

export default Logo;
