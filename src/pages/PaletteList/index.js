import Header from "../../components/Header";
import AllPalettes from "../../components/AllPalettes";
import DeleteDialog from "../../components/UI/Dialogs/DeleteDialog";
import RestoreDialog from "../../components/UI/Dialogs/RestoreDialog";
import { useStyles } from "./styles";

const PaletteList = () => {

  const classes = useStyles();

  return (
    <div className={classes.PageContainer}>
      <div className={classes.PageContent}>
        <Header />
        <AllPalettes />
      </div>
      <DeleteDialog />
      <RestoreDialog />
    </div>
  );
};

export default PaletteList;
