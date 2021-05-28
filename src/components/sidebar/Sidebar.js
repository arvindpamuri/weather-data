import { useEffect, useState } from 'react';

import './Sidebar.css';
import SearchResult from './searchresult/SearchResult';
import Cloud from './../../assets/Cloud.png';

const Sidebar = ({ getLocationName, locationResultData, setWoeid, weatherData, unit, getCurrentLocation }) => {

    const [searchText, setSearchText] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [resultData, setResultData] = useState([]);

    let today = {};
    let week = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    if ( Object.keys(weatherData).length !== 0) {

        let day_consolidated = weatherData.consolidated_weather[0];

        if (unit === 'F') {
            today["temp"] = Math.floor((day_consolidated.the_temp * 9.0/5.0) + 32.0);
        }
        else {
            today["temp"] = Math.floor(day_consolidated.the_temp);
        }

        today["state"] = day_consolidated.weather_state_name;
        today["state_img"] = `https://www.metaweather.com/static/img/weather/${day_consolidated.weather_state_abbr}.svg`;

        const d = new Date(day_consolidated.applicable_date);
        today["week"] = week[d.getDay()];
        today["day"] = d.getDate();
        today["month"] = d.toLocaleString('default', { month: 'short' });
        
    }

    function handleGetCurrentLocation() {
        setResultData([]);
        getCurrentLocation();
        setWoeid()

    }

    function handleCloseSearch() {
        setShowSearch(false)
        setResultData([])
    }

    function handleSearch() {
        getLocationName(searchText);
        setShowSearchResult(true);
    }

    const onChangeHandler = (val) => {
        setSearchText(val);
    };

    useEffect(()=> {
        setResultData(locationResultData)
    }, [locationResultData])

    if(showSearch) {

        return(
            <>
                <section className="search-exit">
                    <i class="material-icons md-dark md-48 md-white" onClick={() => handleCloseSearch()}>close</i>
                </section>

                <section className='search-location-section'>
                    <div class='search-location'>
                        <span class="material-icons md-48" style={{padding: "5px", display: "flex", alignSelf: 'center'}}>search</span>
                        <input className='search-text' placeholder="Enter Location" onChange={(e) => onChangeHandler(e.target.value)}></input>
                    </div>
                        <button class onClick={() => handleSearch()}>SEARCH</button>
                </section>

                <section className='search-result-section'>
                    <SearchResult 
                        resultData={resultData} 
                        setResultData={setResultData}
                        showSearchResult={showSearchResult}
                        setShowSearchResult={setShowSearchResult}
                        setShowSearch={setShowSearch}
                        setWoeid={setWoeid}
                        />
                </section>
                
            </>
        );
    }

    else {

        return(

            <>
                <section className="search-button-section">
                    <button className="search-button" onClick={() => setShowSearch(true)}>Search For Location</button>
                    <button className='btn-circle' onClick={() => handleGetCurrentLocation()}><span class="material-icons md-48 md-light">my_location</span></button>
                </section>
                <div className="cloud-display-section">
                    <img src={Cloud} alt="" className='img_cloud img1'/>
                    <img src={Cloud} alt="" className='img_cloud img2'/>
                    <img src={Cloud} alt="" className='img_cloud img3'/>
                    <img src={Cloud} alt="" className='img_cloud img4'/>
                    <div className="state-img-div">
                        {(today.state_img) ? 
                        (<img src={today.state_img} className="state-img" alt=""/>)
                        : (<p></p>)}
                    </div>
                </div>
                
                {(weatherData && ( Object.keys(weatherData).length !== 0)) ? (
                <section className="today-weather">
                        <p style={{fontSize: "50px"}}>{today.temp}<span>°{unit}</span></p>
                        <p style={{fontSize: "30px"}}>{today.state}</p>
                        <p style={{fontSize: "20px"}}>Today •   {today.week}, {today.day} {today.month}</p>
                        <p style={{fontSize: "20px"}}> <span class="material-icons" style={{paddingRight:"5px"}}>location_on</span><span>{weatherData.title}</span></p>
                </section>)
                :
                <section></section>}
            </>
        );
    }
}

export default Sidebar;