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
        setPickedImage(null);
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = () => {
        console.log(fileReader.result)
        setPickImage(fileReader.result);
      }
      fileReader.readAsDataURL(file);
      
    }

// const handleImageChange = (event) => {
//   const files = event.target.files;

//   if (!files || files.length === 0) return;

//   const images = [];

//   Array.from(files).forEach((file) => {
//     if (!(file instanceof Blob)) return; // extra safety

//     const reader = new FileReader();

//     reader.onload = () => {
//       images.push(reader.result);

//       // when all files are read
//       if (images.length === files.length) {
//         setPickImage(images); // array of images
//       }
//     };

//     reader.readAsDataURL(file);
//   });
// };

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
          multiple
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button type="button" 
        className={classes.button} 
        onClick={handlePickClick}>Choose Image</button>   
      </div>
    </div>
  );
}

export default ImagePicker;
