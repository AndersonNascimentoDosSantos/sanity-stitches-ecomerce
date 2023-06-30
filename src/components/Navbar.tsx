import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { useStateContext } from "@/context/StateContext";
import { CartButton, CartQty, Logo, Nav } from "@/styles/GlobalStyles";
import { Cart } from "./";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <Nav>
      <Logo>
        <Link href="/">JSM Headphones</Link>
      </Logo>

      <CartButton type="button" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <CartQty>{totalQuantities}</CartQty>
      </CartButton>

      {showCart && <Cart />}
    </Nav>
  );
};

export default Navbar;
