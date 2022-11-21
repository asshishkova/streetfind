import React, { useState } from "react";
import "./form.css";

export const Form = ({ onSubmit }) => {


  // return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>


      <br />

    </div>
  // );

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <form onSubmit={onSubmit}>
      <h2 className="add-item">Add a new item to the map</h2>
      <input placeholder="What is there?" autoFocus className="form-control" id="item" required/>
      { !selectedImage &&
        <input
          type="file"
          className="form-control btn"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      }
      {selectedImage &&
        <div className="selectedImage">
          <img alt="not found" src={URL.createObjectURL(selectedImage)} />
          <button className="btn btn-remove"
            onClick={()=>setSelectedImage(null)}>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
        </div>
      }
      <input placeholder="Add some details" className="form-control" id="description" />
      <button className="form-control btn btn-dark" type="submit">
        Add to the map
      </button>
    </form>
  );
};
export default Form;
