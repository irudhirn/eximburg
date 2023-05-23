import React from "react";

import AdminBlogs from "./Blogs/AdminBlogs";
import AdminBrands from "./Brands/AdminBrands";
import AdminGallery from "./Gallery/AdminGallery";
import AdminJobs from "./Jobs/AdminJobs";
import AdminProducts from "./Products/AdminProducts";
import ProdCategories from "./ProdCategories/ProdCategories";
import AdminThirdBrands from "./ThirdBrands/AdminThirdBrands";

const AdminPanel = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "20px"
      }}
    >
      <AdminBlogs />
      <AdminBrands />
      <AdminGallery />
      <AdminJobs />
      <AdminProducts />
      <ProdCategories />
      <AdminThirdBrands />
    </div>
  );
};

export default AdminPanel;
