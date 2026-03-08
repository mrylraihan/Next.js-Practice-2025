"use client"
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";

function ImagePicker({ label, name }) {

  const [pickImage, setPickImage] = useState();
    const imageInputRef = useRef();
    const handlePickClick = (e) => {
      imageInputRef.current.click()
      console.log("Open Sesame")
      // console.log(imageInputRef.current.files[0])
    }
    const handleImageChange = (event) => {
      imageInputRef.current.click()
      const file = event.target.files[0];
      if (file) {
        setPickImage(file);
      }
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
          onChange={handleImageChange}
        />
        <button type="button" className={classes.button} onClick={handlePickClick}>Choose Image</button>   
      </div>
    </div>
  );
}

export default ImagePicker;
