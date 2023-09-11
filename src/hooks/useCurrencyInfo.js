import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const currencyData = await response.json();
                setData(currencyData[currency]);
            } catch (error) {
                console.error(error);
                // Handle errors here
            }
        }

        fetchData()
    }, [currency])

    return data
}

export default useCurrencyInfo