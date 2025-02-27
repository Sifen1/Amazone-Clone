import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import classes from './Product.module.css';
import Loader from '../Loader/Loader';
import Productcard from './Productcard';

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products.map((singleProduct) => (
            <Productcard product={singleProduct} key={singleProduct.id}/>
          ))}
        </section>
      )}
    </>
  );
}

export default Product;