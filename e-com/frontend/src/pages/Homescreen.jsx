import Product from "../component/Product"
import products from "../products"



const Homescreen = () => {

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