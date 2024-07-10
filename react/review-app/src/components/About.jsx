import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>This is my About page</h1>
      
      <Link className='home' to="/">Go back to home</Link>
    </div>
  )
}

export default About