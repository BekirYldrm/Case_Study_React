import React from "react";

function Input(props) {

    

    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="number" name={props.name} id={props.id}  />
        </div>
    )

}
export default Input;

