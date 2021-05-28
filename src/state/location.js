import { useState, useEffect } from 'react';

function GetLocationAPI(st)  {

    const [data, setData] = useState([]);

    useEffect(() => {

      const fetchLocationData = async (st) => {
        setData([]);

        //console.log(st)
        let url = "https://secret-savannah-91168.herokuapp.com/https://www.metaweather.com/api/location/search/?".concat(st);
        // console.log(url)
        try {
          const response = await fetch(url);
          const fetchData = await response.json();
          
          setData([...fetchData]);
    
        } 
        catch (error) {
          console.log(error.message);
        }
      };

      fetchLocationData(st);
    }, [st]);

    return data;
}

export default GetLocationAPI;