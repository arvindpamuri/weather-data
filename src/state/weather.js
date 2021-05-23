import { useState, useEffect } from 'react';

function useWeatherApi(url)  {

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchWeatherData = async (url) => {
            setData([]);
            try {
              const response = await fetch(url);
              const fetchData = await response.json();
              
              setData([...fetchData]);
        
            } 
            catch (error) {
              console.log(error.message);
            }
        };

        fetchWeatherData(url);
    }, [url]);

    //console.table(data)
    return data;
}

export default useWeatherApi;