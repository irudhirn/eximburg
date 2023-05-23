import React from "react";
import { useState } from "react";

import Wrapper from "../../../UI/Wrapper";

import { DUMMY_PRODUCT_CATEGORIES as categories } from "../../../../store/constants";

import classes from "./OurProduct.module.css";

const OurProduct = ({ id, name, img, desc, updateProducts, deleteHandler }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState(name);
  const [description, setDescription] = useState(desc);
  const [category, setCategory] = useState("");
  const [file1, setFile1] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(title, file1, description);

    // prettier-ignore
    updateProducts({ id: id, name: title, img: file1, desc: description, category: category });

    // setTitle("");
    // setExperience("");
    // setSalaryOffered("");
    // setDescription("");
    setIsExpanded(false);
  };

  //   prettier-ignore
  return (
    <div className={classes.product}>
        <div className={classes.productHeader} onClick={() => setIsExpanded((prev) => !prev)}><span className={classes.productHeaderText}>{name}</span><span className={classes.plusIcon}><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></div>
        <form className={`${classes.form} ${!isExpanded ? classes.inactive : ''}`} onSubmit={submitHandler}>
            <label htmlFor="role" className={classes.label}><span className={classes.labelText}>Product name:</span><input id="role" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
            <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description:</span><textarea name="job description" id="description" aria-label="job description" value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textarea} required></textarea></label>
            <label htmlFor="category" className={classes.label}><span className={classes.labelText}>Category:</span>
                <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)} className={classes.dropdownField}>
                    <option value="">Select</option>
                    {categories.map((category) => {
                      const {id, name} = category;

                      return (
                        // <Wrapper>
                          <option key={id} value={`${name.toLowerCase().split(' ').join('-')}`}>{name}</option>
                        // </Wrapper>
                      )
                    })}
                </select>
            </label>
            <label htmlFor="img1" className={classes.label}><span className={classes.labelText}>Upload Image</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img1" value={file1} onChange={(e) => setFile1(e.target.value)} required placeholder=".jpg,.png,.webp " /></label>
            <div className={classes.btns}>
              <button className={classes.btn} type="submit">Submit</button>
              <button className={classes.btn} onClick={() => deleteHandler(id)}>Delete Product</button>
            </div>
        </form>
    </div>
  )
};

export default OurProduct;

/*

<option value="ayurvedic-dhoompan">Ayurvedic Dhoompan</option>
<option value="skin-care-products">Skin Care Products</option>
<option value="hair-care-products">Hair Care Products</option>
<option value="personal-care-products">Personal Care Products</option>
<option value="empty-cigarette-tube">Empty Cigarette Tube</option>
<option value="wooden-smoking-pipes">Wooden Smoking Pipes</option>
<option value="cosmetic-products-third-party-manufacturer">Cosmetic Products Third Party Manufacturer</option>
<option value="cow-urine">Cow Urine</option>
<option value="ayurvedic-smoking-stick">Ayurvedic Smoking Stick</option>
<option value="pre-rolled-cones">Pre Rolled Cones</option>
<option value="herbal-mixture">Herbal Mixture</option>
<option value="cigarette-filter">Cigarette Filter</option>
<option value="shot-spray">Shot Spray</option>
<option value="nicotine-gum">Nicotine Gum</option>
<option value="herbal-nasal-stuff">Herbal Nasal Stuff</option>

*/
