import { useState, useEffect } from 'react';
import GetLocationAPI from './state/location';
import GetCurrentLocation from './state/currentLocation';

import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Mainpage from './components/mainpage/Mainpage';
import GetWeatherAPI from './state/weather';

function App() {
  
  const [woeid, setWoeid] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [locationData, setLocationData] = useState({});
  const [currentLocationData, setCurrentLocationData] = useState({});
  const [unit, setUnit] = useState('C');
  const [searchText, setSearchText] = useState("");
  const [searchCoordinates, setSearchCoordinates] = useState("");
  const [userLocationUsed, setUserLocationUsed] = useState(false);

  function getLocationName(text) {
    setSearchText(`query=${text}`);
  }

  function getCurrentLocation() {
    setSearchText("");
    setSearchCoordinates("");
    setWeatherData({});
    setUserLocationUsed(!userLocationUsed);
    
  }

  const locationDataAPI = GetLocationAPI(searchText);
  const weatherDataAPI = GetWeatherAPI(woeid);

  const currentLocationCoord = GetCurrentLocation(userLocationUsed);
  const currentLocationDataAPI = GetLocationAPI(searchCoordinates);

  let currentWoeid = "";
  if(Object.keys(currentLocationData).length !== 0) {
    currentWoeid = (currentLocationData[0].woeid)
  }

  useEffect(() => {
    setLocationData(locationDataAPI);
  }, [locationDataAPI]);

  useEffect(() => {
    setWeatherData(weatherDataAPI);
  }, [weatherDataAPI]);

  useEffect(() => {
    setSearchCoordinates(currentLocationCoord)
  }, [currentLocationCoord]);

  useEffect(() => {
    setCurrentLocationData(currentLocationDataAPI)
  }, [currentLocationDataAPI]);

  useEffect(() => {
    setWoeid(currentWoeid)
  },[currentWoeid]);



  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar 
          getLocationName={getLocationName} 
          locationResultData={locationData}
          
          setWoeid={setWoeid}
          weatherData={weatherData}
          unit={unit}
          getCurrentLocation={getCurrentLocation}
          />
      </div>
      <div className="main">
        <Mainpage 
          weatherData={weatherData}
          unit={unit}
          setUnit={setUnit}
        />
      </div>
    </div>
  );
}

export default App;