import { useHistory } from "react-router";
import { useUI } from "../../context/UIContext";
import Logo from '../Logo'
import { useStyles } from "./styles";

const Header = () => {

  const classes = useStyles();
  const history = useHistory();
  const { setOpenRestoreDialog } = useUI();

  const handleCreatePalette = () => history.push("/create-palette");
  const handleOpenRestoreDialog = () => setOpenRestoreDialog();
  return (
    <header className={classes.Header}>
      <Logo main={true}/>
      <span onClick={handleCreatePalette}>Create Palette</span>
      <span onClick={handleOpenRestoreDialog}>Restore</span>
    </header>
  );
};

export default Header;
