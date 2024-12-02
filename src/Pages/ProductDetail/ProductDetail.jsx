import React, { useEffect, useState } from 'react'
import classes from "./ProductDetail.module.css";
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setproduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setproduct(res.data)
      setIsLoading(false)

    }).catch((err)=>{
      console.log(err);
      setIsLoading(false)
    })
    
  }, [ ])
  
  return (
    <LayOut>
      {isLoading ? (<Loader />) : (<ProductCard products={product}
       flex ={true}
       renderDesc={true}
       renderAdd={true}
       
       
       />)}
    </LayOut>
  );
}

export default ProductDetail