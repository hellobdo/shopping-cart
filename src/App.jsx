import useAPI from "./api";
import "./styles/App.css"

const Homepage = () => {
    const nrOfItems = 10;
    const { API, error, loading } = useAPI(nrOfItems);

    if (loading) return <p>Loading...</p>
    if (error) return <p>NETWORK ERROR</p>

    return (
        <>
          <div className="container">
            <div className="header"></div>
            <div className="cards-container">
              {API.map((item) => (
                <div key={item.id} className="card">
                  <p>{item.title}</p>
                  <img src={item.image} alt={item.title} />
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </>
    )
}

export default Homepage;