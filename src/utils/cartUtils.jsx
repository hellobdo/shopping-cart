import { useCart } from "../context/MainContext";

export const useAddToCart = () => {
  const { setCart } = useCart();

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return addToCart;
};