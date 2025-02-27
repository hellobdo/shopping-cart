import useAPI from "./api";
import "./styles/App.css"
import NavBar from "./navBar";
import { useState } from "react";

const Homepage = () => {
    const nrOfItems = 10;
    const { API, error, loading } = useAPI(nrOfItems);
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
      setCart((prevCart) => [...prevCart, item]);
    };

    if (loading) return <p>Loading...</p>
    if (error) return <p>NETWORK ERROR</p>

    return (
        <>
          <div className="container">
            <div className="header">
              <NavBar cartCount={cart.length} />
            </div>
            <div className="cards-container">
              {API.map((item) => (
                <div key={item.id} className="card">
                  <p>{item.title}</p>
                  <img src={item.image} alt={item.title} />
                  <p>{item.price}</p>
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        </>
    )
}

export default Homepage;