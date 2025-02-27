import React, { useContext } from 'react';
import { BsCart2, BsSearch } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { DataContext } from '..//DataProvider/DataProvider';


// const Header = () => {
//   const [{basket}, dispatch] = useContext(DataContext);
const Header = () => {
const contextValue = useContext(DataContext);  
const state = Array.isArray(contextValue) ? contextValue[0] : {};
const basket = state?.basket || [];



  return (
    <>
    <section className={classes.fixed}>
      <nav className={classes.nav_wrapper}>
        <div className={classes.header_container}>
          {/* Logo */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
              </Link>
          </div>

          {/* Delivery Section */}
          <div className={classes.delivery}>
            <span>
            <IoLocationSharp />
            </span>
            <div>
              <p>Delivered to</p>
              <span>ETHIOPIA</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className={classes.search}>
            <select>
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <BsSearch size={25} />
          </div>

          {/* Account & Orders */}
          <div className={classes.order_container}>
            <a href="#" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
                alt="flag"
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>

            <Link to="/">
              <p>Sign In<br />
              Account & List
              </p>
            </Link>

            <Link to="/Orders">
              <p>Returns <br/>& Orders
              </p>
            </Link>

            {/* Shopping Cart */}
            <Link to="/Cart" className={classes.cart}>
              <BsCart2 size={35} />
              <span>{basket.length}</span>
              </Link>
          </div>
        </div>
      </nav>

      {/* Lower Navigation */}
      <div className={classes.lower_container}>
        <ul>
          <li>All</li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
      </section>
    </>
  );
};

export default Header;

// // // import React, { useContext } from 'react';
// // // import { BsCart2, BsSearch } from "react-icons/bs";
// // // import { IoLocationSharp } from "react-icons/io5";
// // // import classes from './Header.module.css';
// // // import { Link } from 'react-router-dom';
// // // import { DataContext } from '../DataProvider/DataProvider';

// // // const Header = () => {
// // //   const [state, dispatch] = useContext(DataContext);
// // //   const { basket = [] } = state || {}; // Added default empty array

// // //   return (
// // //     <>
// // //       <nav className={classes.nav_wrapper}>
// // //         <div className={classes.header_container}>
// // //           {/* Logo */}
// // //           <div className={classes.logo_container}>
// // //             <Link to="/">
// // //               <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
// // //             </Link>
// // //           </div>

// // //           {/* Delivery Section */}
// // //           <div className={classes.delivery}>
// // //             <span>
// // //               <IoLocationSharp />
// // //             </span>
// // //             <div>
// // //               <p>Delivered to</p>
// // //               <span>ETHIOPIA</span>
// // //             </div>
// // //           </div>

// // //           {/* Search Bar */}
// // //           <div className={classes.search}>
// // //             <select>
// // //               <option value="">All</option>
// // //             </select>
// // //             <input type="text" placeholder="Search Amazon" />
// // //             <BsSearch size={25} />
// // //           </div>

// // //           {/* Account & Orders */}
// // //           <div className={classes.order_container}>
// // //             <a href="#" className={classes.language}>
// // //               <img
// // //                 src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
// // //                 alt="flag"
// // //               />
// // //               <select>
// // //                 <option value="">EN</option>
// // //               </select>
// // //             </a>

// // //             <Link to="/">
// // //               <p>Sign In<br />
// // //               Account & List
// // //               </p>
// // //             </Link>

// // //             <Link to="/Orders">
// // //               <p>Returns <br/>& Orders
// // //               </p>
// // //             </Link>

// // //             {/* Shopping Cart */}
// // //             <Link to="/Cart" className={classes.cart}>
// // //               <BsCart2 size={35} />
// // //               <span>{basket.length}</span>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       {/* Lower Navigation */}
// // //       <div className={classes.lower_container}>
// // //         <ul>
// // //           <li>All</li>
// // //           <li>Today's Deals</li>
// // //           <li>Customer Service</li>
// // //           <li>Registry</li>
// // //           <li>Gift Cards</li>
// // //           <li>Sell</li>
// // //         </ul>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Header;
// // import React, { useContext } from 'react';
// // import { BsCart2, BsSearch } from "react-icons/bs";
// // import { IoLocationSharp } from "react-icons/io5";
// // import classes from './Header.module.css';
// // import { Link } from 'react-router-dom';
// // import { DataContext } from '../DataProvider/DataProvider';

// // const Header = () => {
// //   // Using useContext hook to access the context value
// //   const [state, dispatch] = useContext(DataContext);
  
// //   // Safely access basket with a default empty array
// //   const basket = state?.basket || [];

// //   return (
// //     <>
// //       <nav className={classes.nav_wrapper}>
// //         <div className={classes.header_container}>
// //           {/* Logo */}
// //           <div className={classes.logo_container}>
// //             <Link to="/">
// //               <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
// //             </Link>
// //           </div>

// //           {/* Delivery Section */}
// //           <div className={classes.delivery}>
// //             <span>
// //               <IoLocationSharp />
// //             </span>
// //             <div>
// //               <p>Delivered to</p>
// //               <span>ETHIOPIA</span>
// //             </div>
// //           </div>

// //           {/* Search Bar */}
// //           <div className={classes.search}>
// //             <select>
// //               <option value="">All</option>
// //             </select>
// //             <input type="text" placeholder="Search Amazon" />
// //             <BsSearch size={25} />
// //           </div>

// //           {/* Account & Orders */}
// //           <div className={classes.order_container}>
// //             <a href="#" className={classes.language}>
// //               <img
// //                 src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
// //                 alt="flag"
// //               />
// //               <select>
// //                 <option value="">EN</option>
// //               </select>
// //             </a>

// //             <Link to="/">
// //               <p>Sign In<br />
// //               Account & List
// //               </p>
// //             </Link>

// //             <Link to="/Orders">
// //               <p>Returns <br/>& Orders
// //               </p>
// //             </Link>

// //             {/* Shopping Cart */}
// //             <Link to="/Cart" className={classes.cart}>
// //               <BsCart2 size={35} />
// //               <span>{basket.length}</span>
// //             </Link>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Lower Navigation */}
// //       <div className={classes.lower_container}>
// //         <ul>
// //           <li>All</li>
// //           <li>Today's Deals</li>
// //           <li>Customer Service</li>
// //           <li>Registry</li>
// //           <li>Gift Cards</li>
// //           <li>Sell</li>
// //         </ul>
// //       </div>
// //     </>
// //   );
// // };

// // export default Header;

// import React, { useContext, useEffect, useState } from 'react';
// import { BsCart2, BsSearch } from "react-icons/bs";
// import { IoLocationSharp } from "react-icons/io5";
// import classes from './Header.module.css';
// import { Link } from 'react-router-dom';
// import { DataContext } from '../DataProvider/DataProvider';

// const Header = () => {
//   // Using useContext hook to access the context value
//   const [state, dispatch] = useContext(DataContext);
//   const [cartCount, setCartCount] = useState(0);
  
//   // Update cart count whenever basket changes
//   useEffect(() => {
//     // Calculate total items in cart (considering quantities)
//     const calculateCartCount = () => {
//       if (state && state.basket) {
//         const count = state.basket.reduce((total, item) => {
//           return total + (item.quantity || 1);
//         }, 0);
//         setCartCount(count);
//       }
//     };
    
//     calculateCartCount();
//     console.log("Basket updated:", state?.basket); // Debug log
//   }, [state?.basket]);

//   return (
//     <>
//       <nav className={classes.nav_wrapper}>
//         <div className={classes.header_container}>
//           {/* Logo */}
//           <div className={classes.logo_container}>
//             <Link to="/">
//               <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
//             </Link>
//           </div>

//           {/* Delivery Section */}
//           <div className={classes.delivery}>
//             <span>
//               <IoLocationSharp />
//             </span>
//             <div>
//               <p>Delivered to</p>
//               <span>ETHIOPIA</span>
//             </div>
//           </div>

//           {/* Search Bar */}
//           <div className={classes.search}>
//             <select>
//               <option value="">All</option>
//             </select>
//             <input type="text" placeholder="Search Amazon" />
//             <BsSearch size={25} />
//           </div>

//           {/* Account & Orders */}
//           <div className={classes.order_container}>
//             <a href="#" className={classes.language}>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
//                 alt="flag"
//               />
//               <select>
//                 <option value="">EN</option>
//               </select>
//             </a>

//             <Link to="/">
//               <p>Sign In<br />
//               Account & List
//               </p>
//             </Link>

//             <Link to="/Orders">
//               <p>Returns <br/>& Orders
//               </p>
//             </Link>

//             {/* Shopping Cart - with improved counter */}
//             <Link to="/Cart" className={classes.cart}>
//               <BsCart2 size={35} />
//               <span className={classes.cart_count}>{cartCount}</span>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Lower Navigation */}
//       <div className={classes.lower_container}>
//         <ul>
//           <li>All</li>
//           <li>Today's Deals</li>
//           <li>Customer Service</li>
//           <li>Registry</li>
//           <li>Gift Cards</li>
//           <li>Sell</li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Header;