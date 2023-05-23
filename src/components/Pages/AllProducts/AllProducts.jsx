import React from "react";
import { useState } from "react";

import Products from "./Products/Products";
import ProductsPopup from "./Products/ProductsPopup";
import Hero from "./Hero/Hero";

const AllProducts = () => {
  const [prodPopupId, setProdPopupId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [prodPopup, setProdPopup] = useState(false);

  const openProdPopup = () => setProdPopup(true);
  const closeProdPopup = () => setProdPopup(false);

  return (
    <>
      {prodPopup && (
        <ProductsPopup
          curPage={currentPage}
          openProdPopup={openProdPopup}
          closeProdPopup={closeProdPopup}
          prodPopupId={prodPopupId}
        />
      )}
      <Hero />
      <Products
        openProdPopup={openProdPopup}
        prodPopupId={prodPopupId}
        setProdPopupId={setProdPopupId}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default AllProducts;
