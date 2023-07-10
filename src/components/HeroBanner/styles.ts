import { styled } from "../../../stitches.config";
// import { styled } from "@stitches/react";

export const HeroBannerContainer = styled("div", {
  padding: "100px 40px",
  backgroundColor: "#dcdcdc",
  borderRadius: "15px",
  position: "relative",
  height: "500px",
  lineHeight: "0.9",
  width: "100%",
  margin: "0px 2rem",
  // display: "flex",

  div: {
    // position: "relative",
    ".beats-solo": {
      fontSize: "20px",
    },
    h3: {
      fontSize: "4rem",
      marginTop: "4px",
    },
    h1: {
      color: "white",
      fontSize: "9em",
      marginLeft: "-20px",
      textTransform: "uppercase",
    },

    ".hero-banner-image": {
      position: "absolute",
      top: "0",
      right: "0%",
      width: "450px",
      height: "auto",
      paddingBottom: "66.67%" /* 3:2' aspect ratio */,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "flex-end",
    },
    div: {
      display: "flex",
      flexDirection: "colunm",
      width: "100%",
      a: {
        button: {
          borderRadius: "15px",
          padding: "10px 16px",
          backgroundColor: "#f02d34",
          color: "white",
          border: "none",
          marginTop: "40px",
          fontSize: "18px",
          fontWeight: 500,
          cursor: "pointer",
          zIndex: "10000 !important",
        },
      },
      ".desc": {
        position: "absolute",
        right: "10%",
        bottom: "5%",
        width: "300px",
        lineHeight: "1.3",
        display: "flex",
        flexDirection: "column",
        color: "#324d67",
        p: {
          color: "#5f5f5f",
          fontWeight: 100,
          textAlign: "end",
        },
        h5: {
          marginBottom: "12px",
          fontWeight: 700,
          fontSize: "16px",
          /* color: black, */
          alignSelf: "flex-end",
        },
      },
    },
  },

  "@media(max-width:500px)": {
    position: "unset",
    flexDirection: "column",
    justifyContent: "center",
    height: "fit-content",
    padding: "20px",
    margin: "unset",
    div: {
      display: "flex",
      flexDirection: "column",
      alignItens: "flex-start",
      gap: "1rem",
      ".beats-solo": {
        order: "1",
      },

      h3: {
        order: "2",
        fontSize: "2rem",
      },
      h1: {
        order: "3",
        color: "white",
        fontSize: "4em",
        marginLeft: "unset",
      },
      ".hero-banner-image": {
        order: "5",
        position: "unset",
        width: "100%",
        height: "auto",
        paddingBottom: "unset",
        // backgroundColor: "red",
      },

      div: {
        order: "4",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRow: "1fr 1fr",
        aligItens: "center",
        ".desc": {
          gridRow: 1,
          position: "unset",
          width: "100%",
          // alignItens: "flex-start",
          p: {
            textAlign: "start",
          },
        },
        a: {
          gridRow: "2",
          display: "flex",
          alignItens: "flex-end",
          justifyContent: "center",
          // horizontalAlign: "center",
          button: {
            zIndex: "unset",
            marginTop: "unset",
          },
        },
      },
    },
  },
});

// ".hero-banner-container": {
//   height: "560px",
//   lineHeight: "1.3",
//   h1: {
//     fontSize: "5rem",
//   },
//   h3: {
//     fontSize: "4rem",
//   },
//   button: {
//     marginTop: "90px",
//     zIndex: "10000",
//   },

// },
