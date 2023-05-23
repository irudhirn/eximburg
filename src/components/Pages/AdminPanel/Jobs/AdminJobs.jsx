import React from "react";
import { useState } from "react";

import axios from "axios";

import Job from "./Job";

import classes from "./AdminJobs.module.css";

// prettier-ignore
const DUMMY_JOBS = [
    {id: 'j1', name: 'Sales Executive', exp: '2 - 3 years', salary: 'Not disclosed', location: 'Surat, Gujarat', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta adipisci hic nesciunt quod fugiat, suscipit expedita quis voluptas inventore ratione laborum, sit tempore voluptate voluptatibus eos quaerat? Aut ex laboriosam magni natus quia obcaecati, ab sunt sit perferendis dolore officiis delectus, assumenda consequatur cupiditate! Explicabo adipisci quo eveniet repudiandae?'},
    {id: 'j2', name: 'Senior Sales Manager', exp: '7+ years', salary: 'Not disclosed', location: 'Surat, Gujarat', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta adipisci hic nesciunt quod fugiat, suscipit expedita quis voluptas inventore ratione laborum, sit tempore voluptate voluptatibus eos quaerat? Aut ex laboriosam magni natus quia obcaecati, ab sunt sit perferendis dolore officiis delectus, assumenda consequatur cupiditate! Explicabo adipisci quo eveniet repudiandae?'},
    {id: 'j3', name: 'Telecaller', exp: '0 - 1 years - Freshers can apply', salary: 'Not disclosed', location: 'Surat, Gujarat', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta adipisci hic nesciunt quod fugiat, suscipit expedita quis voluptas inventore ratione laborum, sit tempore voluptate voluptatibus eos quaerat? Aut ex laboriosam magni natus quia obcaecati, ab sunt sit perferendis dolore officiis delectus, assumenda consequatur cupiditate! Explicabo adipisci quo eveniet repudiandae?'},
];

const AdminJobs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [jobs, setJobs] = useState(DUMMY_JOBS);
  const [title, setTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [salaryOffered, setSalaryOffered] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const updateJobs = (job) => {
    const tempArr = jobs.map((el) => (el.id === job.id ? job : el));

    // console.log(tempArr);
    setJobs(tempArr);
    setIsAdding(false);
    setTitle("");
    setExperience("");
    setSalaryOffered("");
    setLocation("");
    setDescription("");
  };

  const addJob = (e) => {
    e.preventDefault();

    if (!title || !experience || !salaryOffered || !description || !location) {
      alert("Please fill all fields");
      return;
    }

    const tempId = `j${jobs.length + 1}`;
    // prettier-ignore
    const tempJob = [{ id: tempId, name: title, exp: experience, salary: salaryOffered, location: location, desc: description}];

    const tempArr = jobs.concat(tempJob);

    setJobs(tempArr);
    setIsAdding(false);
  };

  const deleteHandler = (id) => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to delete this Job Post?" );
    if (!res) return;

    setJobs((prev) => prev.filter((el) => el.id !== id));
  };

  const cancelHandler = () => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to cancel adding new job?" );
    if (!res) return;

    setTitle("");
    setExperience("");
    setSalaryOffered("");
    setLocation("");
    setDescription("");
    setIsAdding(false);
  };

  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.jobHeader} onClick={() => setIsExpanded((prev) => !prev)}>
            <p className={classes.jobHeaderText}><span>Careers</span><span><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></p>
        </div>
        <div className={`${classes.jobsContent} ${!isExpanded ? classes.inactive : ''}`}>
          <ul className={classes.jobs}>
            {jobs.map((job) => {
              const { id, name, exp, salary, location, desc } = job;

              return (
                <li key={id} className={classes.job}>
                  <Job id={id} name={name} exp={exp} salary={salary} location={location} desc={desc} updateJobs={updateJobs} deleteHandler={deleteHandler}/>
                </li>
              );
            })}
          </ul>
        
        {isAdding && <div className={classes.jobFormContent}>
            <form onSubmit={addJob} className={classes.form}>
                <label htmlFor="role" className={classes.label}><span className={classes.labelText}>Job Profile:</span><input id="role" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
                <label htmlFor="experience" className={classes.label}><span className={classes.labelText}>Experience:</span><input id="experience" type='text' value={experience} onChange={(e) => setExperience(e.target.value)} className={classes.inputField} required/></label>
                <label htmlFor="salary" className={classes.label}><span className={classes.labelText}>Salary:</span><input id="salary" type='text' value={salaryOffered} onChange={(e) => setSalaryOffered(e.target.value)} className={classes.inputField} required/></label>
                <label htmlFor="location" className={classes.label}><span className={classes.labelText}>Location:</span><input id="location" type='text' value={location} onChange={(e) => setLocation(e.target.value)} className={classes.inputField} required/></label>
                <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description:</span><textarea name="job description" id="description" aria-label="job description" value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textarea} required></textarea></label>
                <div className={classes.btns}>
                  <button className={classes.btn} type="submit">Add</button>
                  <button className={classes.btn} onClick={cancelHandler} type="button">Cancel</button>
                </div>
            </form>
        </div>}
                {/* <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description:</span><input id="description" type='text' value={description} onChange={(e) => setDescription(e.target.value)} className={classes.inputField} required/></label> */}
        {!isAdding && <div className={classes.addJob}><button className={classes.addJobBtn} onClick={() => setIsAdding(true)}>Add Job</button></div>}
        </div>
      </div>
    </section>
  );
};

export default AdminJobs;
