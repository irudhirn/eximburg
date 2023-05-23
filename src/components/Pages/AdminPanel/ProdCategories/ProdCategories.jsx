import React from "react";
import { useState } from "react";

import Category from "./Category";
import { DUMMY_PRODUCT_CATEGORIES } from "../../../../store/constants";

import classes from "./ProdCategories.module.css";

const ProdCategories = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [categories, setCategories] = useState(DUMMY_PRODUCT_CATEGORIES);
  const [title, setTitle] = useState("");

  const updateJobs = (category) => {
    const tempArr = categories.map((el) =>
      el.id === category.id ? category : el
    );

    // console.log(tempArr);
    setCategories(tempArr);
    setIsAdding(false);
  };

  const addJob = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please fill all fields");
      return;
    }

    const tempId = `p${categories.length + 1}`;
    // prettier-ignore
    const tempCategories = [{ id: tempId, name: title, }];

    const tempArr = categories.concat(tempCategories);

    setCategories(tempArr);
    setIsAdding(false);
  };

  const deleteHandler = (id) => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to delete this Product Category?" );
    if (!res) return;

    setCategories((prev) => prev.filter((el) => el.id !== id));
  };

  const cancelHandler = () => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to cancel adding new Category?" );
    if (!res) return;

    setTitle("");
    setIsAdding(false);
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div
          className={classes.categoryHeader}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <p className={classes.categoryHeaderText}>
            <span>Product Categories</span>
            <span>
              <i
                className={`fa-solid ${!isExpanded ? "fa-plus" : "fa-minus"}`}
              ></i>
            </span>
          </p>
        </div>
        <div
          className={`${classes.categoryContent} ${
            !isExpanded ? classes.inactive : ""
          }`}
        >
          <ul className={classes.categories}>
            {categories.map((job) => {
              const { id, name } = job;

              return (
                <li key={id} className={classes.category}>
                  <Category
                    id={id}
                    name={name}
                    updateJobs={updateJobs}
                    deleteHandler={deleteHandler}
                  />
                </li>
              );
            })}
          </ul>

          {isAdding && (
            <div className={classes.categoryFormContent}>
              <form onSubmit={addJob} className={classes.form}>
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
                    Add
                  </button>
                  <button
                    className={classes.btn}
                    onClick={cancelHandler}
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
          {/* <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description:</span><input id="description" type='text' value={description} onChange={(e) => setDescription(e.target.value)} className={classes.inputField} required/></label> */}
          {!isAdding && (
            <div className={classes.addCategory}>
              <button
                className={classes.addCategoryBtn}
                onClick={() => setIsAdding(true)}
              >
                Add Job
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProdCategories;
