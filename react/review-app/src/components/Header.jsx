
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Header = ({ text, bgColor, textColor }) => {

  const headerStyle = {
    backgroundColor: bgColor,
    color:textColor
  }

  return (
     <header style={headerStyle}>
       <div className="container">
       <div className="header-wrapper">
       <Link to="/">
        <h1>
            { text }
          </h1>
       </Link>
        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>
       </div>
       </div>
     </header>
  )
}



// Header.defaultProps = {
//   text:"Review App",
//   bgColor:"blue",
//   textColor:"#ffffff"
// }

// console.log(<Header/>)

Header.propTypes = {
  text: PropTypes.string,
  bgColor:PropTypes.string,
  textColor:PropTypes.string,
}

export default Header;


