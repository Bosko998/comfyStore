import { redirect, Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "../assets/wrappers/RegisterWrapper";
import { writeUsers } from "../utils";

function Register() {
  let navigate = useNavigate();
  const { regPerson, setRegPerson } = useGlobalContext();

  const isRegisted = navigate.state === "submitting";
  const registerUser = (e) => {
    e.preventDefault();
    console.log(regPerson);
    if (regPerson.username && regPerson.email && regPerson.password) {
      const newPerson = { ...regPerson, id: new Date().getTime().toString() };
      writeUsers(newPerson);
      setRegPerson({ username: "", email: "", password: "" });
      navigate("/login");
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegPerson({ ...regPerson, [name]: value });
    //dispach({ type: "GET_ITEMS", payload: newValue });
  };
  return (
    <Wrapper>
      <form method="post" onSubmit={registerUser}>
        <h2>register</h2>
        <div className="userNameWrapper">
          <label>username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            required
          />
        </div>
        <div className="emailWrapper">
          <label>email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="passwordWrapper">
          <label>password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="btns">
          <button type="submit" className="loginBtn">
            {isRegisted ? "registring" : "register"}
          </button>
        </div>
        <div className="formFooter">
          <p>Already a member?</p>
          <Link to={"/login"}>
            <button className="registerBtn">login</button>
          </Link>
        </div>
      </form>
    </Wrapper>
  );
}

export default Register;
