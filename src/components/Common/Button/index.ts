import { styled } from "@stitches/react";

export const Button = styled("button", {
  display: "flex",
  gap: "30px",
  borderRadius: "12px",
  transform: "scale(1, 1)",
  transition: "transform 0.5s ease",
  cursor: "pointer",
  width: "200px",
  fontWeight: 500,
  fontSize: "18px",
  marginTop: "40px",
  padding: "10px 20px",
  variants: {
    variant: {
      "add-to-cart": {
        border: "1px solid #f02d34",
        backgroundColor: "white",
        color: "#f02d34",
      },
      "buy-now": {
        backgroundColor: "#f02d34",
        color: "white",
        border: "none",
      },
    },
  },
  defaultVariants: {
    variant: "add-to-cart",
  },
  "&:hover": {
    transform: "scale(1.1, 1.1)",
  },
});
