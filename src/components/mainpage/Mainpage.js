import './Mainpage.css';
import Day from  './../day/Day.js'
import Highlight from '../highlight/Highlight';

const Mainpage = () => {

    return(

        <div className="main">
            <div className="change-unit">
                <button className="btn-circle">°C</button>
                <button className="btn-circle">°F</button>
            </div>
            <div className="week">
                <Day/>  
                <Day/>
                <Day/>
                <Day/>
                <Day/>
            </div>


        </div>
        // <div className="main">
        //     <section className="changetemp-section">

        //     </section>
        //     <section className="days-section">
        //         <Day/>
        //         <Day/>
        //         <Day/>
        //         <Day/>
        //         <Day/>
        //     </section>
        //     <h1>Today's highlights</h1>
        //     <section className="highlights-section">
        //         <Highlight/>
        //         <Highlight/>
        //         <Highlight/>
        //         <Highlight/>
        //     </section>
        //     <section>
        //         <p>Aravind Pamoori @ DevChallenges.io</p>
        //     </section>
        // </div>
    );
}

export default Mainpage;