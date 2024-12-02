import React, { useEffect, useState } from 'react'
import classes from './Result.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';

function Results() {
  const [results, setResults] = useState([]);
  const {categoryName} = useParams()
  const [isLoading, setIsLoading] = useState();  
 
  useEffect(() => {
    setIsLoading(true);    
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
        
      })
      .catch((err) => {
        console.log(err); 
        setIsLoading(false);
        
      });
    
  }, [])
  


  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                products={product}
                renderDesc={false}
                renderAdd={true}
                detailDescription={false}
                buttonExist={true}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results



















// import React, { useEffect, useState } from "react";
// import classes from "./Result.module.css";
// import LayOut from "../../components/LayOut/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/endPoints";

// function Results() {
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // Initialize the loading state
//   const { categoryName } = useParams();

//   useEffect(() => {
//     setIsLoading(true); // Set the loading state to true before making the API request

//     axios
//       .get(`${productUrl}/products/category/${categoryName}`)
//       .then((res) => {
//         setResults(res.data);
//         setIsLoading(false); // Set the loading state to false when the data is received
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLoading(false); // Set the loading state to false in case of an error
//       });
//   }, [categoryName]);

//   return (
//     <LayOut>
//       <section>
//         <h1 style={{ padding: "30px" }}>Results</h1>
//         <p style={{ padding: "30px" }}>Category / {categoryName}</p>
//         <hr />
//         {isLoading ? (
//           <div>Loading...</div>
//         ) : (
//           <div className={classes.products_container}>
//             {results?.map((product) => (
//               <ProductCard key={product.id} products={product} />
//             ))}
//           </div>
//         )}
//       </section>
//     </LayOut>
//   );
// }

// export default Results;