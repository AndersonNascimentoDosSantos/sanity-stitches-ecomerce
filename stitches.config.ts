import { createStitches, globalCss } from "@stitches/react";

export const { styled, getCssText, css } = createStitches({
  theme: {
    breakpoints: {
      xs: "640px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
    },

    fonts: {
      system: "Inter, apple-system, sans-serif",
    },
    colors: {
      grey100: "#e6e4e2",
      grey200: "#9f9995",
      grey300: "#666361",
      grey400: "#474645",
      grey900: "#242424",
      backgroundGrey: "#f6f4f2",
      backgroundDarkGrey: "#d6d2cc",
      bluePrimary: "#4a7ddd",
      blueDarker: "#496495",
      blueDarkest: "#2a4067",
      orangeDark: "#CA6940",
      blackColor: "#242424",
      blackLightColor: "#343433",
      mildWhite: "#f6f4f2",
      whiteColor: "#ffffff",
    },
    fontSizes: {
      1: "48px",
      2: "36px",
      3: "30px",
      4: "20px",
      5: "18px",
      6: "16px",
      7: "12px",
    },
    fontWeights: {
      light: "300",
      normal: "500",
      bold: "600",
      bolder: "700",
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    xs: "(max-width: 640px)",
    sm: "(max-width: 768px)",
    md: "(max-width: 1024px)",
    lg: "(max-width: 1280px)",
  },
});

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
    padding: 0,
  },
  "html,body, * ": {
    margin: 0,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    "::-webkit-scrollbar": {
      width: "0px",
    },
  },
  "body, h1, h2, h3, h4, p, figure, blockquote, dl, dd": {
    margin: 0,
  },
  "ul[role='list'], ol[role='list']": { listStyle: "none" },
  ul: { margin: "0px", padding: "0px" },

  "html:focus-within": { scrollBehavior: "smooth" },
  body: {
    backgroundColor: "#ffffff",
    fontFamily: "Inter",
    minHeight: "100vh",
    textRendering: "optimizeSpeed",
    lineHeight: 1.5,
    // main: {
    //   minHeight: "100vh",
    //   padding: "4rem 0",
    //   flex: 1,
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
  },
  "a:not([class])": {
    textDecorationSkipInk: "auto",
    color: "inherit",
    textDecoration: "none",
  },
  "img,picture": { maxWidth: "100%", display: "block" },
  "input,button,textarea,select": { font: "inherit" },
  "@media (prefers-reduced-motion: reduce)": {
    "html:focus-within": { scrollBehavior: "auto" },
    "*, *::before, *::after": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
      scrollBehavior: "auto !important",
    },
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  ".main-container": {
    maxWidth: "1280px",
    margin: "auto",
    width: "100%",
  },
  ".layout": {
    padding: "10px",
  },

  ".navbar-container": {
    display: "flex",
    justifyContent: "space-between",
    margin: "6px 18px",
    position: "relative",
  },

  "span.text-red": {
    "-webkit-text-stroke": "1px #f02d34",
    marginLeft: "6px",
  },
  ".logo": {
    color: "gray",
    fontSize: "18px",
  },
  ".cart-icon": {
    fontSize: "25px",
    color: "gray",
    cursor: "pointer",
    position: "relative",
    transition: "transform .4s ease",
    border: "none",
    backgroundColor: "transparent",
    ":hover": {
      transform: "scale(1.1,1.1)",
    },
  },

  ".cart-item-qty": {
    position: "absolute",
    right: "-8px",
    fontSize: "12px",
    color: "#eee",
    backgroundColor: "#f02d34",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    textAlign: "center",
    fontWeight: 600,
  },
  ".products-container": {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    marginTop: "20px",
    width: "100%",
    div: {
      padding: "0.5rem",
      // margin: "0 auto",
    },
  },

  ".products-heading": {
    textAlign: "center",
    margin: "40px 0px",
    color: "#324d67",
    h2: {
      fontSize: "40px",
      fontWeight: 800,
    },
    p: {
      fontSize: "16px",
      fontWeight: 200,
    },
  },

  ".cart-wrapper": {
    width: "100vw",
    background: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 100,
    /* will-change: transform, */
    transition: "all 1s ease-in-out",
  },
  ".cart-container": {
    height: "100vh",
    width: "600px",
    backgroundColor: "white",
    float: "right",
    padding: "40px 10px",
    position: "relative",
  },

  ".cart-heading": {
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: 500,
    cursor: "pointer",
    gap: "2px",
    marginLeft: "10px",
    border: "none",
    backgroundColor: "transparent",
    ".heading": {
      marginLeft: "10px",
    },
  },

  ".cart-num-items": {
    marginLeft: "10px",
    color: "#f02d34",
  },
  ".empty-cart": {
    margin: "40px",
    textAlign: "center",
    h3: {
      fontWeight: 600,
      fontSize: "20px",
    },
  },

  ".cancel": {
    cursor: "pointer",
  },
  ".product-container": {
    marginTop: "15px",
    overflow: "auto",
    maxHeight: "70vh",
    padding: "20px 10px",
  },
  ".product": {
    display: "flex",
    gap: "30px",
    padding: "20px",
    ".cart-product-image": {
      width: "180px",
      height: "150px",
      borderRadius: "15px",
      backgroundColor: "#ebebeb",
    },
  },

  ".item-desc .flex": {
    display: "flex",
    justifyContent: "space-between",
    width: "350px",
    color: "#324d67",
  },
  ".item-desc .bottom": {
    marginTop: "60px",
  },
  ".flex h5": {
    fontSize: "24px",
  },
  ".flex h4": {
    fontSize: "20px",
  },
  ".total": {
    display: "flex",
    justifyContent: "space-between",
  },
  ".total h3": {
    fontSize: "22px",
  },
  ".remove-item": {
    fontSize: "24px",
    color: "#f02d34",
    cursor: "pointer",
    background: "transparent",
    border: "none",
  },
  ".cart-bottom": {
    position: "absolute",
    bottom: "12px",
    right: "5px",
    width: "100%",
    padding: "30px 65px",
  },

  ".btn-container": {
    width: "400px",
    margin: "auto",
  },
  ".btn": {
    width: "100%",
    maxWidth: "400px",
    padding: "10px 12px",
    borderRadius: "15px",
    border: "none",
    fontSize: "20px",

    marginTop: "40px",
    textTransform: "uppercase",
    backgroundColor: "#f02d34",
    color: "#fff",
    cursor: "pointer",
    transform: "scale(1, 1)",
    transition: "transform 0.5s ease",
  },
  ".btn:hover": {
    transform: "scale(1.1,1.1)",
  },
  ".product-detail-container": {
    display: "flex",
    gap: "40px",
    margin: "40px",
    marginTop: "60px",
    color: "#324d67",
  },

  ".product-detail-image": {
    borderRadius: "15px",
    backgroundColor: "#ebebeb",

    width: "400px",
    height: "400px",
    cursor: "pointer",
    transition: ".3s ease-in-out",
    ":hover": {
      backgroundColor: "#f02d34",
    },
  },

  ".small-images-container": {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },
  ".small-image": {
    borderRadius: "8px",
    backgroundColor: "#ebebeb",
    width: "70px",
    height: "70px",
    cursor: "pointer",
  },

  ".selected-image": {
    backgroundColor: "#f02d34",
  },
  ".reviews": {
    color: "#f02d34",
    marginTop: "10px",
    display: "flex",
    gap: "5px",
    alignItems: "center",
    p: {
      color: "#324d67",
      marginTop: "0px",
    },
  },

  ".product-detail-desc": {
    h4: {
      marginTop: "10px",
    },
    p: {
      marginTop: "10px",
    },

    ".price": {
      fontWeight: 700,
      fontSize: "26px",
      marginTop: "30px",
      color: "#f02d34",
    },

    ".quantity": {
      display: "flex",
      gap: "20px",
      marginTop: "10px ",
      alignItems: "center",
    },
    ".buttons": {
      display: "flex",
      gap: "30px",
    },
  },

  ".price .old-price, .product-price .old-price, .price .old-price": {
    color: "gray",
    textDecoration: "line-through",
  },

  ".quantity-desc": {
    border: "1px solid gray",
    padding: "6px",
    span: {
      fontSize: "16px",
      padding: "6px 12px",
      cursor: "pointer",
    },
    ".minus": {
      borderRight: "1px solid gray",
      color: "#f02d34",
    },
    ".num": {
      borderRight: "1px solid gray",
      fontSize: "20px",
    },
    ".plus": {
      color: "rgb(49, 168, 49)",
    },
  },

  ".maylike-products-wrapper": {
    marginTop: "120px",
    h2: {
      textAlign: "center",
      margin: "50px",
      color: "#324d67",
      fontSize: "28px",
    },

    ".marquee ": {
      position: "relative",
      height: "400px",
      width: "100%",
      overflowX: "hidden",

      ".marquee-text": {
        fontSize: "29px",
        fontWeight: 600,
        margin: "60px 0px",
        color: "#f02d34",
      },
      ".maylike-products-container": {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginTop: "20px",
      },
    },
  },

  ".track": {
    position: "absolute",
    whiteSpace: "nowrap",
    willChange: "transform",
    animation: "marquee 15s linear infinite",
    width: "180%",
  },
  "@keyframes marquee ": {
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(-50%)" },
  },
  ".track:hover ": {
    animationPlayState: "paused",
  },
  ".max-qty": {
    fontWeight: 500,
    color: "#f02d34",
  },
  ".success-wrapper, .cancel-wrapper": {
    backgroundColor: "white",
    minHeight: "60vh",
  },
  ".success, .cancel": {
    width: "1000px",
    margin: "auto",
    marginTop: "160px",
    backgroundColor: "#dcdcdc",
    padding: "50px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  ".success": {
    ".icon": {
      color: "green",
      fontSize: "40px",
    },
    h2: {
      textTransform: "capitalize",
      marginTop: "15px 0px",
      fontWeight: 900,
      fontSize: "40px",
      color: "#324d67",
    },
    ".email-msg": {
      fontSize: "16px",
      fontWeight: 600,
      textAlign: "center",
    },
    ".description": {
      fontSize: "16px",
      fontWeight: 600,
      textAlign: "center",
      margin: "10px",
      marginTop: "30px",
      ".email": {
        marginLeft: "5px",
        color: "#f02d34",
      },
    },
  },
  ".cancel p": {
    fontSize: "20px",
    fontWeight: 600,
  },

  ".product-max-qty": {
    marginTop: "10px",
  },

  "@media (maxWidth: 800px)": {
    "h1, h2, h3, h4": {
      fontSize: "1rem",
    },

    ".desc": {
      bottom: "60px",
    },
    ".product-detail-container": {
      flexWrap: "wrap",
      margin: "20px",
      ".product-detail-image": {
        width: "350px",
        height: "350px",
      },
    },

    ".cart-container": {
      width: "415px",
      padding: "4px",
    },
    ".cart-heading": {
      marginTop: "35px",
    },
    ".product-container": {
      marginTop: "10px",
    },
    ".product": {
      padding: "20px 5px",
    },
    ".product .cart-product-image": {
      width: "25%",
      height: "25%",
    },
    ".buttons .add-to-cart": {
      width: "150px",
    },
    ".buttons .buy-now": {
      width: "150px",
    },

    ".item-desc .flex": {
      width: "200px",
    },
    ".top": {
      flexWrap: "wrap",
      gap: "10px",
    },
    ".item-desc .bottom": {
      marginTop: "30px",
    },
    ".flex h5": {
      fontSize: "16px",
      color: "#324d67",
    },
    ".flex h4": {
      fontSize: "16px",
      color: "black",
    },
    ".cart-bottom": {
      padding: "30px",
    },
    ".total h3": {
      fontSize: "20px",
    },
    ".track": {
      animation: "marquee 10s linear infinite",
      width: "550%",
    },
    ".success-wrapper, .cancel-wrapper": {
      minHeight: "69vh",
    },
    ".success, .cancel": {
      width: "370px",
      marginTop: "100px",
      padding: "20px",
    },
    ".success": {
      height: "350px",
    },
    ".success h2": {
      fontSize: "17px",
    },
    ".btn-container": {
      width: "300px",
      margin: "auto",
    },
  },
});
