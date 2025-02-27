import { CartProvider } from "./context/CartProvider";
import Homepage from "./homepage";
import ShoppingCart from "./cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/cart" element={<ShoppingCart />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
