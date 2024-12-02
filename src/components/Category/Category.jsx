import React from "react";
import { catagoryInfos } from "./catagoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {
        catagoryInfos.map((info) => (
          <CategoryCard data={info} />
        ))
      }
    </section>
  );
}

export default Category;



