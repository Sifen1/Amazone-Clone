// // // import React, {useContext} from 'react';
// // // import Rating from '@mui/material/Rating';
// // // import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
// // // import classes from '../Product/Product.module.css';
// // // import { Link } from 'react-router-dom';
// // // import clsx from 'clsx';
// // // import { DataContext } from '../DataProvider/DataProvider';
// // // import { Type } from '../../Utility/action.type';

// // // function Productcard({ product,flex,renderDesc }) {
// // //   if (!product) {
// // //     return <p>Loading product...</p>; 
// // //   }

// // //   const { title, image, rating = {}, price, id ,description} = product;
// // //   const { rate = 0, count = 0 } = rating; 

// // //   const [state,dispatch]=useContext(DataContext)
// // //   const addToCart =()=>{
// // //     dispatch({
// // //       type:Type.ADD_TO_BASKET,
// // //       item:{
// // //         title, image, rating , price, id ,description

// // //       }
// // //     })
// // //   }



// // //   return (
// // //     <div className={clsx(classes.card_container, { [classes.product_flexed]: flex })}>
// // //       <Link to={`/Products/${id}`}>
// // //         <img src={image} alt={title || 'Products image'} />
// // //       </Link>
// // //       <div>
// // //         <h3>{title || 'No title available'}</h3>
// // //         {renderDesc && <p> {description || 'No description available'}</p>} 
// // //         <div className={classes.rating}>
// // //           <Rating value={rate} precision={0.1} />
// // //           <small>{count} reviews</small>
// // //         </div>
// // //       </div>
// // //       <div>
// // //         <CurrencyFormat amount={price || 0} />
// // //         <button className={classes.button} onClick={addToCart}>
// // //           Add to cart
// // //     </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Productcard;
// // import React, {useContext} from 'react';
// // import Rating from '@mui/material/Rating';
// // import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
// // import classes from '../Product/Product.module.css';
// // import { Link } from 'react-router-dom';
// // import clsx from 'clsx';
// // import { DataContext } from '../DataProvider/DataProvider';
// // import { Type } from '../../Utility/action.type';

// // function Productcard({ product, flex, renderDesc }) {
// //   if (!product) {
// //     return <p>Loading product...</p>; 
// //   }

// //   const { title, image, rating = {}, price, id, description } = product;
// //   const { rate = 0, count = 0 } = rating; 

// //   // Fix: Uncomment and correctly destructure state and dispatch
// //   const [state, dispatch] = useContext(DataContext);
  
// //   const addToCart = () => {
// //     dispatch({
// //       type: Type.ADD_TO_BASKET,
// //       item: {
// //         title, image, rating, price, id, description
// //       }
// //     })
// //   }

// //   return (
// //     <div className={clsx(classes.card_container, { [classes.product_flexed]: flex })}>
// //       <Link to={`/Products/${id}`}>
// //         <img src={image} alt={title || 'Products image'} />
// //       </Link>
// //       <div>
// //         <h3>{title || 'No title available'}</h3>
// //         {renderDesc && <p> {description || 'No description available'}</p>} 
// //         <div className={classes.rating}>
// //           <Rating value={rate} precision={0.1} />
// //           <small>{count} reviews</small>
// //         </div>
// //       </div>
// //       <div>
// //         <CurrencyFormat amount={price || 0} />
// //         <button className={classes.button} onClick={addToCart}>
// //           Add to cart
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Productcard;
// import React, { useContext } from 'react';
// import Rating from '@mui/material/Rating';
// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
// import classes from '../Product/Product.module.css';
// import { Link } from 'react-router-dom';
// import clsx from 'clsx';
// import { DataContext } from '../DataProvider/DataProvider';
// import { Type } from '../../Utility/action.type';

// function Productcard({ product, flex, renderDesc }) {
//   if (!product) {
//     return <p>Loading product...</p>; 
//   }

//   const { title, image, rating = {}, price, id, description } = product;
//   const { rate = 0, count = 0 } = rating; 
  
//   // Fix: Access context in a safer way
//   const contextValue = useContext(DataContext);
//   const dispatch = Array.isArray(contextValue) ? contextValue[1] : null;
  
//   const addToCart = () => {
//     if (dispatch) {
//       dispatch({
//         type: Type.ADD_TO_BASKET,
//         item: {
//           title, image, rating, price, id, description
//         }
//       });
//     } else {
//       console.error("Dispatch function not available in context");
//     }
//   }

//   return (
//     <div className={clsx(classes.card_container, { [classes.product_flexed]: flex })}>
//       <Link to={`/Products/${id}`}>
//         <img src={image} alt={title || 'Products image'} />
//       </Link>
//       <div>
//         <h3>{title || 'No title available'}</h3>
//         {renderDesc && <p> {description || 'No description available'}</p>} 
//         <div className={classes.rating}>
//           <Rating value={rate} precision={0.1} />
//           <small>{count} reviews</small>
//         </div>
//       </div>
//       <div>
//         <CurrencyFormat amount={price || 0} />
//         <button className={classes.button} onClick={addToCart}>
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Productcard;
import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from '../Product/Product.module.css';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

function Productcard({ product, flex, renderDesc,renderAdd }) {
  

  const { title, image, rating = {}, price, id, description } = product;
  const { rate = 0, count = 0 } = rating; 
  
  const contextValue = useContext(DataContext);
  
  // For debugging - add this to see what's in your context
  console.log("Context in ProductCard:", contextValue);
  
  // Check if contextValue is an array with at least 2 elements
  const dispatch = Array.isArray(contextValue) && contextValue.length >= 2 
    ? contextValue[1] 
    : null;
  
  const addToCart = () => {
    if (dispatch) {
      console.log("Dispatching ADD_TO_BASKET with item:", {
        title, image, rating, price, id, description
      });
      
      dispatch({
        type: Type.ADD_TO_BASKET,
        item: {
          title, image, rating, price, id, description
        }
      });
    } else {
      
    }
  }

  return (
    <div className={`${classes.card_container} ${ flex?classes.product_flexed: '' }`}>
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
        {
          renderAdd &&  <button className={classes.button} onClick={addToCart}>
          Add to cart
        </button>
        }
      </div>
    </div>
  );
}

export default Productcard;