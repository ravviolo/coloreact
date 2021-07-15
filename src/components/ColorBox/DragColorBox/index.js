import {useStyles} from './styles'

const DragColorBox = ({color, name}) => {
    const classes = useStyles({color})
    return (
        <div className={classes.ColorBox}>
            <div className={classes.BottomContainer}>
                <span>{name}</span>
            </div>
        </div>
    )
}

export default DragColorBox
