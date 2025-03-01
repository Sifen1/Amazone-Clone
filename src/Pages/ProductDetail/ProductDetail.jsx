import React, { useEffect, useState } from 'react';
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { producturl } from '../../Api/endpoints'; 
import Productcard from '../../components/Product/Productcard';
import Loader from '../../components/Loader/Loader';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(true);
    axios.get(`${producturl}/Products/${productId}`) // Add semicolon here
      .then((res) => {
        setProduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.error('API Error:', err);
        setisLoading(false);
      });
  }, [productId]);
  
  

  if (isLoading) {
    return <Loader />;
  }

  return (
    <LayOut>
      <Productcard product={product}
      flex={true}
      renderDesc={true}
      renderAdd={true}
      />
    </LayOut>
  );
}

export default ProductDetail;