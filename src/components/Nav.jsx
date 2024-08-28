import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import '../styles/nav.css';

const Navbar = () => {

    return(
        <>
            <nav className='nav-list'>
            <span>FAKEshop</span>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='shop'>Shop</Link>
                </li>
                <li>
                    <a href=''>Cart</a>
                </li>
            </ul>
            
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;