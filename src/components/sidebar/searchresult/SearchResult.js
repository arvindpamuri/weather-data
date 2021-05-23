import './SearchResult.css'

const SearchResult = ({data, showSearchResult}) => {

    let lst;
    if (data && data !== "") {

        lst = data.map(el => (
            <li key={el.woeid}>
                <button class='result-button'>{el.title}<i class="material-icons">chevron_right</i></button>
                
            </li>
        ))
    }
    

    console.log(data)
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