import { useGlobalContext } from "../context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <div className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon-sun" />
        )}
      </button>
    </div>
  );
};
export default ThemeToggle;
