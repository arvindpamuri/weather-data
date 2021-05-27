import './Day.css';

const Day = ({info, unit}) => {

    if(info) {

        let min_temp, max_temp;

        if (unit === 'F') {
            min_temp = Math.floor((info.min_temp * 9.0/5.0) + 32.0);
            max_temp = Math.floor((info.max_temp * 9.0/5.0) + 32.0);
        }
        else {
            min_temp = Math.floor(info.min_temp);
            max_temp = Math.floor(info.max_temp);
        }

        return(
        
            <div className="day">
                <p>{info.date}</p>
                <img style={{width: "70%", height: "40%"}} src={info.state_img} alt="img"></img>
                <div className="temps">
                    <div><p>{min_temp}°{unit}</p></div>
                    <div><p>{max_temp}°{unit}</p></div>
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