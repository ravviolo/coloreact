// import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  Card: {
    margin: "1rem 0",
    height: "25vh",
    backgroundColor: "white",
    border: "1px solid grey",
    borderRadius: 5,
    padding: "0.5em",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  ColorContainer: {
    height: "80%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    borderRadius: 5,
  },
  MiniColorBox: {
    height: "25%",
    width: "20%",
  },
  PaletteInfo: {
    height: "20%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "0.25em",

    "& span": {
      fontSize: "1.3rem",
    },
  },
});

// export const Card = styled.div`
//   margin: 1rem 0;
//   height: 25vh;
//   background-color: white;
//   border: 1px solid grey;
//   border-radius: 5px;
//   padding: 0.5em;
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;
//   &:hover {
//     transform: scale(1.1);
//   }
// `;
// export const ColorContainer = styled.div`
//   height: 80%;
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   border-radius: 5px;
// `;
// export const MiniColorBox = styled.div`
//   height: 25%;
//   width: 20%;
//   background-color: ${({ bgColor }) => bgColor.color};
// `;
// export const PaletteInfo = styled.div`
//   height: 20%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 0.25em;
//   span {
//     font-size: 1.3rem;
//   }
// `;
