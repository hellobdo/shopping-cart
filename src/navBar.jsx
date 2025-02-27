import { FaShoppingCart } from "react-icons/fa";
import "./styles/NavBar.css"

const NavBar = ({cartCount}) => {

    return (
        <nav className="navbar">
            <h2>Shop</h2>
            <div className="cart-container">
                <FaShoppingCart size={50} />
                <span className="cart-count">{cartCount}</span>
            </div>
        </nav>
    )
}

export default NavBar;