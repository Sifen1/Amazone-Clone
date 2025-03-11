// import React from 'react'
// import { IoMenuOutline } from "react-icons/io5";

// function LowerHeader() {
//   return (
//     // <div className={classes.lower_container}>
//         <ul>
//             <li>
//             <IoMenuOutline />
//             <p>All</p>
//             </li>
//             <li> Today's Deals</li>
//             <li>costumer Deals</li>
//             <li>Registry</li>
//             <li>Gift card</li>
//             <li>Sell</li>
//         </ul>




//     // </div>
//   )
// }

// export default LowerHeader
//import React from "react";
//import { IoMenuOutline } from "react-icons/io5";
//import classes from "../styles/LowerHeader.module.css";

// const LowerHeader = () => {
//   return (
//     <div className={classes.lower_container}>
//       <ul>
//         <li className={classes.all}>
//           <IoMenuOutline size={20} />
//           <span>All</span>
//         </li>
//         <li>Today's Deals</li>
//         <li>Customer Service</li>
//         <li>Buy Again</li>
//         <li>Gift Cards</li>
//         <li>Registry</li>
//         <li>Sell</li>
//       </ul>
//     </div>
//   );
// };

// // export default LowerHeader;
// import React from "react";
// import { IoMenuOutline } from "react-icons/io5";
// import classes from "./Header.module.css";

// const LowerHeader = () => {
//   return (
//     <nav className={classes.lower_container}>
//       <ul>
//         <li>
//           <IoMenuOutline />
//           <p>All</p>
//         </li>
//         <li>Today's Deals</li>
//         <li>Customer Service</li>
//         <li>Registry</li>
//         <li>Gift Cards</li>
//         <li>Sell</li>
//       </ul>
//     </nav>
//   );
// };

// export default LowerHeader;
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css";

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Deal</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;

