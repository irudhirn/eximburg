import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./ProdCategories.module.css";

// prettier-ignore
export const DUMMY_PROD_CATEGORIES = [
  { id: "p1", name: "Face Care Product", page: "/products-category/face-care-products", },
  { id: "p2", name: "Hair Care Products", page: "/products-category/hair-care-products", },
  { id: "p3", name: "Men's Care Products", page: "/products-category/mens-care-products", },
  { id: "p3", name: "Personal Care Products", page: "/products-category/personal-care-products", },
  { id: "p4", name: "Third Party Cosmetic Beauty Products", page: "/products-category/third-party-cosmetic-beauty-products", },
  { id: "p5", name: "Third Party Ayurvedic Beauty Products", page: "/products-category/third-party-ayurvedic-beauty-products", }
];

// prettier-ignore
const DUMMY_PROD_CATEGORIES_2 = [
  { id: "c2", name: "skin care products", page: "/products-category/skin-care-products", isSelected: false },
  { id: "c3", name: "hair care products", page: "/products-category/hair-care-products", isSelected: false },
  { id: "c4", name: "personal care products", page: "/products-category/personal-care-products", isSelected: false },
  { id: "c7", name: "cosmetic products third party manufacturer", page: "/products-category/cosmetic-products-third-party-manufacturer", isSelected: false },
  { id: "c8", name: "cow urine", page: "/products-category/cow-urine", isSelected: false },
];

const ProdCategories = () => {
  const [categories, setCategories] = useState(DUMMY_PROD_CATEGORIES);
  // const [categories, setCategories] = useState(DUMMY_PROD_CATEGORIES_2);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h4 className={classes.title}>Explore</h4>
        <div className={classes.categoriesContainer}>
          <ul className={classes.categories}>
            {categories.map((category, i) => {
              const { id, name, page, isSelected } = category;

              return (
                <li key={id} className={`${classes.category}`}>
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

export default ProdCategories;
