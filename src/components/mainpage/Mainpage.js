import './Mainpage.css';
import Day from  './day/Day.js'
import Highlight from './highlight/Highlight';

const Mainpage = ({weatherData, unit, setUnit}) => {


    let day_weather = []
    let weeks = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
    if ( Object.keys(weatherData).length !== 0) {

        const weather_info = weatherData.consolidated_weather;
        for(let i=0; i<weather_info.length; i++) {

            let info = {};

            info["min_temp"] = weather_info[i].min_temp;
            info["max_temp"] = weather_info[i].max_temp;
            info["state"] = weather_info[i].weather_state_name;
            info["state_img"] = `https://www.metaweather.com/static/img/weather/${weather_info[i].weather_state_abbr}.svg`;

            const d = new Date(weather_info[i].applicable_date);
            
            if (i===0) {
                info["wind_speed"] = Math.floor(weather_info[i].wind_speed);
                info["wind_direction_compass"] = weather_info[i].wind_direction_compass;
                info["humidity"] = weather_info[i].humidity;
                info["visibility"] = Math.round(weather_info[i].visibility * 10)/10;
                info["air_pressure"] = weather_info[i].air_pressure;
 
            }

            else {
                let week = weeks[d.getDay()];
                let day = d.getDate();
                let month = d.toLocaleString('default', { month: 'short' });

                if(i===1) {
                    info["date"] = "Tomorrow";
                }

                else {
                    info["date"] = `${week}, ${day} ${month}`;
                }

            }
            day_weather.push(info) 
        }

    }

    return(

        <div >
            <div className="change-unit">
                {(unit==='C') ? 
                    (<button className="btn-circle" style={{ backgroundColor: "#E7E7EB", color: "#110E3C"}} onClick={()=> {setUnit('C')}}>°C</button>)
                    :
                    (<button className="btn-circle"  onClick={()=> {setUnit('C')}}>°C</button>)
                }
                {(unit==='F') ? 
                    (<button className="btn-circle" style={{ backgroundColor: "#E7E7EB", color: "#110E3C"}} onClick={()=> {setUnit('F')}}>°F</button>)
                    :
                    (<button className="btn-circle" onClick={()=> {setUnit('F')}}>°F</button>)
                }
            </div>
            <div className="week">
                <Day 
                    info={day_weather[1]}
                    unit={unit}
                />
                <Day 
                    info={day_weather[2]}
                    unit={unit}
                />
                <Day 
                    info={day_weather[3]}
                    unit={unit}
                />
                <Day 
                    info={day_weather[4]}
                    unit={unit}
                />
                <Day 
                    info={day_weather[5]}
                    unit={unit}
                />
            </div>
            <div className="highlights-section">
                <Highlight info={day_weather[0]}/>
            </div>
        </div>
    );
}

export default Mainpage;