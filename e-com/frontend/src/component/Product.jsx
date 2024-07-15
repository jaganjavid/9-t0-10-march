import { Link } from "react-router-dom"
import Rating from "./Rating"



const Product = ({ product }) => {
  return (
    <Link to={`product/${product._id}`}>
      <div className="card bg-base-100 w-full shadow-x">
        <figure>
          <img
            src={`${product.image}`}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
 

           
          <div>
           <Rating value={product.rating} text={product.numReviews}></Rating>  
          </div> 
          
          <h3 className="cart-title">${product.price}</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default Product