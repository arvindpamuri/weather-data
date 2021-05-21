import './Mainpage.css';
import Day from  './../day/Day.js'
import Highlight from '../highlight/Highlight';

const Mainpage = () => {

    return(
        <div className="main">
            <section className="changetemp-section">

            </section>
            <section className="days-section">
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
            </section>
            <h1>Today's highlights</h1>
            <section className="highlights-section">
                <Highlight/>
                <Highlight/>
                <Highlight/>
                <Highlight/>
            </section>
            <section>
                <p>Aravind Pamoori @ DevChallenges.io</p>
            </section>
        </div>
    );
}

export default Mainpage;