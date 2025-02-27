import { CartProvider } from "./context/CartProvider";
import Homepage from "./homepage";


const App = () => {
    return (
        <>
          <CartProvider>
            <Homepage />
          </CartProvider>
        </>
    )
}

export default App;