import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import ProdCategories from "../ProdCategories/ProdCategories";
import { ALL_PRODUCTS_2 } from "../../../../store/constants";

import classes from "./Products.module.css";

const Products = ({ setProdPopupId, openProdPopup, setCurrentPage }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [products, setProducts] = useState(ALL_PRODUCTS_2);
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    setCurrentPage(curPage);
  }, [curPage]);

  const params = useParams();

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div
          className={`${classes.sideBar} ${isExpanded ? classes.active : ""}`}
        >
          <div className={classes.toggleBox}>
            <button
              className={classes.toggleBtn}
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              <i className={`fa-solid fa-${isExpanded ? "times" : "bars"}`}></i>
            </button>
          </div>
          <ProdCategories />
        </div>
        <div className={classes.productsContainer}>
          <ul className={classes.products}>
            {products
              .filter((el, i) => +el.page === curPage)
              .map((product) => {
                const { id, name, img, page, desc, details, pageNo } = product;
                // console.log(page);

                return (
                  <li key={id} className={classes.product}>
                    <Link
                      to={`/product/${name.toLowerCase().split(" ").join("-")}`}
                      onClick={() => {}}
                    >
                      <div className={classes.productEl}>
                        <div className={classes.productElImg}>
                          <img
                            src={require(`../../../../resources/images/${img}`)}
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
      <div className={classes.pages}>
        <button
          style={{ display: curPage === 1 ? "none" : "" }}
          onClick={() => setCurPage((prev) => prev - 1)}
          className={`${classes.btn} ${classes.opBtn}`}
        >
          Prev
        </button>
        <button
          onClick={() => setCurPage(1)}
          className={`${classes.btn} ${classes.numBtn} ${
            curPage === 1 ? classes.active : ""
          }`}
        >
          1
        </button>
        <button
          onClick={() => setCurPage(2)}
          className={`${classes.btn} ${classes.numBtn} ${
            curPage === 2 ? classes.active : ""
          }`}
        >
          2
        </button>
        <button
          onClick={() => setCurPage(3)}
          className={`${classes.btn} ${classes.numBtn} ${
            curPage === 3 ? classes.active : ""
          }`}
        >
          3
        </button>
        <button
          onClick={() => setCurPage(4)}
          className={`${classes.btn} ${classes.numBtn} ${
            curPage === 4 ? classes.active : ""
          }`}
        >
          4
        </button>
        <button
          onClick={() => setCurPage(5)}
          className={`${classes.btn} ${classes.numBtn} ${
            curPage === 5 ? classes.active : ""
          }`}
        >
          5
        </button>
        <button
          onClick={() => setCurPage(6)}
          className={`${classes.btn} ${classes.numBtn} ${
            curPage === 6 ? classes.active : ""
          }`}
        >
          6
        </button>
        <button
          style={{ display: curPage === 6 ? "none" : "" }}
          onClick={() => setCurPage((prev) => prev + 1)}
          className={`${classes.btn} ${classes.opBtn}`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Products;
