// // // // // import React,{useContext,useState} from 'react';
// // // // // import LayOut from '../../components/LayOut/LayOut';
// // // // // import classes from "./payment.module.css";
// // // // // import { DataContext } from '../../components/DataProvider/DataProvider';
// // // // // import ProductCard from '..//../components/Product/Productcard';
// // // // // import {useStripe,useElements,CardElement} from '@stripe/react-stripe-js';
// // // // // import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
// // // // // import { axiosinstance } from '..//..//Api/axios';
// // // // // import { ClipLoader } from 'react-spinners';

// // // // // function Payment() {
// // // // //   const [{ user,basket}] =useContext(DataContext);
// // // // //   const totalItem = basket?.reduce((amount, item) =>{
// // // // //     return item.amount + amount
// // // // //   },0);

// // // // //   const total = basket.reduce((amount, item) => {
// // // // //     return item.price * item.amount + amount;
// // // // //   }, 0);
// // // // //   const[carderror,setCardError]=useState(null);
// // // // //   const [processing, setProcessingError] = useState(false);

// // // // //   const stripe = useStripe();
// // // // //   const elements= useElements();
// // // // //   const handlechange=(e)=>{
// // // // //     console.log(e);
// // // // //     e?.error?.message?setCardError(e?.error?.message):setCardError(null);

// // // // //   }
// // // // //   const handlePayment = async (e) => {
// // // // //     e.preventDefault();

// // // // //     try {
// // // // //       setProcessing(true);
// // // // //         // 1. backend || functions --> contact to the client secret
// // // // //         const response = await axiosinstance({
// // // // //             method: "POST",
// // // // //             url: `/payment/create?total=${total*100}`,
// // // // //         });

// // // // //         console.log(response.data);
// // // // //         const clientSecret = response.data?.clientsecret;
// // // // //     // 2. client side (react side confirmation)
// // // // //     const confirmation = await stripe.confirmCardPayment(
// // // // //       clientSecret,
// // // // //       {
// // // // //         payment_method: {
// // // // //           card: elements.getElement(CardElement)
// // // // //         }
// // // // //       }
// // // // //     );
// // // // //     console.log(confirmation);


// // // // //     // 3. after the confirmation --> order firestore database save, clear basket

// // // // //     setProcessing(false);
// // // // //   } catch (error) {
// // // // //     console.error(error);
// // // // //     setProcessing(false);
// // // // // }
// // // // // };


// // // // //   return (
// // // // //     <LayOut>
// // // // //       {/* header */}
// // // // //     <div className={classes.Payment_header}> 
// // // // //       Checkout ({totalItem}) items
// // // // //     </div>
// // // // //     {/* payment  ethiod */}
// // // // //     <section className={classes.Payment}>
// // // // //       {/* adress */}
// // // // //       <div className={classes.flex}>
// // // // //       <h3>Delivery Address</h3>
// // // // // <div>
// // // // //     <div>{}</div>
// // // // //     <div>123 React lane</div>
// // // // //     <div>Chicago, IL</div>
// // // // // </div>
// // // // //       </div>
// // // // //       <hr />
// // // // //       {/* product */}
// // // // //       <div className={classes.flex}> 
// // // // //         <h3>Review items and Delivery</h3>
// // // // //         <div>
// // // // //         {basket?.map((item) => <ProductCard product={item} flex={true}/>)}
// // // // //         </div>
// // // // //       </div>
// // // // //       <hr />
// // // // //       {/* card form */}
// // // // //       <div className={classes.flex}>
// // // // //         <h3>Payment Methods</h3>
// // // // //         <div className={classes.payment_card_container}>
// // // // //         <div className={classes.payment__detail}>
// // // // //           <form onSubmit={handlePayment}>
// // // // //             {/* error */}
// // // // //             {carderror && <small style={{color:"red"}}>{carderror}</small>}
// // // // //             {/* card details */}
// // // // //             <CardElement  onChange={handlechange}/>

// // // // //             {/* price */}
// // // // //             <div className={classes.payment__price}>
// // // // //               <div>
// // // // //                 <span style={{display:"flex",justifyContent:"space-between"}}>
// // // // //                   <p>Total order</p> |<CurrencyFormat amount={total} />
// // // // //                 </span>
// // // // //               </div>
// // // // //               <button type="submit" disabled={!stripe}>
                
// // // // //                 {
// // // // //               processing? (
// // // // //                       <div className={classes.loading}>
// // // // //                         <ClipLoader color="gray" size={12} />
// // // // //                         <p>please wait ...</p>
// // // // //                       </div>
// // // // //                   ):(
// // // // //                     "pay now"
// // // // //                   )}
// // // // //               </button>
// // // // //             </div>
// // // // //           </form>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //     </LayOut>
// // // // //   )
// // // // // }

// // // // // export default Payment
// // // // import React, { useContext, useState } from 'react';
// // // // import LayOut from '../../components/LayOut/LayOut';
// // // // import classes from "./payment.module.css";
// // // // import { DataContext } from '../../components/DataProvider/DataProvider';
// // // // import ProductCard from '../../components/Product/Productcard';
// // // // import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// // // // import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
// // // // import { axiosinstance } from '../../Api/axios';
// // // // import { ClipLoader } from 'react-spinners';
// // // // import { db } from '../../Utility/firebase';

// // // // function Payment() {
// // // //   const [{ user, basket }] = useContext(DataContext);
// // // //   const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);
// // // //   const total = basket.reduce((amount, item) => item.price * item.amount + amount, 0);

// // // //   const [carderror, setCardError] = useState(null);
// // // //   const [processing, setProcessing] = useState(false); // ✅ FIXED: Define at the top level

// // // //   const stripe = useStripe();
// // // //   const elements = useElements();

// // // //   const handlechange = (e) => {
// // // //     e?.error?.message ? setCardError(e?.error?.message) : setCardError(null);
// // // //   };

// // // //   const handlePayment = async (e) => {
// // // //     e.preventDefault();
// // // //     setProcessing(true); // ✅ FIXED: Now `setProcessing` is accessible

// // // //     try {
// // // //       // 1. Get client secret from backend
// // // //       const response = await axiosinstance({
// // // //         method: "POST",
// // // //         url: `/payment/create?total=${total * 100}`,
// // // //       });

// // // //       console.log(response.data);
// // // //       const clientsecret = response.data?.clientsecret;

// // // //       // 2. Confirm payment on client side
// // // //       const {paymentIntent} = await stripe.confirmCardPayment(clientsecret, {
// // // //         payment_method: {
// // // //           card: elements.getElement(CardElement),
// // // //         },
// // // //       });

// // // //       console.log(paymentIntent);

// // // //       // 3. Process order in Firestore, clear basket, etc.
// // // //       await db
// // // //     .collection("users")
// // // //     .doc(user,user.uid)
// // // //     .collection("orders")
// // // //     .doc(paymentIntent.id)
// // // //     .set({
// // // //         basket: basket,
// // // //         amount: paymentIntent.amount,
// // // //         created: paymentIntent.created,
// // // //     });





// // // //       setProcessing(false);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }

// // // //     setProcessing(false); // ✅ FIXED: Now properly resets state
// // // //   };

// // // //   return (
// // // //     <LayOut>
// // // //       <div className={classes.Payment_header}>
// // // //         Checkout ({totalItem}) items
// // // //       </div>
// // // //       <section className={classes.Payment}>
// // // //         {/* Address */}
// // // //         <div className={classes.flex}>
// // // //           <h3>Delivery Address</h3>
// // // //           <div>
// // // //             <div>{user?.email}</div>
// // // //             <div>123 React Lane</div>
// // // //             <div>Chicago, IL</div>
// // // //           </div>
// // // //         </div>
// // // //         <hr />
// // // //         {/* Product Review */}
// // // //         <div className={classes.flex}>
// // // //           <h3>Review items and Delivery</h3>
// // // //           <div>
// // // //             {basket?.map((item) => (
// // // //               <ProductCard product={item} flex={true} key={item.id} />
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //         <hr />
// // // //         {/* Card Form */}
// // // //         <div className={classes.flex}>
// // // //           <h3>Payment Methods</h3>
// // // //           <div className={classes.payment_card_container}>
// // // //             <div className={classes.payment__detail}>
// // // //               <form onSubmit={handlePayment}>
// // // //                 {carderror && <small style={{ color: "red" }}>{carderror}</small>}
// // // //                 <CardElement onChange={handlechange} />
// // // //                 <div className={classes.payment__price}>
// // // //                   <div>
// // // //                     <span style={{ display: "flex", justifyContent: "space-between" }}>
// // // //                       <p>Total order</p> | <CurrencyFormat amount={total} />
// // // //                     </span>
// // // //                   </div>
// // // //                   <button type="submit" disabled={!stripe || processing}>
// // // //                     {processing ? (
// // // //                       <div className={classes.loading}>
// // // //                         <ClipLoader color="gray" size={12} />
// // // //                         <p>Please wait ...</p>
// // // //                       </div>
// // // //                     ) : (
// // // //                       "Pay Now"
// // // //                     )}
// // // //                   </button>
// // // //                 </div>
// // // //               </form>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </LayOut>
// // // //   );
// // // // }

// // // // export default Payment;
// // // import React, { useContext, useState } from 'react';
// // // import LayOut from '../../components/LayOut/LayOut';
// // // import classes from "./payment.module.css";
// // // import { DataContext } from '../../components/DataProvider/DataProvider';
// // // import ProductCard from '../../components/Product/Productcard';
// // // import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// // // import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
// // // import { axiosinstance } from '../../Api/axios';
// // // import { ClipLoader } from 'react-spinners';
// // // import { db } from '../../Utility/firebase';
// // // import { useNavigate } from 'react-router-dom';
// // // function Payment() {
// // //   const [{ user, basket }] = useContext(DataContext);
// // //   const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);
// // //   const total = basket.reduce((amount, item) => item.price * item.amount + amount, 0);

// // //   const [carderror, setCardError] = useState(null);
// // //   const [processing, setProcessing] = useState(false); // ✅ FIXED: Define at the top level

// // //   const stripe = useStripe();
// // //   const elements = useElements();
// // //   const navigate = useNavigate();

// // //   const handlechange = (e) => {
// // //     e?.error?.message ? setCardError(e?.error?.message) : setCardError(null);
// // //   };

// // //   const handlePayment = async (e) => {
// // //     e.preventDefault();
// // //     setProcessing(true); // ✅ FIXED: Now `setProcessing` is accessible

// // //     try {
// // //       // 1. Get client secret from backend
// // //       const response = await axiosinstance({
// // //         method: "POST",
// // //         url: `/payment/create?total=${total * 100}`,
// // //       });

// // //       console.log(response.data);
// // //       const clientsecret = response.data?.clientsecret;

// // //       // 2. Confirm payment on client side
// // //       const { paymentIntent } = await stripe.confirmCardPayment(clientsecret, {
// // //         payment_method: {
// // //           card: elements.getElement(CardElement),
// // //         },
// // //       });

// // //       console.log(paymentIntent);

// // //       // 3. Process order in Firestore, clear basket, etc.
// // //       await db.collection("users")
// // //         .doc(user.uid) // ✅ FIXED: Corrected to user.uid
// // //         .collection("orders")
// // //         .doc(paymentIntent.id)
// // //         .set({
// // //           basket: basket,
// // //           amount: paymentIntent.amount,
// // //           created: paymentIntent.created,
// // //         });
// // //         console.log(user); // Check if user is null or not

// // //             setProcessing(false);
// // //             navigate("/orders",{state:{msg:"Order Placed Successfully"}});
// // //     } catch (error) {
// // //       console.error(error);
// // //       setProcessing(false); // Reset on error
// // //     }
// // //   };

// // //   return (
// // //     <LayOut>
// // //       <div className={classes.Payment_header}>
// // //         Checkout ({totalItem}) items
// // //       </div>
// // //       <section className={classes.Payment}>
// // //         {/* Address */}
// // //         <div className={classes.flex}>
// // //           <h3>Delivery Address</h3>
// // //           <div>
// // //             <div>{user?.email}</div>
// // //             <div>123 React Lane</div>
// // //             <div>Chicago, IL</div>
// // //           </div>
// // //         </div>
// // //         <hr />
// // //         {/* Product Review */}
// // //         <div className={classes.flex}>
// // //           <h3>Review items and Delivery</h3>
// // //           <div>
// // //             {basket?.map((item) => (
// // //               <ProductCard product={item} flex={true} key={item.id} />
// // //             ))}
// // //           </div>
// // //         </div>
// // //         <hr />
// // //         {/* Card Form */}
// // //         <div className={classes.flex}>
// // //           <h3>Payment Methods</h3>
// // //           <div className={classes.payment_card_container}>
// // //             <div className={classes.payment__detail}>
// // //               <form onSubmit={handlePayment}>
// // //                 {carderror && <small style={{ color: "red" }}>{carderror}</small>}
// // //                 <CardElement onChange={handlechange} />
// // //                 <div className={classes.payment__price}>
// // //                   <div>
// // //                     <span style={{ display: "flex", justifyContent: "space-between" }}>
// // //                       <p>Total order</p> | <CurrencyFormat amount={total} />
// // //                     </span>
// // //                   </div>
// // //                   <button type="submit" disabled={!stripe || processing}>
// // //                     {processing ? (
// // //                       <div className={classes.loading}>
// // //                         <ClipLoader color="gray" size={12} />
// // //                         <p>Please wait ...</p>
// // //                       </div>
// // //                     ) : (
// // //                       "Pay Now"
// // //                     )}
// // //                   </button>
// // //                 </div>
// // //               </form>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </LayOut>
// // //   );
// // // }

// // // export default Payment;
// // import classes from "./Payment.module.css";
// // import Layout from "..//..//components/LayOut/LayOut"; // Ensure correct path
// // import React, { useContext, useState } from "react";
// // import { DataContext } from "../../components/DataProvider/DataProvider";
// // import ProductCard from "..//..//components/Product/Productcard"; // Ensure correct path
// // import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// // import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
// // import { axiosInstance } from "../../Api/axios"; // Updated axios import
// // import { db } from "../../Utility/firebase";
// // import { useNavigate } from "react-router-dom";
// // import { Type } from "../../Utility/action.type";

// // function Payment() {
// //   const [{ user, basket }, dispatch] = useContext(DataContext);
// //   const navigate = useNavigate();
// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const [cardError, setCardError] = useState(null);
// //   const [processing, setProcessing] = useState(false);

// //   const total = basket.reduce(
// //     (amount, item) => item.price * item.amount + amount,
// //     0
// //   );
// //   const totalItem = Array.isArray(basket)
// //     ? basket.reduce((amount, item) => amount + (item.amount || 0), 0)
// //     : 0;

// //   const handleChange = (event) => {
// //     setCardError(event.error ? event.error.message : "");
// //   };

// //   const handlePayment = async (e) => {
// //     e.preventDefault();
// //     try {
// //       setProcessing(true);

// //       // Backend request to get client secret
// //       const response = await axiosInstance.post(
// //         "/payment/create",  // ✅ Correct: Use a string for the URL
// //         { total: Math.round(total * 100) }
// //     );
    
// //       const clientSecret = response.data?.clientSecret;

// //       if (!clientSecret)
// //         throw new Error("Client secret not received from the backend.");

// //       // Confirm payment using Stripe
// //       const { error, paymentIntent } = await stripe.confirmCardPayment(
// //         clientSecret,
// //         {
// //           payment_method: { card: elements.getElement(CardElement) },
// //         }
// //       );

// //       if (error) {
// //         console.error("Payment failed:", error.message);
// //         setCardError(error.message);
// //         setProcessing(false);
// //         return;
// //       }

// //       console.log("Payment successful:", paymentIntent);

// //       // Save order in Firestore
// //       await db
// //         .collection("users")
// //         .doc(user.uid)
// //         .collection("orders") // Make sure it's orders (plural)
// //         .doc(paymentIntent.id)
// //         .set({
// //           basket: basket,
// //           amount: paymentIntent.amount,
// //           created: paymentIntent.created,
// //         });

// //       dispatch({ type: Type.EMPTY_BASKET });

// //       navigate("/orders", { state: { msg: "You have placed an order" } });
// //     } catch (error) {
// //       console.error("Error processing payment:", error.message);
// //       setCardError(error.message);
// //     }
// //     setProcessing(false);
// //   };
// //   return (
// //     <Layout>
// //       <div className={classes.payment__header}>
// //         Checkout ({totalItem}) items
// //       </div>
// //       <section className={classes.payment}>
// //         <div className={classes.flex}>
// //           <h3>Delivery Address</h3>
// //           <div>
// //             <div>{user?.email}</div>
// //             <div>123 React Lane</div>
// //             <div>Ethiopia, Addis Ababa</div>
// //           </div>
// //         </div>
// //         <hr />
// //         <div className={classes.flex}>
// //           <h3>Review items and delivery</h3>
// //           <div>
// //             {basket?.map((item) => (
// //               <ProductCard key={item.id} product={item} flex={true} />
// //             ))}
// //           </div>
// //         </div>
// //         <div className={classes.flex}>
// //           <h3>Payment methods</h3>
// //           <div className={classes.payment_card_container}>
// //             <div className={classes.payment__details}>
// //               <form onSubmit={handlePayment}>
// //                 {cardError && (
// //                   <small style={{ color: "red" }}>{cardError}</small>
// //                 )}
// //                 <CardElement
// //                   onChange={handleChange}
// //                   className={classes.CardElement}
// //                 />
// //                 <div className={classes.payment__price}>
// //                   <div>
// //                     <span style={{ display: "flex", gap: "10px" }}>
// //                       <p>Total order</p> | <CurrencyFormat amount={total} />
// //                     </span>
// //                   </div>
// //                   <button type="submit" disabled={processing}>
// //                     {processing ? (
// //                       <div className={classes.loading}>
// //                         <clipLoader color="grey" size={12} />
// //                         <p>Please Wait...</p>
// //                       </div>
// //                     ) : (
// //                       "Pay Now"
// //                     )}
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </Layout>
// //   );
// // }

// // export default Payment;
// import classes from "./Payment.module.css";
// import Layout from "../../components/LayOut/LayOut";
// import React, { useContext, useState } from "react";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import ProductCard from "../../components/Product/Productcard"; // Ensure correct path
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
// import { axiosInstance } from "../../Api/axios"; // Updated axios import
// import { db } from "../../Utility/firebase";
// import { useNavigate } from "react-router-dom";
// import { Type } from "../../Utility/action.type";

// function Payment() {
//   const [{ user, basket }, dispatch] = useContext(DataContext);
//   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [cardError, setCardError] = useState(null);
//   const [processing, setProcessing] = useState(false);

//   const total = basket.reduce(
//     (amount, item) => item.price * item.amount + amount,
//     0
//   );
//   const totalItem = Array.isArray(basket)
//     ? basket.reduce((amount, item) => amount + (item.amount || 0), 0)
//     : 0;

//   const handleChange = (event) => {
//     setCardError(event.error ? event.error.message : "");
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     try {
//       setProcessing(true);

//       // Backend request to get client secret
//       const response = await axiosInstance.post(
//         /payment/create,
//         { total: Math.round(total * 100) } // Ensure it's an integer (cents)
//       );
//       const clientSecret = response.data?.clientSecret;

//       if (!clientSecret)
//         throw new Error("Client secret not received from the backend.");

//       // Confirm payment using Stripe
//       const { error, paymentIntent } = await stripe.confirmCardPayment(
//         clientSecret,
//         {
//           payment_method: { card: elements.getElement(CardElement) },
//         }
//       );

//       if (error) {
//         console.error("Payment failed:", error.message);
//         setCardError(error.message);
//         setProcessing(false);
//         return;
//       }

//       console.log("Payment successful:", paymentIntent);

//       // Save order in Firestore
//       await db
//         .collection("users")
//         .doc(user.uid)
//         .collection("orders") // Make sure it's orders (plural)
//         .doc(paymentIntent.id)
//         .set({
//           basket: basket,
//           amount: paymentIntent.amount,
//           created: paymentIntent.created,
//         });

//       dispatch({ type: Type.EMPTY_BASKET });

//       navigate("/orders", { state: { msg: "You have placed an order" } });
//     } catch (error) {
//       console.error("Error processing payment:", error.message);
//       setCardError(error.message);
//     }
//     setProcessing(false);
//   };
// return (
//   <Layout>
//     <div className={classes.payment__header}>
//       Checkout ({totalItem}) items
//     </div>
//     <section className={classes.payment}>
//       <div className={classes.flex}>
//         <h3>Delivery Address</h3>
//         <div>
//           <div>{user?.email}</div>
//           <div>123 React Lane</div>
//           <div>Ethiopia, Addis Ababa</div>
//         </div>
//       </div>
//       <hr />
//       <div className={classes.flex}>
//         <h3>Review items and delivery</h3>
//         <div>
//           {basket?.map((item) => (
//             <ProductCard key={item.id} product={item} flex={true} />
//           ))}
//         </div>
//       </div>
//       <div className={classes.flex}>
//         <h3>Payment methods</h3>
//         <div className={classes.payment_card_container}>
//           <div className={classes.payment__details}>
//             <form onSubmit={handlePayment}>
//               {cardError && (
//                 <small style={{ color: "red" }}>{cardError}</small>
//               )}
//               <CardElement
//                 onChange={handleChange}
//                 className={classes.CardElement}
//               />
//               <div className={classes.payment__price}>
//                 <div>
//                   <span style={{ display: "flex", gap: "10px" }}>
//                     <p>Total order</p> | <CurrencyFormat amount={total} />
//                   </span>
//                 </div>
//                 <button type="submit" disabled={processing}>
//                   {processing ? (
//                     <div className={classes.loading}>
//                       <clipLoader color="grey" size={12} />
//                       <p>Please Wait...</p>
//                     </div>
//                   ) : (
//                     "Pay Now"
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   </Layout>
// );
// }

// export default Payment;
import classes from "./Payment.module.css";
import Layout from "../../components/LayOut/LayOut";
import React, { useContext, useState } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/Productcard"; // Ensure correct path
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios"; // Updated axios import
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );
  const totalItem = Array.isArray(basket)
    ? basket.reduce((amount, item) => amount + (item.amount || 0), 0)
    : 0;

  const handleChange = (event) => {
    setCardError(event.error ? event.error.message : "");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);

      // Backend request to get client secret
      // const response = await axiosInstance.post(
      //   '/payment/create', // Corrected to use quotes around the URL
      //   { total: Math.round(total * 100) } // Ensure it's an integer (cents)
      // );
      const response = await axiosInstance.post(
        'https://amazon-deploy-pcf5.onrender.com/api/payment/create', // <-- Updated URL
        { total: Math.round(total * 100) } // Ensure it's in cents
      );
      
      const clientSecret = response.data?.clientSecret;

      if (!clientSecret)
        throw new Error("Client secret not received from the backend.");

      // Confirm payment using Stripe
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: { card: elements.getElement(CardElement) },
        }
      );

      if (error) {
        console.error("Payment failed:", error.message);
        setCardError(error.message);
        setProcessing(false);
        return;
      }

      console.log("Payment successful:", paymentIntent);

      // Save order in Firestore
      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders") // Make sure it's orders (plural)
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

      dispatch({ type: Type.EMPTY_BASKET });

      navigate("/orders", { state: { msg: "You have placed an order" } });
    } catch (error) {
      console.error("Error processing payment:", error.message);
      setCardError(error.message);
    }
    setProcessing(false);
  };

  return (
    <Layout>
      <div className={classes.payment__header}>
        Checkout ({totalItem}) items
      </div>
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Ethiopia, Addis Ababa</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard key={item.id} product={item} flex={true} />
            ))}
          </div>
        </div>
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement
                  onChange={handleChange}
                  className={classes.CardElement}
                />
                <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total order</p> | <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit" disabled={processing}>
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please Wait...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
