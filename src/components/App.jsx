import React, { useState } from "react";
import Form from "./Form";
import Axios from "axios";
import Card from "./Card";

function App() {
  const [results, setResults] = useState([]);


  function Sumbitted(event) {
    const latValue = event.target.latInput.value;
    const longValue = event.target.longInput.value;
    const radValue = event.target.radInput.value;

    async function backendRequest(lat, long, rad) {
      const response = await Axios.get(
        `https://server-nodejs-h4h0.onrender.com/placesNearby?lat=${lat}&long=${long}&rad=${rad}`
      );

      setResults(response.data);
    }

    backendRequest(latValue, longValue, radValue);

    event.preventDefault();
  }

  function createCard(result) {
    console.log(result?.photos); // photostan dönenlere baktım html attributonsda link var haritayı açıyor

    return (
      <Card
        name={result?.name}
        vicinity={result?.vicinity}
        rating={result?.rating}
        userRatingsTotal={result?.user_ratings_total}
        photoReference={result?.photos && result?.photos[0].photo_reference}
        photoHeight={result?.photos && result?.photos[0].height}
        photoWidth={result?.photos && result?.photos[0].width}
        
      />
    );
  }

  return (
    <div className="row">
      <Form handleSumbit={Sumbitted} />
      {results.map(createCard)}
    </div>
  );
}
export default App;
