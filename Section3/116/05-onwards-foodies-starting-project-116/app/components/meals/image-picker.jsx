"use client"
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {

  const [pickImage, setPickImage] = useState();
    const imageInputRef = useRef();
    const handlePickClick = (e) => {
      imageInputRef.current.click()
      console.log("Open Sesame")
    }
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      console.log(file)
      if (!file) {
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = () => {
        console.log(fileReader.result)
        setPickImage(fileReader.result);
      }
      fileReader.readAsDataURL(file);
      
    }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickImage && <Image src={pickImage} alt="Preview" fill/>}
          {!pickImage && <p>No image selected......</p>}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={classes.input}
          ref={imageInputRef}
          onChange={handleImageChange}
        />
        <button type="button" 
        className={classes.button} 
        onClick={handlePickClick}>Choose Image</button>   
      </div>
    </div>
  );
}

export default ImagePicker;
