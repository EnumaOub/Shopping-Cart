import {
    NavLink,
  } from "react-router-dom";

export function NavBar() {
    return (
        <nav id="navBar">
            <li>
                <NavLink to="/"
                 activeClassName="active" >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/shop"
                 activeClassName="active" >
                    Shop
                </NavLink>
            </li>
            <li>
                <NavLink to="/cart"
                 activeClassName="active" >
                    Cart
                </NavLink>
            </li>  
        </nav>
    );
}