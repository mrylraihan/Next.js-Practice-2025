"use client"
import React, { useRef } from "react";
import classes from "./image-picker.module.css";

function ImagePicker({ label, name }) {
    const imageInputRef = useRef();
    const handlePickClick = () => {
      console.log("Open Sesame")
    }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={classes.input}
          ref={imageInputRef}
        />
        <button type="button" className={classes.button} onClick={handlePickClick}>Choose Image</button>   
      </div>
    </div>
  );
}

export default ImagePicker;
