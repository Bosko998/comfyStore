import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useGlobalContext } from "../src/context";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  HomeLayout,
  Landing,
  Cart,
  About,
  Products,
  SingleProduct,
  Login,
  Checkout,
  Register,
  Error,
  SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";
import { loader as singleProductsLoader } from "./pages/SingleProduct";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <SinglePageError />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <SinglePageError />,
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductsLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        errorElement: <SinglePageError />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <SinglePageError />,
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <SinglePageError />,
  },
]);
function App() {
  const { isDarkTheme } = useGlobalContext();
  localStorage.setItem(
    "Logged_User",
    JSON.stringify({ username: "", loggedUser: false })
  );

  useEffect(() => {
    if (isDarkTheme) {
      document.body.setAttribute("data-theme", "drakula");
    } else {
      document.body.setAttribute("data-theme", "winter");
    }
    return () => {
      document.body.removeAttribute("dark-theme");
      document.body.removeAttribute("light-theme");
    };
  }, [isDarkTheme]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer position="top-center" />
    </QueryClientProvider>
  );
}

export default App;
