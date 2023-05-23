import React from "react";
import { useState } from "react";

import classes from "./EventImgs.module.css";

const EventImgs = ({ id, name, imgs, desc, updateGallery, deleteHandler }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState(name);
  const [description, setDescription] = useState(desc);
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(title, [file1, file2, file3, file4], description);

    // prettier-ignore
    updateGallery({ id: id, name: title, imgs: [file1, file2, file3, file4], desc: description });
  };

  // prettier-ignore
  return <div className={classes.event}>
    <div className={classes.eventHeader} onClick={() => setIsExpanded((prev) => !prev)}><span className={classes.formHeaderText}>{name}</span><span className={classes.plusIcon}><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></div>
    <form className={`${classes.form} ${!isExpanded ? classes.inactive : ''}`} onSubmit={submitHandler}>
            <label htmlFor="name" className={classes.label}><span className={classes.labelText}>Event name</span><input id="name" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
            {/* <label htmlFor="experience" className={classes.label}><span className={classes.labelText}>Experience:</span>&nbsp;<input id="experience" type='text' value={experience} onChange={(e) => setExperience(e.target.value)} className={classes.inputField} required/></label>
            <label htmlFor="salary" className={classes.label}><span className={classes.labelText}>Salary:</span>&nbsp;<input id="salary" type='text' value={salaryOffered} onChange={(e) => setSalaryOffered(e.target.value)} className={classes.inputField} required/></label> */}
            <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description:</span><textarea name="event description" id="description" aria-label="event description" value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textarea} required></textarea></label>
            <label htmlFor="img1" className={classes.label}><span className={classes.labelText}>Upload Image 1</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img1" value={file1} onChange={(e) => setFile1(e.target.value)} required placeholder=".jpg,.png,.webp " /></label>
            <label htmlFor="img2" className={classes.label}><span className={classes.labelText}>Upload Image 2</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img2" value={file2} onChange={(e) => setFile2(e.target.value)} required placeholder=".jpg,.png,.webp" /></label>
            <label htmlFor="img3" className={classes.label}><span className={classes.labelText}>Upload Image 3</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img3" value={file3} onChange={(e) => setFile3(e.target.value)} required placeholder=".jpg,.png,.webp" /></label>
            <label htmlFor="img4" className={classes.label}><span className={classes.labelText}>Upload Image 4</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img4" value={file4} onChange={(e) => setFile4(e.target.value)} required placeholder=".jpg,.png,.webp" /></label>
            <div className={classes.btns}>
              <button className={classes.btn} type="submit">Submit</button>
              <button className={classes.btn} onClick={() => deleteHandler(id)}>Delete Event</button>
            </div>
        </form>
  </div>;
};

export default EventImgs;

/*

<div className={classes.job}>
        <div className={classes.formHeader} onClick={() => setIsExpanded((prev) => !prev)}><span className={classes.formHeaderText}>{name}, {exp}</span><span className={classes.plusIcon}><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></div>
        <form className={`${classes.form} ${!isExpanded ? classes.inactive : ''}`} onSubmit={submitHandler}>
            <label htmlFor="role" className={classes.label}><span className={classes.labelText}>Job Profile:</span>&nbsp;<input id="role" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
            <label htmlFor="experience" className={classes.label}><span className={classes.labelText}>Experience:</span>&nbsp;<input id="experience" type='text' value={experience} onChange={(e) => setExperience(e.target.value)} className={classes.inputField} required/></label>
            <label htmlFor="salary" className={classes.label}><span className={classes.labelText}>Salary:</span>&nbsp;<input id="salary" type='text' value={salaryOffered} onChange={(e) => setSalaryOffered(e.target.value)} className={classes.inputField} required/></label>
            <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description:</span>&nbsp;<textarea name="job description" id="description" aria-label="job description" value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textarea} required></textarea></label>
            <div className={classes.btns}>
              <button className={classes.btn} type="submit">Submit</button>
              <button className={classes.btn} onClick={() => deleteHandler(id)}>Delete Job</button>
            </div>
        </form>
    </div>

*/
