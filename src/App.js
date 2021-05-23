import { useState, useEffect } from 'react';
import useWeatherApi from './state/weather';

import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Mainpage from './components/mainpage/Mainpage';

function App() {
  
  const [searchURL, setSearchURL] = useState("");


  function getLocationName(searchText) {

    let url = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=";
    let fullURL = url.concat(searchText)
    setSearchURL(fullURL)
  }

  const data = useWeatherApi(searchURL)
  //console.log(searchURL)
  //console.log(data)

  return (
    <div className="App">
        <Sidebar getLocationName={getLocationName} data={data}/>
        <Mainpage/>
    </div>
  );
}

export default App;