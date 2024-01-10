import React from "react";

function Input(props) {

    

    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input type="number" name={props.name}  />
        </div>
    )

}
export default Input;

