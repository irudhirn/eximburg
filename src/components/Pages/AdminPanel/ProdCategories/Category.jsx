import React from "react";
import { useState } from "react";

import classes from "./Category.module.css";

const Category = ({ id, name, updateJobs, deleteHandler }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState(name);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(title);

    // prettier-ignore
    updateJobs({ id: id, name: title, });

    // setTitle("");
    setIsExpanded(false);
  };

  return (
    <div className={classes.job}>
      <div
        className={classes.formHeader}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <span className={classes.formHeaderText}>{name}</span>
        <span className={classes.plusIcon}>
          <i className={`fa-solid ${!isExpanded ? "fa-plus" : "fa-minus"}`}></i>
        </span>
      </div>
      <form
        className={`${classes.form} ${!isExpanded ? classes.inactive : ""}`}
        onSubmit={submitHandler}
      >
        <label htmlFor="role" className={classes.label}>
          <span className={classes.labelText}>Category Name:</span>
          <input
            id="role"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={classes.inputField}
            required
          />
        </label>
        <div className={classes.btns}>
          <button className={classes.btn} type="submit">
            Submit
          </button>
          <button className={classes.btn} onClick={() => deleteHandler(id)}>
            Delete Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default Category;
