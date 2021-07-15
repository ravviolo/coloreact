import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {useStyles} from './styles'

const DragColorBox = ({color, name}) => {
    const classes = useStyles({color})
    return (
        <div className={classes.ColorBox}>
            <div className={classes.BottomContainer}>
                <span>{name}</span>
                <DeleteOutlineIcon className={classes.DeleteIcon}/>
            </div>
        </div>
    )
}

export default DragColorBox
