import './SearchResult.css'

const SearchResult = ({resultData, setResultData,  showSearchResult, setShowSearch, setWoeid, setShowSearchResult}) => {

    let lst;
    function handleLocationClick(woeid) {
        setShowSearch(false);
        setWoeid(woeid);
        setShowSearchResult(false);
        setResultData([]);
    }

    if (resultData && resultData !== "") {

        lst = resultData.map(el => (
            <li key={el.woeid}>
                <button class='result-button' onClick={() => {handleLocationClick(el.woeid)}}>{el.title}<i class="material-icons">chevron_right</i></button>
                
            </li>
        ))
    }
    
    if(showSearchResult && lst) {
        return(
            <ul>
                {lst}
            </ul>
        );
    }

    else {
        return(
            <div></div>
        );
    }
    
}

export default SearchResult;