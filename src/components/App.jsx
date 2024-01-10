import React, { useEffect, useState } from "react";
import Form from "./Form";
import Axios from "axios";

function App() {
    const [backendData, setBackendData] = useState([]);


    function Sumbittted(event) {

        const latValue = event.target.latInput.value;
        const longValue = event.target.longInput.value;
        const radValue = event.target.radInput.value;

        console.log(latValue , longValue, radValue);

        async function backendRequest(lat, long, rad) {
            const response = await Axios.get(`http://localhost:8070/placesNearby?lat=${lat}&long=${long}&rad=${rad}`);
            
            setBackendData(response.data)
        }

            backendRequest(latValue, longValue, radValue);

            event.preventDefault();
   

    }

    return (
        <div>
            <Form handleSumbit={Sumbittted} />
        </div>
    )

}
export default App;