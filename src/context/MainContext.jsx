import { createContext } from "react";
import { useContext } from "react";

export const CartContext = createContext(); // ✅ Only exporting the context

// Custom hook for easy access
export const useCart = () => {
    return useContext(CartContext);
};