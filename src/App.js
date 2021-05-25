import { useState, useEffect } from 'react';
import GetLocationAPI from './state/location';

import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Mainpage from './components/mainpage/Mainpage';
import GetWeatherAPI from './state/weather';

function App() {
  
  const [searchURL, setSearchURL] = useState("");
  const [woeid, setWoeid] = useState("");
  const [weatherData, setWeatherData] = useState({});


  function getLocationName(searchText) {

    let url = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=";
    let fullURL = url.concat(searchText)
    setSearchURL(fullURL)
  }

  const locationData = GetLocationAPI(searchURL);
  const  weatherDataAPI = GetWeatherAPI(woeid);
  //console.log(searchURL)
  // console.log(weatherData)

  useEffect(() => {
    setWeatherData(weatherDataAPI);
  }, [weatherDataAPI]);

  return (
    <div className="App">
        <Sidebar 
          getLocationName={getLocationName} 
          data={locationData}
          setWoeid={setWoeid}
          weatherData={weatherData}
          />
        <Mainpage/>
    </div>
  );
}

export default App;