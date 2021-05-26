import './Day.css';

const Day = ({info}) => {

    if(info) {
        return(
        
            <div className="day">
                <p>{info.date}</p>
                <img style={{width: "70%", height: "40%"}} src={info.state_img} alt="img"></img>
                <div className="temps">
                    <div><p>{info.min_temp}°C</p></div>
                    <div><p>{info.max_temp}°C</p></div>
                </div>
            </div>
        );
    }

    else {
        return(
            <div className="day"></div>
        );
        
    }
    
}

export default Day;