import { useState } from "react";
import { CartContext } from "./MainContext"; // ✅ Import only the context

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};