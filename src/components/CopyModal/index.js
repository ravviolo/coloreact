import { useStyles } from "./styles";

const CopyModal = ({ bgColor: color, copied, copyMsg }) => {
  const classes = useStyles({ copied, color });
  
  return (
    <>
      <div className={classes.Overlay} />
      <div className={classes.Content}>
        <h1>{copyMsg}</h1>
        <p>{color}</p>
      </div>
    </>
  );
};
export default CopyModal;
