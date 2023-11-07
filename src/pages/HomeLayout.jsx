import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import MayRenderNav from "../components/MayRenderNav";
function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoaded = navigation.state === "loading";
  return (
    <>
      <MayRenderNav>
        <Navbar />
      </MayRenderNav>

      {isPageLoaded ? <div className="loading"></div> : <Outlet />}
    </>
  );
}

export default HomeLayout;
