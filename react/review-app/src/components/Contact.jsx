import { Link } from "react-router-dom"



const Contact = () => {
  return (
    <div>
        <h1>Contact</h1>
        <Link className="home" to="/about">go to about</Link>
    </div>
  )
}

export default Contact