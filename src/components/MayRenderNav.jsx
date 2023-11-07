import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../context";
function MayRenderNav({ children }) {
  const { showNavBar, setShowNavBar } = useGlobalContext();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
  }, [location]);
  return <div>{showNavBar && children}</div>;
}

export default MayRenderNav;
