
import {useState, useEffect} from "react"
import { Link, useParams } from 'react-router-dom';
import products from '../products';
import axios from "axios";
import Rating from '../component/Rating';




const ProductScreen = () => {

  const [product, setProduct] = useState({});

  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {

      const { data } = await axios.get(`http://localhost:5000/api/products/${productId}`);

      setProduct(data);

    }

    fetchProduct();

  }, [productId]);

  // const product = products.find((p) => p._id === productId);




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
              <p>{product.countInStock > 0 ? "In stock" : "No stock"}</p>

              <div className="card-actions">
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductScreen