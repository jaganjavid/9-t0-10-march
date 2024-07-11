
const Product = ({product}) => {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
    <figure>
      <img
        src={`${product.image}`}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{product.name}</h2>
      <p>{product.description}</p>
    </div>
  </div>
  )
}

export default Product