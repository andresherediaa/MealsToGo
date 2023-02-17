import react, { createContext, useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "./../authentication/authentication.context";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [total, setTotal] = useState(0);

  const add = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setCart([item]);
      setRestaurant(rst);
    } else {
      setCart([...cart, item]);
    }
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  useEffect(() => {
    let sum = cart.reduce((acc, obj) => acc + parseInt(obj.price), 0);
    setTotal(sum);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, restaurant, addtoCart: add, clearCart: clear, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
