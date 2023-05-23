import React from "react";
import { useState } from "react";

import classes from "./Job.module.css";

const Job = ({
  id,
  name,
  exp,
  salary,
  location,
  desc,
  updateJobs,
  deleteHandler
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState(name);
  const [experience, setExperience] = useState(exp);
  const [salaryOffered, setSalaryOffered] = useState(salary);
  const [jobLocation, setJobLocation] = useState(location);
  const [description, setDescription] = useState(desc);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(title, experience, salaryOffered, jobLocation, description);

    // prettier-ignore
    updateJobs({ id: id, name: title, exp: experience, salary: salaryOffered, location: jobLocation, desc: description });

    // setTitle("");
    // setExperience("");
    // setSalaryOffered("");
    // setDescription("");
    setIsExpanded(false);
  };

  // prettier-ignore
  return (
    <div className={classes.job}>
        <div className={classes.formHeader} onClick={() => setIsExpanded((prev) => !prev)}><span className={classes.formHeaderText}>{name}, {exp}</span><span className={classes.plusIcon}><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></div>
        <form className={`${classes.form} ${!isExpanded ? classes.inactive : ''}`} onSubmit={submitHandler}>
            <label htmlFor="role" className={classes.label}><span className={classes.labelText}>Job Profile:</span><input id="role" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
            <label htmlFor="experience" className={classes.label}><span className={classes.labelText}>Experience:</span><input id="experience" type='text' value={experience} onChange={(e) => setExperience(e.target.value)} className={classes.inputField} required/></label>
            <label htmlFor="salary" className={classes.label}><span className={classes.labelText}>Salary:</span><input id="salary" type='text' value={salaryOffered} onChange={(e) => setSalaryOffered(e.target.value)} className={classes.inputField} required/></label>
            <label htmlFor="location" className={classes.label}><span className={classes.labelText}>Location:</span><input id="location" type='text' value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} className={classes.inputField} required/></label>
            <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description:</span><textarea name="job description" id="description" aria-label="job description" value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textarea} required></textarea></label>
            <div className={classes.btns}>
              <button className={classes.btn} type="submit">Submit</button>
              <button className={classes.btn} onClick={() => deleteHandler(id)}>Delete Job</button>
            </div>
        </form>
    </div>
  )
};

export default Job;
