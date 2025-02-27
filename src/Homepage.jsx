import "./styles/App.css"
import useAPI from "./api";
import NavBar from "./navBar";
import Card from "./card";
import { useState } from "react";
import { useCart } from "./context/MainContext"
import { useAddToCart } from "./utils/cartUtils";


const Homepage = () => {
    const addToCart = useAddToCart();  
    const { cart } = useCart();
    const nrOfItems = 10;
    const { API, error, loading } = useAPI(nrOfItems);
    const [selectedCard, setSelectedCard] = useState(null);

    const closeCard = () => {
      setSelectedCard(null);
    }

    const handleCardClick = (event, item) => {
      if (event.target.tagName.toLowerCase() === "button") {
        return;
      }

      setSelectedCard(item);
    }

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
                <div key={item.id} className="card" onClick={() => handleCardClick(event, item)}>
                  <p>{item.title}</p>
                  <img src={item.image} alt={item.title} />
                  <p>{item.price}</p>
                  <button onClick={(e) => { e.stopPropagation(); addToCart(item)}}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
          {selectedCard && (
            <Card item={selectedCard} onClose = {closeCard} />
          )}
        </>
    )
}

export default Homepage;