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
