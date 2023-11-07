import Wrapper from "../assets/wrappers/FeaturedWrapper";
import { Link } from "react-router-dom";
function FeaturedProducts({ items }) {
  return (
    <Wrapper>
      <h2>featured products</h2>
      <div className="underline"></div>
      <div className="featured-products">
        {items.map((item) => {
          const { attributes, id } = item;
          const { image, title, price } = attributes;
          const formattedNumber = (price / 100).toFixed(2);
          if (attributes.featured) {
            return (
              <Link to={`products/${id}`} className="single-product" key={id}>
                <img src={image} alt="featured-img" />
                <h4>{title}</h4>
                <p>${formattedNumber}</p>
              </Link>
            );
          }
        })}
      </div>
    </Wrapper>
  );
}

export default FeaturedProducts;
