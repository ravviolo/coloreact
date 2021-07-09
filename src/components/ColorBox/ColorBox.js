const ColorBox = ({color, name}) => {
    const styles = {
        height: '100px', width: '100px', backgroundColor: color
    }
    return (
        <div style={styles}>
            {/* <span>COPY</span> */}
            <div>
            <span>{name}</span>
            {/* <span>MORE</span> */}
            </div>
        </div>
    )
}

export default ColorBox
