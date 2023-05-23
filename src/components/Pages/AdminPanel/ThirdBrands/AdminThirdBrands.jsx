import React from "react";
import { useState } from "react";

import ThirdBrand from "./ThirdBrand";

import classes from "./AdminThirdBrands.module.css";

// prettier-ignore
const DUMMY_THIRD_BRANDS = [
  { id: "e1", name: "Third Brand 1", imgs: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"], desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore velit molestiae dolorum totam. Error cumque doloremque nisi eos itaque." },
  { id: "e2", name: "Third Brand 2", imgs: ["img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"], desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore velit molestiae dolorum totam. Error cumque doloremque nisi eos itaque." },
  { id: "e3", name: "Third Brand 3", imgs: ["img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg"], desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore velit molestiae dolorum totam. Error cumque doloremque nisi eos itaque." }
];

const AdminThirdBrands = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [thirdBrands, setThirdBrands] = useState(DUMMY_THIRD_BRANDS);
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();

  const updateThirdBrands = (event) => {
    const tempArr = thirdBrands.map((el) => (el.id === event.id ? event : el));

    // console.log(tempArr);
    thirdBrands(tempArr);
  };
  const addThirdBrand = (e) => {
    e.preventDefault();

    if (!title || !description || !file1) {
      alert("Please fill all fields");
      return;
    }

    const tempId = `j${thirdBrands.length + 1}`;
    // prettier-ignore
    const tempJob = [{ id: tempId, name: title, imgs: [file1, file2, file3, file4], desc: description}];

    const tempArr = thirdBrands.concat(tempJob);

    thirdBrands(tempArr);
    setIsAdding(false);
  };

  const deleteHandler = (id) => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to delete this Third Party Brand?" );
    if (!res) return;

    setThirdBrands((prev) => prev.filter((el) => el.id !== id));
  };
  const cancelHandler = () => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to cancel adding new Third Party Brand?" );
    if (!res) return;

    setTitle("");
    setDescription("");
    setFile1();
    setFile2();
    setFile3();
    setFile4();
    setIsAdding(false);
  };

  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.thirdBrandsHeader} onClick={() => setIsExpanded((prev) => !prev)}>
          <p className={classes.thirdBrandsHeaderText}><span>Third Party Brands</span><span><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></p>
        </div>
        <div className={`${classes.thirdBrandContent} ${!isExpanded ? classes.inactive : ''}`}>
          <ul className={classes.thirdBrands}>
            {thirdBrands.map((thirdBrand) => {
              const { id, name, imgs, desc } = thirdBrand;

              return (
                <li key={id} className={classes.thirdBrand}>
                  <ThirdBrand id={id} name={name} imgs={imgs} desc={desc} updateThirdBrands={updateThirdBrands} deleteHandler={deleteHandler}/>
                </li>
              );
            })}
          </ul>
          {isAdding && (
            <div className={classes.thirdBrandFormContent}>
              <form className={`${classes.form} ${!isExpanded ? classes.inactive : ''}`} onSubmit={addThirdBrand}>
                <label htmlFor="name" className={classes.label}><span className={classes.labelText}>Event name</span><input id="name" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
                <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description:</span><textarea name="event description" id="description" aria-label="event description" value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textarea} required></textarea></label>
                <label htmlFor="img1" className={classes.label}><span className={classes.labelText}>Upload Image 1</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img1" value={file1} onChange={(e) => setFile1(e.target.value)} required placeholder=".jpg,.png,.webp " /></label>
                <label htmlFor="img2" className={classes.label}><span className={classes.labelText}>Upload Image 2</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img2" value={file2} onChange={(e) => setFile2(e.target.value)} required placeholder=".jpg,.png,.webp" /></label>
                <label htmlFor="img3" className={classes.label}><span className={classes.labelText}>Upload Image 3</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img3" value={file3} onChange={(e) => setFile3(e.target.value)} required placeholder=".jpg,.png,.webp" /></label>
                <label htmlFor="img4" className={classes.label}><span className={classes.labelText}>Upload Image 4</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img4" value={file4} onChange={(e) => setFile4(e.target.value)} required placeholder=".jpg,.png,.webp" /></label>
                <div className={classes.btns}>
                  <button className={classes.btn} type="submit">Add</button>
                  <button className={classes.btn} onClick={cancelHandler}>Cancel</button>
                </div>
            </form>
          </div>)}

          {!isAdding && <div className={classes.addThirdBrand}><button className={classes.addThirdBrandBtn} onClick={() => setIsAdding(true)}>Add Third Party Brand</button></div>}
        </div>
      </div>
    </section>
  );
};

export default AdminThirdBrands;
