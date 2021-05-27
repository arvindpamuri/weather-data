import { useState, useEffect } from 'react';

function GetWeatherAPI(woeid) {

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {

    const fetchWeatherData = async (id) => {
      
      let url = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/".concat(id);
      //console.log(url)
      setWeatherData([])

      try {
        const response = await fetch(url);
        const fetchData = await response.json();

        setWeatherData(fetchData);

      }
      catch (error) {
        console.log(error.message);
      }
    }

    fetchWeatherData(woeid);
  }, [woeid]);

  return weatherData;

}

export default GetWeatherAPI;