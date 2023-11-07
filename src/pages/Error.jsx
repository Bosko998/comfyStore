import Wrapper from "../assets/wrappers/ErrorWrapper";
import { Link } from "react-router-dom";
function Error() {
  return (
    <Wrapper>
      <h1>404</h1>
      <h2>page not found</h2>
      <p>Sorry, we couldn't find the page you're looking for</p>
      <Link to={"/"}>
        <button className="go-home">go back gome</button>
      </Link>
    </Wrapper>
  );
}

export default Error;
