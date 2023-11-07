import { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NavLinks({ logged }) {
  return (
    <ul>
      <li>
        <NavLink to="/" className="nav-link">
          home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="nav-link">
          about
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" className="nav-link">
          products
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" className="nav-link">
          cart
        </NavLink>
      </li>
      {logged && (
        <>
          <li>
            <NavLink to="/checkout" className="nav-link">
              checkout
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className="nav-link">
              orders
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
}

export default NavLinks;
