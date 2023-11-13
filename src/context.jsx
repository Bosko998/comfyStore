import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  const isDarkTheme = storedDarkMode || prefersDarkMode;
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

export const AppProvider = ({ children }) => {
  useEffect(() => {
    localStorage.setItem(
      "Logged_User",
      JSON.stringify({ username: "", loggedUser: false })
    );
  }, []);
  let localStorageData = localStorage.getItem("Logged_User");
  let loggedData = JSON.parse(localStorageData);
  const [logged, setLogged] = useState(loggedData);
  const [cartCounter, setCartCounter] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [layout, setLayout] = useState("active");
  const [regPerson, setRegPerson] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [respData, setRespData] = useState([]);
  const [pickedColor, setPickedColor] = useState(0);
  const [currentPage, setCurrentPage] = useState("1");
  const [showNavBar, setShowNavBar] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenNav, setOpenNav] = useState(false);
  const [newPayload, setNewPayload] = useState([]);
  const reducer = (state, action) => {
    if (action.type === "GET_ITEMS") {
      const newState = { ...state, ...action.payload };
      return newState;
    }
    if (action.type === "RESPONSE_ITEMS") {
      const newState = { ...state, ...action.payload };
      return newState;
    }
  };
  const [state, dispach] = useReducer(reducer, {
    username: "",
    email: "",
    password: "",
  });
  const [singleItemData, setSingleItemData] = useState([]);
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };
  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        toggleDarkTheme,
        cartCounter,
        setCartCounter,
        layout,
        setLayout,
        currentPage,
        setCurrentPage,
        showNavBar,
        setShowNavBar,
        windowWidth,
        setWindowWidth,
        isOpenNav,
        setOpenNav,
        pickedColor,
        setPickedColor,
        singleItemData,
        setSingleItemData,
        state,
        dispach,
        regPerson,
        setRegPerson,
        logged,
        setLogged,
        respData,
        setRespData,
        newPayload,
        setNewPayload,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
