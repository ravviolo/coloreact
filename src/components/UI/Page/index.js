import { useStyles } from "./styles";
import clsx from "clsx";

const Page = ({ children, className }) => {
  const classes = useStyles;
  return <section className={clsx(classes.Page, className)}>{children}</section>;
};

export default Page;
