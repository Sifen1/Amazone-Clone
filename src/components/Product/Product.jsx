import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react' 
import Productcard from './Productcard'
import Classes from './Product.module.css'


function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            setProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <section className={Classes.products_container}>
            {products?.map((singleproduct) => (
                <Productcard product={singleproduct} key={singleproduct.id} /> // ✅ Use `singleproduct.id` as key
            ))}
        </section>
    );
}



export default Product