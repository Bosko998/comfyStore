import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingWrapper";
import carouselData from "../data";
function LandingPage() {
  return (
    <Wrapper>
      <div className="landing-content">
        <h1>We are changing the way people shop</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sint
          minus similique beatae, fuga assumenda ad ex incidunt cupiditate ullam
          necessitatibus molestias sed aperiam, libero aliquid a reiciendis ut
          dolore.
        </p>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <button>our products</button>
        </Link>
      </div>
      <div className="carousel-main">
        {carouselData.map((data) => {
          const { id, img, title } = data;
          return (
            <div className="carousel-img" key={id}>
              <img src={img} alt={title} />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default LandingPage;
