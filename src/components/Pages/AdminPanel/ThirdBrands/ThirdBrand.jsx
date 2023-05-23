import React from "react";
import { useState } from "react";

import classes from "./ThirdBrand.module.css";

// prettier-ignore
const ThirdBrand = ({ id, name, imgs, desc, updateThirdBrands, deleteHandler}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState(name);
  const [description, setDescription] = useState(desc);
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    // prettier-ignore
    updateThirdBrands({ id: id, name: title, imgs:[file1, file2, file3, file4], desc: description });
  };

  // prettier-ignore
  return (
    <div className={classes.thirdBrand}>
        <div className={classes.thirdBrandHeader} onClick={() => setIsExpanded((prev) => !prev)}><span className={classes.formHeaderText}>{name}</span><span className={classes.plusIcon}><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></div>
        <form className={`${classes.form} ${!isExpanded ? classes.inactive : ''}`} onSubmit={submitHandler}>
            <label htmlFor="name" className={classes.label}><span className={classes.labelText}>Brand name</span><input id="name" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
            <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description:</span><textarea name="event description" id="description" aria-label="event description" value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textarea} required></textarea></label>
            <label htmlFor="img1" className={classes.label}><span className={classes.labelText}>Upload Image 1</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img1" value={file1} onChange={(e) => setFile1(e.target.value)} required placeholder=".jpg,.png,.webp " /></label>
            <label htmlFor="img2" className={classes.label}><span className={classes.labelText}>Upload Image 2</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img2" value={file2} onChange={(e) => setFile2(e.target.value)} required placeholder=".jpg,.png,.webp" /></label>
            <label htmlFor="img3" className={classes.label}><span className={classes.labelText}>Upload Image 3</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img3" value={file3} onChange={(e) => setFile3(e.target.value)} required placeholder=".jpg,.png,.webp" /></label>
            <label htmlFor="img4" className={classes.label}><span className={classes.labelText}>Upload Image 4</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img4" value={file4} onChange={(e) => setFile4(e.target.value)} required placeholder=".jpg,.png,.webp" /></label>
            <div className={classes.btns}>
                <button className={classes.btn} type="submit">Submit</button>
                <button className={classes.btn} onClick={() => deleteHandler(id)}>Delete Brand</button>
            </div>
        </form>
    </div>
);
};

export default ThirdBrand;
