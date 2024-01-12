import React from "react";

function Input(props) {
  return (
    <div className="input-div col">
      <label className="label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        step={0.00000001}
        className="input"
        type="number"
        name={props.name}
        id={props.id}
      />
    </div>
  );
}
export default Input;
