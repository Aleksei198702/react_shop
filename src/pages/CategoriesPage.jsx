import React from "react";
import Categories from "../components/Categories/Categories";
import Contact from "../components/Contact/Contact";
import HeaderBorder from "../components/Header/HeaderBorder";
import AllCategories from "../components/Categories/AllCategories";

const CategoriesPage = () => {
  return (
    <>
      <HeaderBorder />
      <main>
        <AllCategories />
        <Contact />
      </main>
    </>
  );
};

export default CategoriesPage;
