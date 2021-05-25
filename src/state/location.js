import { useState, useEffect } from 'react';

function GetLocationAPI(url)  {

    const [data, setData] = useState([]);

    useEffect(() => {

      const fetchLocationData = async (url) => {
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

      fetchLocationData(url);
    }, [url]);

    //console.table(data)
    return data;
}

export default GetLocationAPI;