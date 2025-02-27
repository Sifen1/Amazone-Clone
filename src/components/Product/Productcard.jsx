import React, {useContext} from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from '../Product/Product.module.css';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
//import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

function Productcard({ product,flex,renderDesc }) {
  if (!product) {
    return <p>Loading product...</p>; 
  }

  const { title, image, rating = {}, price, id ,description} = product;
  const { rate = 0, count = 0 } = rating; 

  //const [satate,dispatch]=useContext(DataContext)
  const addToCart =()=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item:{
        title, image, rating , price, id ,description

      }
    })
  }




  return (
    <div className={clsx(classes.card_container, { [classes.product_flexed]: flex })}>
      <Link to={`/Products/${id}`}>
        <img src={image} alt={title || 'Products image'} />
      </Link>
      <div>
        <h3>{title || 'No title available'}</h3>
        {renderDesc && <p> {description || 'No description available'}</p>} 
        <div className={classes.rating}>
          <Rating value={rate} precision={0.1} />
          <small>{count} reviews</small>
        </div>
      </div>
      <div>
        <CurrencyFormat amount={price || 0} />
        <button className={classes.button} onClick={addToCart}>
          Add to cart
    </button>
      </div>
    </div>
  );
}

export default Productcard;
