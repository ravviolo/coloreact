// import styled, { keyframes } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  "@global": {
    "@keyframes rainbow": {
      "0%": { backgroundPosition: "0% 82%" },
      "50%": { backgroundPosition: "100% 19%" },
      "100%": { backgroundPosition: "0% 82%" },
    },
  },
  PageContainer: {
    backgroundColor: "#1f17aa",
    minHeight: "100vh",
  },
  PageContent: {
    width: "60%",
    margin: "0 auto",
  },
  Header: {
    paddingTop: "2em",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",

    "& span": {
      fontSize: "1.2rem",
      fontWeight: 500,
      cursor: "pointer",
      position: "relative",

      "&:after": {
        content: "''",
        position: "absolute",
        display: "inline-block",
        bottom: "-5px",
        left: 0,
        width: 0,
        height: 1,
        backgroundColor: "white",
        transition: "width 0.3s ease-in-out",
      },

      "&:hover::after": {
        width: "100%",
      },
    },

    "& span + span": {
      marginLeft: "2em",
    },
  },
  Logo: {
    fontSize: "2.5rem",
    marginRight: "auto",
    textTransform: "lowercase",
    letterSpacing: 5,

    "&:hover": {
      background:
        "linear-gradient(124deg,#1ddde8,#1d64e8,#2b1de8, #641de8,#dd00f3,#b003d3,#cf07c5,#f300df,#ff2400,#e81d1d,#e8b71d,#e3e81d,#1de840)",
      backgroundClip: "text",
      color: "transparent",
      backgroundSize: "400% 100%",
      animationName: "$rainbow",
      animationDuration: "6s",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease",
    },
  },

  PaletteList: {
    marginTop: "2em",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "3em",
  },
});

// export const PageContainer = styled.div`
//   background-color: #1f17aa;
//   min-height: 100vh;
// `;
// export const PageContent = styled.div`
//   width: 60%;
//   margin: 0 auto;
// `;
// const rainbow = keyframes`
//      0% {
//         background-position: 0 82%;
//     }

//     50% {
//         background-position: 100% 19%;
//     }
//     100% {
//         background-position: 0 82%;
//     }
// `;
// export const Header = styled.header`
//   padding-top: 2em;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   color: white;
//   h1 {
//     font-size: 2.5rem;
//     margin-right: auto;
//     text-transform: lowercase;
//     letter-spacing: 5px;
//     &:hover {
//       cursor: pointer;
//       background: linear-gradient(
//         124deg,
//         #1ddde8,
//         #1d64e8,
//         #2b1de8,
//         #641de8,
//         #dd00f3,
//         #b003d3,
//         #cf07c5,
//         #f300df,
//         #ff2400,
//         #e81d1d,
//         #e8b71d,
//         #e3e81d,
//         #1de840
//       );
//       background-clip: text;
//       color: transparent;
//       background-size: 400% 100%;
//       animation-name: ${rainbow};
//       animation-duration: 6s;
//       animation-iteration-count: infinite;
//       animation-timing-function: ease;
//     }
//   }
//   span {
//     font-size: 1.2rem;
//     font-weight: 500;
//     cursor: pointer;
//     position: relative;
//     &:after {
//       content: "";
//       position: absolute;
//       display: inline-block;
//       bottom: -5px;
//       left: 0;
//       width: 0;
//       height: 1px;
//       background-color: white;
//       transition: width 0.3s ease-in-out;
//     }
//     &:hover::after {
//       width: 100%;
//     }
//   }
//   span + span {
//     margin-left: 2em;
//   }
// `;

// export const PaletteList = styled.div`
//   margin-top: 2em;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   column-gap: 3em;
// `;
