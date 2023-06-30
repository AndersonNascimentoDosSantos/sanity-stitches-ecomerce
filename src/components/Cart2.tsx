/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useStateContext } from "@/context/StateContext";
import getStripe from "@/lib/getStripe";
import { urlFor } from "@/sanity/config/client-config";
import {
  Button,
  CartBottom,
  CartContainer,
  CartHeading,
  CartWrapper,
  ItemDesc,
  ProductCard,
  ProductCardImage,
  ProductContainer,
  QuantityDesc,
} from "@/styles/GlobalStyles";
import Link from "next/link";
import { useRef } from "react";
import toast from "react-hot-toast";
import {
  AiOutlineLeft,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
  const cartRef = useRef(null);
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.status === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe?.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartWrapper ref={cartRef}>
      <CartContainer>
        <CartHeading type="button" onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </CartHeading>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <Button type="button" onClick={() => setShowCart(false)}>
                Continue Shopping
              </Button>
            </Link>
          </div>
        )}

        <ProductContainer>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <ProductCard key={item._id}>
                {item?.image && (
                  <ProductCardImage src={urlFor(item?.image[0]).url()} />
                )}
                <ItemDesc>
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <QuantityDesc>
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </QuantityDesc>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </ItemDesc>
              </ProductCard>
            ))}
        </ProductContainer>
        {cartItems.length >= 1 && (
          <CartBottom>
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </CartBottom>
        )}
      </CartContainer>
    </CartWrapper>
  );
};

export default Cart;
