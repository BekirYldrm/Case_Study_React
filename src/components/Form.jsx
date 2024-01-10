import React from "react";
import Input from "./Input";

function Form(props) {


    return (
        <div>
            <form onSubmit= { props.handleSumbit}>

                <Input name="latInput" label="Latitude" id="latId" />

                <Input name="longInput" label="Longitude" id="longId"/>

                <Input name="radInput" label="Radius" id="radId" />

                <button type="submit">Search on Map</button>

            </form>
        </div>
    );
};

export default Form;