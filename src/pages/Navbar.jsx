import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import NavbarPage from "../assets/wrappers/NavbarPage";
import { useGlobalContext } from "../context";
import NavLinks from "../components/NavLinks";
function Navbar() {
  const {
    logged,
    setLogged,
    windowWidth,
    setWindowWidth,
    isOpenNav,
    setOpenNav,
    cartCounter,
  } = useGlobalContext();
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let logout = () => {
    let data = { username: "", loggedUser: false };
    localStorage.setItem("Logged_User", JSON.stringify(data));
    setLogged(data);
    toast.success("Logged out successfully");
  };

  return (
    <NavbarPage>
      <div className="top-header">
        {!logged?.loggedUser ? (
          <div className="userAccount">
            <NavLink to="/login">Sign in / Guest</NavLink>
            <NavLink to="/register">Create Account</NavLink>
          </div>
        ) : (
          <div className="userAcc">
            <p>Hello, {logged?.username}</p>
            <button className="logout" onClick={logout}>
              logout
            </button>
          </div>
        )}
      </div>

      <div className="nav-center">
        <div className="bottom-header">
          {windowWidth <= 1025 ? (
            <div
              className="start-header"
              onClick={() => setOpenNav(!isOpenNav)}
            >
              <FaBarsStaggered className="hamburger" />
              {isOpenNav && <NavLinks logged={logged?.loggedUser} />}
            </div>
          ) : (
            <NavLink to="/" className="logo">
              <span>C</span>
            </NavLink>
          )}
          <div className="nav-links">
            <NavLinks logged={logged?.loggedUser} />
          </div>

          <div className="end-header">
            <ThemeToggle />
            <div className="cart">
              <NavLink
                className="cart-icon"
                to="/cart"
                style={{ background: "transparent" }}
              >
                <BsCart3 />
                <p className="cartCounter">{cartCounter}</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </NavbarPage>
  );
}

export default Navbar;
