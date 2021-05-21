import './Sidebar.css';
import clear from './../../assets/Clear.png';
import cloudbackground from './../../assets/Cloud-background.png';

const Sidebar = () => {

    return(
        <div className="sidebar">
            <section className="search-location">
                <button>Search for a place</button>
                <i class="material-icons md-dark md-48 md-white">my_location</i>
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

export default Sidebar;