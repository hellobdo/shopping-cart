import { useCart } from "./context/MainContext";
import "./styles/ShoppingCart.css"; // Optional for styling

const ShoppingCart = () => {
    const { cart } = useCart(); // Get cart items from context

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
        </div>
    );
};

export default ShoppingCart;
