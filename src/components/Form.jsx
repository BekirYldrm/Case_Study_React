import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <div className="form">
      <form className="row" onSubmit={props.handleSumbit}>
        <Input name="latInput" label="Latitude" id="latId" />

        <Input name="longInput" label="Longitude" id="longId" />

        <Input name="radInput" label="Radius" id="radId" />

        <Button />
      </form>
    </div>
  );
}

export default Form;
