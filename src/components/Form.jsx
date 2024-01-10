import React from "react";
import Input from "./Input";

function Form () {
    return (
        <div>
            <form action="">
                <Input name="latInput" />
                <Input name="longInput" />
                <Input name="radInput" />
                <button type="submit">Search on Map</button>
                
            </form>
        </div>
        )

}

export default Form;