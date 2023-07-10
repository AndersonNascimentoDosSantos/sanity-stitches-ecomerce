import { styled } from "../../../stitches.config";

export const FooterContainer = styled("footer", {
  color: "#324d67",
  // textAlign: "center",
  marginTop: "20px",
  padding: "30px 10px",
  fontWeight: 700,
  display: "flex",
  // flexDirection: "row",
  // alignItems: "center",
  // gap: "10px",
  justifyContent: "space-between",
  ".footer-banner-container": {
    padding: "80px 40px",
    paddingTop: "50px",
    backgroundColor: "#f02d34",
    borderRadius: "15px",
    position: "relative",
    height: "400px",
    lineHeight: 1,
    color: "white",
    width: "100%",
    marginTop: "120px",

    ".banner-desc": {
      display: "flex",
      justifyContent: "space-between",

      button: {
        borderRadius: "15px",
        padding: "10px 16px",
        backgroundColor: "white",
        color: "red",
        border: "none",
        marginTop: "40px",
        fontSize: "18px",
        fontWeight: 500,
        cursor: "pointer",
      },
      ".left": {
        h3: {
          fontWeight: 900,
          fontSize: "80px",
          marginLeft: "25px",
        },
        p: {
          margin: "18px",
        },
      },
      ".right": {
        lineHeight: 1.4,

        h3: {
          fontWeight: 800,
          fontSize: "60px",
        },
        p: {
          fontSize: "18px",
        },
        ".company-desc": {
          fontSize: "14px",
          fontWeight: 300,
        },
      },
      ".footer-banner-image": {
        position: "absolute",
        /* top: -35%,
        left: 8%, */
        top: "-25%",
        left: "25%",
        width: "450px",
      },
    },
  },
  ".icons": {
    fontSize: "30px",
    display: "flex",
    gap: "10px",
  },

  "@media(max-width:500px)": {
    ".footer-banner-container": {
      height: "fit-content",
      // marginTop: "80px",
      marginTop: "unset",
      ".banner-desc": {
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "20px",
        // order: "1",
        ".footer-banner-image": {
          margin: "0 auto",
          order: "2",
          width: "77%",
          left: "30%",
          top: "6%",
          height: "56%",
          position: "unset",
        },

        ".left": {
          order: "1",
          h3: {
            fontWeight: "900",
            fontSize: "50px",
            marginLeft: "5px",
          },
          p: {
            margin: "'18px'",
          },
        },
        ".right": {
          order: "3",
          h3: {
            fontSize: "45px",
          },
          p: {
            fontSize: "'18px'",
          },
          ".company-desc": {
            fontSize: "14px",
          },
        },
      },
    },
  },
});
