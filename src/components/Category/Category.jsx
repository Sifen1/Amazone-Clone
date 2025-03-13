// import React from 'react'
// import { categoryInfos } from './CategoryFullinfos';
// import CategoryCard from './CategoryCard'
// import classes from './Category.module.css'

// function Category() {
//   return (
//     <section className={classes.category_container}>
//     {categoryInfos.map((infos, index) => (
//       <CategoryCard key={index} data={infos} />
//     ))}
//   </section>
//   )
// }

// export default Category
import React from "react";
import { CategoryInfos} from "./CategoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.category__container}>
      {CategoryInfos.map((infos) => (
        <CategoryCard key={infos.name} data={infos} /> 
      ))}
    </section>
  );
}

export default Category;
