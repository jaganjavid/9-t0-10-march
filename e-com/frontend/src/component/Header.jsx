import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {


    const { cartItem } = useSelector((state) => state.cart);

    console.log(cartItem);

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Our Ecom</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                    <input type="text" placeholder="Search Product" className="input w-full max-w-xs" />
                    </li>
                    <li><Link to="/cart" className="flex gap-2">Cart 
                         <span>{cartItem.length > 0 ? cartItem.length : null}</span>
                        </Link></li>
                    <li>
                        <details>
                            <summary>Jagan</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>Profile</a></li>
                                <li><a>Dark</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header