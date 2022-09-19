import { useState, useEffect } from "react"
import finnHub from "../api/finnHub"

export const StockList = () => {

    const [stock, setStock] = useState();
    const [watchList, setWatchList] = useState(["GOOGL", "AMZN", "MSFT"])

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => { 
            const responses = [];
            try {
                const responses = await Promise.all(watchList.map((stock) => {
                    return finnHub.get("/quote", {
                        params: {
                            symbol:stock
                        }
                    })
                }))
                
                console.log(responses)
                const data =  responses.map((response)=> (
                {
                    data: response.data,
                    symbol: response.config.params.symbol
                }
                ))
                if (isMounted) {
                    setStock(data)
                }
            }
            catch(e) {
                console.log(e.responses)
            }
        }
        fetchData();

        return () => (isMounted = false)
    }, [])

    return (
        <div>SIEMA</div>
    )
}