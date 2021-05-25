import './Day.css';
import Snow from './../../assets/Snow.png';

const Day = () => {

    return(
        <div className="day">
            <p>Date</p>
            {/* <img src={Snow} alt="img"></img> */}
            <div>
                <span>0</span>
                <span>10</span>
            </div>
        </div>
    );
}

export default Day;