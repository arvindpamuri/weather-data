import { useEffect, useState } from 'react';

function GetCurrentLocation(userLocation)  {

    const [position, setPosition] = useState("");


    useEffect(() => {

        function fetchCityName() {

            try {
                setPosition("");

                function fun(lat, lon) {

                    setPosition(`lattlong=${lat},${lon}`)
                }

                navigator.geolocation.getCurrentPosition((position) => {
                    fun(position.coords.latitude, position.coords.longitude);
                },
                function(error) {
                    if (error.code === error.PERMISSION_DENIED)
                      window.alert("You denied access to your location. Defaulting to Hyderabad")
                      setPosition("lattlong=17.3850,78.4867");
                  });                
            }
            catch (error){
                console.log(error)

            }
        }

        fetchCityName()

        
    }, [userLocation]);

    return position;
}

export default GetCurrentLocation;