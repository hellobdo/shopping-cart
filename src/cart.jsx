import { useCart } from "./context/MainContext";
import "./styles/ShoppingCart.css"; // Optional for styling
import { useState } from "react";

const ShoppingCart = () => {
    const { cart } = useCart(); // Get cart items from context
    const [checkout, setCheckout] = useState(false);

    const handleCheckout = () => {
        setCheckout(true);
    }

    if (checkout) {
        return (
            <div className="checkout-message">
                <h2>Let's get your money now</h2>
            </div>
        )
    }

    return (
        <div className="shopping-cart-container">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item-img" />
                            <div>
                                <h3>{item.title}</h3>
                                <p>Price: ${item.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={(handleCheckout)}>Checkout </button>
        </div>
    );
};

export default ShoppingCart;
