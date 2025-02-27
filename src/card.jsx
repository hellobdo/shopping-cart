import "./styles/card.css";
import { useAddToCart } from "./utils/cartUtils";
import { useEffect, useRef } from "react";

const Card = ({ item, onClose }) => {
    const addToCart = useAddToCart();
    const modalRef = useRef(null); // Reference for the modal

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClickOutside); // Changed to "mousedown" for better accuracy

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    if (!item) return null;

    return (
        <div className="overlay">
            <div ref={modalRef} className="card-modal">
                <h2>{item.title}</h2>
                <img src={item.image} alt={item.title} />
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
                <button onClick={onClose} className="close-btn">Close</button>
            </div>
        </div>
    );
};

export default Card;