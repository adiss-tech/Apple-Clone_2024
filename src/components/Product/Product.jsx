import React, { useEffect, useState } from 'react'
// import { FakeStoreAPI_BaseURL } from "../../API/EndPoint";
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
import Loader from '../Loader/Loader'

function Product() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        axios
          .get('https://fakestoreapi.com/products')
          .then((res) => {
            setProducts(res.data);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });
    
    }, [])
    
    return (
      <>
       {isLoading? (<Loader />) : (
          
        <section className={classes.products_container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard renderAdd={true} products={singleProduct} key={singleProduct.id} />
            );
          })}
        </section>)
      }
      </>
    );
}

export default Product