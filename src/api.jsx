import { useState, useEffect } from "react";

const useAPI = (limit = 10) => { // default to 10 if no value is passed on
    const [API, setAPI] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", { mode: "cors" })
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("server error");
            }
            return response.json();
        })
        .then((response) => setAPI(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    },[limit])

    return {
        API,
        error,
        loading
    }
}

export default useAPI;