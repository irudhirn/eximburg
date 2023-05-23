import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import classes from "./Categories.module.css";

// prettier-ignore
export const DUMMY_PROD_CATEGORIES = [
  { id: "p1", name: "Face Care Product", page: "/products-category/face-care-products", },
  { id: "p2", name: "Hair Care Products", page: "/products-category/hair-care-products", },
  { id: "p3", name: "Men's Care Products", page: "/products-category/mens-care-products", },
  { id: "p4", name: "Personal Care Products", page: "/products-category/personal-care-products", },
  { id: "p5", name: "Third Party Cosmetic Beauty Products", page: "/products-category/third-party-cosmetic-beauty-products", },
  { id: "p6", name: "Third Party Ayurvedic Beauty Products", page: "/products-category/third-party-ayurvedic-beauty-products", }
];

const Categories = ({ setCurCategory, categoryHandler }) => {
  const [categories, setCategories] = useState(DUMMY_PROD_CATEGORIES);

  const params = useParams();

  setCurCategory(params.someProductCategory);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h4 className={classes.title}>Explore</h4>
        <div className={classes.categoriesContainer}>
          <ul className={classes.categories}>
            {categories.map((category, i) => {
              const { id, name, page } = category;

              return (
                <li
                  key={id}
                  className={`${classes.category} ${
                    page.split("/").pop() === params.someProductCategory
                      ? classes.active
                      : ""
                  }`}
                >
                  <span className={classes.rightIcon}>
                    <i className="fa-solid fa-caret-right"></i>
                  </span>
                  <Link to={page}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Categories;
