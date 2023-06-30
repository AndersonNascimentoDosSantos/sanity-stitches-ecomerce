import { styled } from "../../stitches.config";

export const Main = styled("main", {
  maxWidth: "1400px",
  margin: "auto",
  width: "100%",
});

export const Footer = styled("footer", {
  color: "#324d67",
  textAlign: "center",
  marginTop: "20px",
  padding: "30px 10px",
  fontWeight: 700,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
});

export const Icons = styled("div", {
  fontSize: "30px",
  display: "flex",
  gap: "10px",
});

export const Nav = styled("header", {
  display: " flex",
  justifyContent: " space-between",
  margin: " 6px 18px",
  position: " relative",
});

export const Logo = styled("p", {
  height: " 1em",
  marginLeft: " 0.5rem",
  color: "gray",
  fontSize: "18px",
});

export const CartButton = styled("button", {
  fontSize: " 25px",
  color: " gray",
  cursor: " pointer",
  position: " relative",
  transition: " transform 0.4s ease",
  border: " none",
  backgroundColor: " transparent",

  ":hover": {
    transform: "scale(1.1, 1.1)",
  },
});

export const CartQty = styled("span", {
  position: "absolute",
  right: "-8px",
  fontSize: "12px",
  color: "#eee",
  backgroundColor: " #f02d34",
  width: "18px",
  height: "18px",
  borderRadius: "50%",
  textAlign: " center",
  fontWeight: 600,
});

export const CartWrapper = styled("div", {
  width: " 100vw",
  background: " rgba(0, 0, 0, 0.5)",
  position: " fixed",
  right: " 0",
  top: " 0",
  zIndex: " 100",
  /* will-change: transform; */
  transition: "all 1s ease-in-out",
});
export const CartContainer = styled("div", {
  height: "100vh",
  width: "600px",
  backgroundColor: "white",
  float: "right",
  padding: "40px 10px",
  position: "relative",
  ".empty-cart": {
    margin: "40px",
    textAlign: "center",
    h3: {
      fontWeight: 600,
      fontSize: "20px",
    },
  },
});
export const ProductContainer = styled("div", {
  marginTop: "15px",
  overflow: "auto",
  maxHeight: "70vh",
  padding: "20px 10px",
});

export const ProductCard = styled("div", {
  display: "flex",
  gap: "30px",
  padding: "20px",

  // ".cart-product-image": {
  //   width: "25%",
  //   height: "25%",
  // },
});
export const ProductCardImage = styled("img", {
  width: "180px",
  height: "150px",
  borderRadius: "15px",
  backgroundColor: "#ebebeb",
});

export const ItemDesc = styled("div", {
  ".flex": {
    display: "flex",
    justifyContent: "space-between",
    width: "350px",
    color: "#324d67",
    h5: {
      fontSize: "24px",
    },
    h4: {
      fontSize: "20px",
    },
  },
  ".bottom": {
    marginTop: "60px",
  },
  ".remove-item": {
    fontSize: "24px",
    color: "#f02d34",
    cursor: "pointer",
    background: "transparent",
    border: "none",
  },
});

export const QuantityDesc = styled("p", {
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
});

export const CartBottom = styled("div", {
  position: " absolute",
  bottom: " 12px",
  right: " 5px",
  width: " 100%",
  padding: " 30px 65px",
});

export const Button = styled("button", {
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

  ":hover": {
    transform: "scale(1.1, 1.1)",
  },
});
export const CartHeading = styled("button", {
  display: " flex",
  alignItems: " center",
  fontsize: " 18px",
  fontWeight: " 500",
  cursor: " pointer",
  gap: " 2px",
  marginLeft: " 10px",
  border: " none",
  backgroundColor: " transparent",
  ".heading": {
    marginLeft: "10px",
  },
  ".cart-num-items": {
    marginLeft: "10px",
    color: "#f02d34",
  },
});
