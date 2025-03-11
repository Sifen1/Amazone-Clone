import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Payment from './Pages/Payment/Payment';
import Cart from './Pages/Cart/Cart';
import Orders from './Pages/Orders/Orders';
import Results from './Pages/Results/Results'; 
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe("pk_test_51Qc0MbKyBRzdWUn3tn6UWcbB1WpccTHPOaPybCH6FMAHzT64HW3IH1DFp9qMWAGbEkeqpGsXllSjg0GpIxAmQDEd005dgtwKK3");

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payment" element={
          <ProtectedRoute msg={"Please login to continue"} redirect="/payment">

          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
          </ProtectedRoute>

        } /> 
        <Route path="/orders" element={
                    <ProtectedRoute msg={"Please login to continue"} redirect="/Orders">
                      <Orders />
                    </ProtectedRoute>
          } />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/Products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;