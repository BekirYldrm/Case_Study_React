import React from "react";
import Input from "./Input";

function Form(props) {


    return (
        <div>
            <form onSubmit={props.handleSumbit}>

                <Input name="latInput" label="Latitude" />

                <Input name="longInput" label="Longitude" />

                <Input name="radInput" label="Radius" />

                <button type="submit">Search on Map</button>

            </form>
        </div>
    );
};

export default Form;