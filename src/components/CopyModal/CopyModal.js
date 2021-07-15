import { useStyles } from "./CopyModal.styles";


const CopyModal = ({ bgColor: color, copied }) => {
  const classes = useStyles({ copied, color });

  return (
    <>
      <div className={classes.Overlay} />
      <div className={classes.Content}>
        <h1>copied</h1>
        <p>{color}</p>
      </div>
    </>
  );
};
export default CopyModal;
