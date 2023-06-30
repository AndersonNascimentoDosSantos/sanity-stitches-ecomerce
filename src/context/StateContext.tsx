"use client";
import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { toast } from "react-hot-toast";

export interface CartItem {
  image: any;
  _id: any;
  quantity: any;
  price: any;
  name: string;
}
export interface Product {
  _id: any;
  price: number;
  quantity: any;
  name: any;
  image: any;
  details: any;
}

interface iContext {
  showCart: boolean;
  setShowCart: React.Dispatch<SetStateAction<boolean>>;
  cartItems: CartItem[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: Product, quantity: number) => void;
  toggleCartItemQuanitity: (id: any, value: string) => void;
  onRemove: (product: { _id: any }) => void;
  setCartItems: React.Dispatch<SetStateAction<CartItem[]>>;
  setTotalPrice: React.Dispatch<SetStateAction<number>>;
  setTotalQuantities: React.Dispatch<SetStateAction<number>>;
}
const Context = createContext({} as iContext);

export const StateContext = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct: CartItem;
  let index;

  const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart =
      cartItems.find((item) => item._id === product._id) || ({} as CartItem);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (Object.keys(checkProductInCart).length > 0) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          console.log("cart product dentro do filter: ", cartProduct);
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
            teste: cartProduct.quantity + quantity,
          };
        }
      });

      if (updatedCartItems.length > 0 && updatedCartItems[0] !== undefined)
        setCartItems([updatedCartItems[0]]);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const onRemove = (product: { _id: any }) => {
    foundProduct =
      cartItems.find((item) => item._id === product._id) || ({} as CartItem);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    if (Object.keys(foundProduct).length > 0) {
      setTotalPrice(
        (prevTotalPrice) =>
          prevTotalPrice - foundProduct?.price * foundProduct?.quantity
      );
      setTotalQuantities(
        (prevTotalQuantities) => prevTotalQuantities - foundProduct?.quantity
      );
    }
    setCartItems(newCartItems);
  };

  const toggleCartItemQuanitity = (id: any, value: string) => {
    foundProduct =
      cartItems.find((item) => item._id === id) || ({} as CartItem);
    // index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc" && Object.keys(foundProduct).length > 0) {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec" && Object.keys(foundProduct).length > 0) {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
