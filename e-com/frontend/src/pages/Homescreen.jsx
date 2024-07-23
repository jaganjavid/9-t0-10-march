
import {useEffect, useState} from "react";

import Product from "../component/Product"
// import products from "../products"
import axios from "axios";



const Homescreen = () => {


  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      const { data } = await axios.get("http://localhost:5000/api/products");

      setProducts(data);

    }

    fetchProducts();

  }, []);


  return (
    <>
       <h2 className="text-3xl mb-10 mt-10">All Product</h2>

       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {
            products.map((product) => (
                <Product key={product._id} product={product}/>
            ))
        }
       </div>
    </>
  )
}

export default Homescreen