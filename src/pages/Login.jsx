import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUsers } from "../utils";
import Wrapper from "../assets/wrappers/LoginWrapper";
import { useGlobalContext } from "../context";
import { useEffect } from "react";

function Login() {
  const { state, dispach, setLogged, respData, setRespData } =
    useGlobalContext();
  let navigate = useNavigate();

  useEffect(() => {
    const response = getUsers();
    response
      .then((data) => {
        setRespData(data);
      })
      .catch((error) => {
        console.log(error);
      });
    //dispach({ type: "RESPONSE_ITEMS", payload: responseData });
  }, []);
  localStorage.setItem(
    "Logged_User",
    JSON.stringify({ username: "", loggedUser: false })
  );
  let localStorageData = localStorage.getItem("Logged_User");
  let storageData = JSON.parse(localStorageData);
  const loginUser = (e) => {
    e.preventDefault();

    let loginSuccess = false;
    respData.forEach((item) => {
      if (state.email === item.email && state.password === item.password) {
        console.log(typeof item.username);
        storageData.username = item.username;
        storageData.loggedUser = true;
        setLogged(storageData);
        localStorage.setItem("Logged_User", JSON.stringify(storageData));
        toast.success(`Welcome ${item.username}`);
        loginSuccess = true;
        navigate("/");
      }
    });
    if (!loginSuccess) {
      toast.error("Failed to access");
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newValue = { ...state, [name]: value };
    dispach({ type: "GET_ITEMS", payload: newValue });
  };
  const loginAsGuestUser = (e) => {
    e.preventDefault();
    respData.forEach((item) => {
      //item.logged = true;
      storageData.username = "guest";
      storageData.loggedUser = true;
      setLogged(storageData);
      localStorage.setItem("Logged_User", JSON.stringify(storageData));
    });
    toast.success("welcome guest user");
    navigate("/");
  };
  return (
    <Wrapper>
      <form method="post" onSubmit={loginUser}>
        <h2>login</h2>
        <div className="emailWrapper">
          <label>email</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div className="passwordWrapper">
          <label>password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="btns">
          <button className="loginBtn" type="submit">
            login
          </button>
          <button className="guestBtn" onClick={loginAsGuestUser}>
            guest user
          </button>
        </div>
        <div className="formFooter">
          <p>Not a member yet?</p>
          <Link to={"/register"}>
            <button type="submit" className="registerBtn">
              register
            </button>
          </Link>
        </div>
      </form>
    </Wrapper>
  );
}

export default Login;
