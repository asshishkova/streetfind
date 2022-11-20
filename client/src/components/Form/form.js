import React from "react";
import "./form.css";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="add-item">Add a new item to the map</h2>
      <input placeholder="What is there?" autoFocus className="form-control" id="item" required/>
      <input placeholder="Add some details" className="form-control" id="description" />
      <button className="form-control btn btn-dark" type="submit">
        Add to the map
      </button>
    </form>
  );
};
export default Form;
