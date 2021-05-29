import { useState, useEffect } from 'react';

function GetLocationAPI(st)  {

    const [data, setData] = useState([]);

    useEffect(() => {

      const fetchLocationData = async (st) => {
        setData([]);

        if(st !== "") {
          let url = "https://secret-savannah-91168.herokuapp.com/https://www.metaweather.com/api/location/search/?".concat(st);
          try {
            const response = await fetch(url);
            const fetchData = await response.json();
            
            setData([...fetchData]);
      
          } 
          catch (error) {
            console.log(error.message);
          }
        }
      };

      fetchLocationData(st);
    }, [st]);

    return data;
}

export default GetLocationAPI;