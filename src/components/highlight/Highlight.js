import './Highlight.css';

const Highlight = ({info}) => {

    if(info) {

        return(
            <div className="highlight">
                <div className="highlight highlight-heading">
                    <span style={{ fontSize: "40px", justifySelf: "flex-start", }}>Today's Highlights</span>
                </div>
                <div className="highlight-item">
                    <span>Wind Status</span>
                    <span style={{ fontSize: "40px"}}>{info.wind_speed}mph</span>
                    <div>
                        <span style={{ transform: [{rotateY: '75deg'}] }} class="material-icons">navigation</span>
                        <span>{info.wind_direction_compass}</span>
                    </div>
                </div>
                <div className="highlight-item">
                    <span>Humidity</span>
                    <span style={{ fontSize: "40px"}}>{info.humidity}%</span>
                    <div className="percentage-desc">
                        <div className="num">
                            <span>0</span>
                            <span>50</span>
                            <span>100</span>
                        </div>
                        <div className="bar">
                            <div style={{ width:`${info.humidity}%`, backgroundColor:"yellow", height: "100%", borderRadius: "25px" }}></div>
                        </div>
                        <div className="percentage">
                            <span>%</span>
                        </div>
                    </div>

                </div>
                <div className="highlight-item" style={{justifyContent: "space-around"}}>
                    <span>Visibility</span>
                    <span style={{ fontSize: "40px" }}>{info.visibility} miles</span>
                </div>
                <div className="highlight-item" style={{justifyContent: "space-around"}}>
                    <span>Air Pressure</span>
                    <span style={{ fontSize: "40px" }}>{info.air_pressure} miles</span>
                </div>

            </div>
        );
    }

    else {
        return(
        <div className="highlight">
                <div className="highlight highlight-heading">
                    <div style={{ fontSize: "40px", width: "100%" }}>Today's Highlights</div>
                </div>
                <div className="highlight-item">
                    
                </div>
                <div className="highlight-item">
                    
                </div>
                <div className="highlight-item">
                    
                </div>
                <div className="highlight-item">
                    
                </div>

        </div>
        );
    }
}

export default Highlight;