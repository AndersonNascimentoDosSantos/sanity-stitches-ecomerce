import Link from "next/link";
import { styled } from "../../../stitches.config";

export const ProductContainer = styled(Link, {
  display: "flex",
  justifyContent: "center",
  ".product-card": {
    cursor: "pointer",
    transform: "scale(1, 1)",
    transition: "transform 0.5s ease",
    color: "#324d67",
    "img:hover": {
      transform: "scale(1.1,1.1)",
    },
    ".product-image": {
      borderRadius: "15px",
      backgroundColor: "#ebebeb",
      transform: "scale(1, 1)",
      transition: "transform 0.5s ease",
    },
    ".product-name": {
      fontWeight: 500,
    },
    ".product-price": {
      fontWeight: 800,
      marginTop: "6px",
      color: "black",
    },
  },
});
