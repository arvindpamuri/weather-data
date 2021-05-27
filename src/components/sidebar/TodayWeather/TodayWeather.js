import './TodayWeather.css'

export const TodayWeather = ({weatherData, unit}) => {

    let today = {};
    let week = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    if ( Object.keys(weatherData).length !== 0) {

        let day_consolidated = weatherData.consolidated_weather[0];

        if (unit === 'F') {
            today["temp"] = Math.floor((day_consolidated.the_temp * 9.0/5.0) + 32.0);
        }
        else {
            today["temp"] = Math.floor(day_consolidated.the_temp);
        }

        today["state"] = day_consolidated.weather_state_name;
        today["state_img"] = `https://www.metaweather.com/static/img/weather/${day_consolidated.weather_state_abbr}.svg`;

        const d = new Date(day_consolidated.applicable_date);
        today["week"] = week[d.getDay()];
        today["day"] = d.getDate();
        today["month"] = d.toLocaleString('default', { month: 'short' });
        
    }

    return(

        (weatherData) ? (
            <section className="weather-display-section">
                    <p style={{fontSize: "50px"}}>{today.temp}<span>°{unit}</span></p>
                    <p style={{fontSize: "30px"}}>{today.state}</p>
                    <p style={{fontSize: "20px"}}>Today •   {today.week}, {today.day} {today.month}</p>
                    <p style={{fontSize: "20px"}}> <span class="material-icons" style={{paddingRight:"5px"}}>location_on</span><span>{weatherData.title}</span></p>
            </section>)
            :
            <section></section>
    );
}