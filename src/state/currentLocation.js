import { useEffect, useState } from 'react';

function GetCurrentLocation(userLocation)  {

    const [position, setPosition] = useState("");


    useEffect(() => {

        function fetchCityName() {

            try {

                function fun(lat, lon) {

                    setPosition(`lattlong=${lat},${lon}`)
                }

                navigator.geolocation.getCurrentPosition((position) => {
                    fun(position.coords.latitude, position.coords.longitude);
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