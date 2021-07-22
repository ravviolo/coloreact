import { useStyles } from "./styles";
import clsx from "clsx";

const Page = ({ children, className }) => {
  const classes = useStyles;
  return <main className={clsx(classes.Page, className)}>{children}</main>;
};

export default Page;
