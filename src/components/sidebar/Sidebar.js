import { useState } from 'react';

import './Sidebar.css';
import SearchResult from './searchresult/SearchResult';
import clear from './../../assets/Clear.png';
import cloudbackground from './../../assets/Cloud-background.png';

const Sidebar = ({ getLocationName, data }) => {

    const [searchText, setSearchText] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [showSearchResult, setShowSearchResult] = useState(false);
    //const [searchResult, setSearchResult] = useState(data)

    function handleSearch() {
        getLocationName(searchText);
        setShowSearchResult(true)
    }

    const onChangeHandler = (val) => {
        setSearchText(val);
    };

    console.log(searchText)
    //console.log(searchResult)

    if(showSearch) {

        return(
            <div className="sidebar search-sidebar">

                <section className="search-exit">
                    <i class="material-icons md-dark md-48 md-white" onClick={() => setShowSearch(false)}>close</i>
                </section>

                <section className='search-location-section'>
                    <div class='search-location'>
                        <span class="material-icons md-48" style={{padding: "5px", display: "flex", alignSelf: 'center'}}>search</span>
                        <input className='search-text' placeholder="Enter Location" onChange={(e) => onChangeHandler(e.target.value)}></input>
                    </div>
                        <button class onClick={() => handleSearch()}>SEARCH</button>
                </section>

                <section className='search-result-section'>
                    <SearchResult data={data} showSearchResult={showSearchResult}/>
                </section>
                
            </div>
        );
    }

    else {

        return(

            <div className="sidebar">
                <section className="search-button-section">
                    <button className="search-button" onClick={() => setShowSearch(true)}>Search Location</button>
                    <button className='btn-circle'><span class="material-icons md-48 md-light">my_location</span></button>
                </section>
                <section className="cloud-display">
                    <img src={cloudbackground} className="cloud-background" alt="logo" />
                    <img src={clear} className="indicator-img" alt="logo"/>
                </section>
                <section className="today-weather">
                    <h1>15C</h1>
                    <h5>Shower</h5>
                </section>
                <section className="date-location">
                    <p>date</p>
                    <p>location</p>
                </section>
            </div>


        );
    }
} 

export default Sidebar;