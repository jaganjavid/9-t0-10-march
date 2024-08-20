
import {useState, useEffect} from "react"
import { Link, useParams } from 'react-router-dom';



import Rating from '../component/Rating';

import { useGetProductDetailQuery } from "../slices/productsApiSlices"

import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../slices/cartSlice";


const ProductScreen = () => {
  const { id: productId } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const { data: product, error, isLoading } = useGetProductDetailQuery(productId);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Link to="/">
        <button className="btn">Go back</button>
      </Link>

      <div className='grid md:grid-cols-2 gap-10 mt-10'>
        <div className='md:grid-cols-6'>
          <img width={"100%"} className="h-[500px]" src={`${product.image}`} alt="" />
        </div>
        <div className='md:grid-cols-6'>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              
              <div className='flex'>
                 <Rating value={product.rating} text={product.numReviews}/>
              </div>

              <p>Price {product.price}</p>
              <p>{product.countInstock > 0 ? "In stock" : "No stock"}</p>

              {product.countInstock > 0 && (
                <div>
                  <h4>Qty</h4>
                  <form>
                    <select
                      className="select select-bordered w-full max-w-xs"
                      value={qty}
                      onChange={(e) => setQty(Number(e.target.value))}
                    >
                      {[...Array(product.countInstock).keys()].map((item) => (
                        <option key={item + 1} value={item + 1}>
                          {item + 1}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
              )}

              <div className="card-actions">
                <button
                  onClick={addToCartHandler}
                  disabled={product.countInstock === 0}
                  className="btn btn-primary"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;