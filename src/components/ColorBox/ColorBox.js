import * as Styled from './ColorBox.styles'

const ColorBox = ({color, name}) => {

    return (
        <Styled.ColorBox bgColor={color}>
            {/* <span>COPY</span> */}
            <div>
            <span>{name}</span>
            {/* <span>MORE</span> */}
            </div>
        </Styled.ColorBox>
    )
}

export default ColorBox
