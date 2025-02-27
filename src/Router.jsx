// // import React from 'react'
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import Landing from './Pages/Landing/Landing'
// // import SignUp from './Pages/Auth/SignUp'
// // import Payment from './Pages/Payment/Payment'
// // import Cart from './Pages/Cart/Cart'
// // import Orders from './Pages/Orders/Orders'
// // import Results from './Pages/Results/Results'; 
// // import ProductDetail from './Pages/ProductDetail/ProductDetail'

// // function RouterComponent() {
// //     return (
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path="/" element={<Landing />} />
// //           <Route path="/signup" element={<SignUp />} />
// //           <Route path="/payment" element={<Payment />} />
// //           <Route path="/orders" element={<Orders />} />
// //           <Route path="/category/:categoryName" element={<Results />}/>
// //           <Route path= "/Products/:Productid" element={<ProductDetail/>}/>
// //           <Route path="/cart" element={<Cart />} />
// //         </Routes>
// //       </BrowserRouter>
// //     );
// //   }
  
// //   export default RouterComponent;
// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Landing from './Pages/Landing/Landing';
// import SignUp from './Pages/Auth/SignUp';
// import Payment from './Pages/Payment/Payment';
// import Cart from './Pages/Cart/Cart';
// import Orders from './Pages/Orders/Orders';
// import Results from './Pages/Results/Results'; 
// import ProductDetail from './Pages/ProductDetail/ProductDetail';

// function RouterComponent() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/category/:categoryName" element={<Results />} />
//         <Route path="/Products/:productId" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default RouterComponent;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import SignUp from './Pages/Auth/SignUp';
import Payment from './Pages/Payment/Payment';
import Cart from './Pages/Cart/Cart';
import Orders from './Pages/Orders/Orders';
import Results from './Pages/Results/Results'; 
import ProductDetail from './Pages/ProductDetail/ProductDetail';

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/Products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;