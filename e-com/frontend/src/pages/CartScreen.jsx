

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

import { addToCart,deleteCart } from "../slices/cartSlice";


const CartScreen = () => {
  
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);

   
 const addToCartHandler = (item, qty) => {
     dispatch(addToCart({...item, qty}));
 }

  return (
    <div>
      <h1 className="text-5xl mb-10">My Cart</h1>

      {cartItem.length === 0 ? (
        <p>There is no item in the cart</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="md:col-span-1">
            {cartItem.map((item) => (
             
                <div className="grid grid-cols-2 gap-10" key={item._id}>
                  <div className="col-span-1">
                  <Link to={`/product/${item._id}`}>
                    <img
                      width="100%"
                      className="h-[200px] object-cover"
                      src={`${item.image}`}
                      alt={item.name}
                    />
                  </Link>
                  </div>
                  <div className="col-span-1">
                    <div className="card">
                      <div className="card-body">
                        <h2 className="card-title mb-2">{item.name}</h2>
                        <p className="mb-3">Price : {item.price}</p>

                        {item.countInstock > 0 && (
                          <div className="flex gap-5 items-center">
                            <h4>Qty</h4>
                            <form>
                              <select
                                className="select select-bordered w-full max-w-xs"
                                value={item.qty}
                                onChange={(e) => {addToCartHandler(item, Number(e.target.value))}}
                              >
                                {[...Array(item.countInstock).keys()].map((item) => (
                                  <option key={item + 1} value={item + 1}>
                                    {item + 1}
                                  </option>
                                ))}
                              </select>
                            </form>
                            <button className="btn btn-error" onClick={() => dispatch(deleteCart(123))}>
                            <MdDelete color="white" size="20px"/>
                            </button>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
            
            ))}
          </div>
          <div className="md:col-span-1">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title mb-3">Sub Total 
                  ({
                    cartItem.reduce((acc, item) => acc + item.qty, 0).toFixed()
                  })
                </h2>


                <h2 className="card-title mb-3">Total Price 
                  ({
                    cartItem.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed()
                  }) rs
                </h2>

                <button className="btn btn-success">Checkout</button>
                 
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
