import React from "react";
import Form from "./Form";

function App() {

    function Sumbittted(event) {
        const latValue = event.target.latInput.value
        const longValue = event.target.longInput.value
        const radValue = event.target.radInput.value

        event.preventDefault();

    }

    return (
        <div>
            <Form handleSumbit={Sumbittted} />
        </div>
    )

}
export default App;