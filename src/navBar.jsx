import { FaShoppingCart } from "react-icons/fa";
import "./styles/NavBar.css"
import { Link } from "react-router-dom";

const NavBar = ({cartCount}) => {

    return (
        <nav className="navbar">
            <h2>Shop</h2>
            <div className="cart-container">
                <Link to="/cart" className="cart-link">
                <FaShoppingCart size={50} />
                <span className="cart-count">{cartCount}</span>
                </ Link>
            </div>
        </nav>
    )
}

export default NavBar;