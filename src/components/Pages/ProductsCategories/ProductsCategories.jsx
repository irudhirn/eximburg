import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Categories from "./Categories/Categories";
import ProductsCategoriesPopup from "./ProductsCategoriesPopup";
import { ALL_PRODUCTS_2 } from "../../../store/constants";
import Wrapper from "../../UI/Wrapper";

import classes from "./ProductsCategories.module.css";

const ProductsCategories = () => {
  const [prodPopupId, setProdPopupId] = useState("");

  const [prodPopup, setProdPopup] = useState(false);
  const [curCategory, setCurCategory] = useState("");

  const [isExpanded, setIsExpanded] = useState(false);

  const openProdPopup = () => setProdPopup(true);
  const closeProdPopup = () => setProdPopup(false);

  const params = useParams();

  useEffect(() => {
    setCurCategory(params.someProductCategory);
  }, []);

  return (
    <Wrapper>
      {prodPopup && (
        <ProductsCategoriesPopup
          curCategory={curCategory}
          openProdPopup={openProdPopup}
          closeProdPopup={closeProdPopup}
          prodPopupId={prodPopupId}
        />
      )}
      <section className={classes.section}>
        <div className={classes.hero}>
          <p className={classes.pageTitle}>Explore our wide</p>
          <h2 className={classes.pageHeading}>
            range of&nbsp;
            <span style={{ color: "#FFF" }} className={classes.gradientText}>
              products
            </span>
          </h2>
        </div>
        <div className={classes.container}>
          <div
            className={`${classes.sideBar} ${isExpanded ? classes.active : ""}`}
          >
            <div className={classes.toggleBox}>
              <button
                className={classes.toggleBtn}
                onClick={() => setIsExpanded((prev) => !prev)}
              >
                <i
                  className={`fa-solid fa-${isExpanded ? "times" : "bars"}`}
                ></i>
              </button>
            </div>
            <Categories setCurCategory={setCurCategory} />
          </div>
          <div className={classes.productsContainer}>
            <ul className={classes.products}>
              {ALL_PRODUCTS_2.filter(
                (el, i) => el.category === params.someProductCategory
              ).map((product, i) => {
                const { id, name, img } = product;

                return (
                  <li key={id} className={classes.product}>
                    <Link
                      to={`/product/${name.toLowerCase().split(" ").join("-")}`}
                    >
                      <div className={classes.productEl}>
                        <div className={classes.productElImg}>
                          <img
                            src={require(`../../../resources/images/${img}`)}
                            alt={name}
                            className={classes.prodImg}
                          />
                        </div>
                        <Link
                          to={`/product/${name
                            .toLowerCase()
                            .split(" ")
                            .join("-")}`}
                        >
                          <p className={classes.productElName}>{name}</p>
                        </Link>
                      </div>
                    </Link>
                    <button
                      className={classes.readBtn}
                      onClick={() => {
                        openProdPopup();
                        setProdPopupId(id);
                      }}
                    >
                      <span className={classes.readText}>Read More</span>
                      <span className={classes.arrow}>
                        <i className="fa-solid fa-angles-right"></i>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default ProductsCategories;
