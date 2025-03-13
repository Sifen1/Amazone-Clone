import React, { useEffect, useState } from 'react';
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { producturl } from '../../Api/endpoints';
import classes from './Results.module.css'; // Ensure the correct file type
import ProductCard from '..//..//components/Product/Productcard';
function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios.get(`${producturl}/products/category/${categoryName}`)
      .then((res) => {
        console.log('API Response:', res.data); // Debugging log
        if (Array.isArray(res.data)) {
          setResults(res.data);
        } else {
          setResults([]); // Prevent errors if response is not an array
        }
      })
      .catch((err) => {
        console.error('API Error:', err);
      });
  }, [categoryName]); // Add categoryName to dependencies

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: '30px' }}>Results</h1>
        <p style={{ padding: '30px' }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results.length > 0 ? (
            results.map((product) => (
              <ProductCard 
              key={product.id} 
              product={product} 
              renderDesc={false}
              renderAdd={true}
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/endpoints";
// import ProductCard from "../../components/Product/ProductCard";
// import Layout from "../../components/Layout/Layout";
// import classes from "./Results.module.css";
// import Loader from "../../components/Loader/Loader";

// function Results() {
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const { categoryName } = useParams(); // Destructure the category name from the URL

//   useEffect(() => {
//     console.log("Fetching products for category:", categoryName); // Debug log

//     axios
//       .get(`${productUrl}/products/category/${categoryName}`)
//       .then((res) => {
//         console.log("API Response:", res.data); // Debug log to check response
//         setResults(res.data);
//         setIsLoading(false); // Set loading to false when data is fetched
//       })
//       .catch((err) => {
//         console.log("Error fetching data:", err);
//         setIsLoading(false); // Set loading to false in case of error
//       });
//   }, [categoryName]); // Run whenever categoryName changes

//   console.log("Results:", results); // Debug log to check if results are populated correctly

//   return (
//     <Layout>
//       <section>
//         <h1 style={{ padding: "30px" }}>Results</h1>
//         <p style={{ padding: "30px" }}>Category: {categoryName}</p>
//         <hr />
//         {isLoading ? (
//           <Loader /> // Show loader while fetching data
//         ) : results.length === 0 ? (
//           <p>No products found in the {categoryName} category.</p>
//         ) : (
//           <div className={classes.products_container}>
//             {results?.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 product={product}
//                 renderAdd={false}
//                 renderDesk={true}
//               />
//             ))}
//           </div>
//         )}
//       </section>
//     </Layout>
//   );
// }

// export default Results;
