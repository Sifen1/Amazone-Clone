import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from "../Product/Product.module.css"

function Productcard({ product }) {
  const { title, image, rating, price, id } = product
  return (
    <div className={classes.card_container}>
        <a href = "">
            <img src={image} alt="product tittle" />
            </a>
            <div>
                <h3>{title}</h3>
                <div className={classes.rating}>
                    {/* /* rating */ }
                    <Rating value={rating.rate} precision={0.1} />
                    {/* count */}
                    <small>{rating.count}</small>
                    </div>
                  </div>
                  <div>
                    {/* price */}
                    <CurrencyFormat amount={price}/>
                  
               <button className={classes.button}>
                add to cart
               </button>
               </div>
    </div>
  )
}

export default Productcard