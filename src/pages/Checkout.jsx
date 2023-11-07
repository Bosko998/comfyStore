import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../context";
import Wrapper from "../assets/wrappers/CheckoutWrapper";
import PriceCard from "../components/PriceCard";
function Checkout() {
  const { cartCounter } = useGlobalContext();
  const ControlInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
  };
  const orderShipping = (e) => {
    //e.preventDefault();
    toast.success("You have been sent order successfully");
  };
  return (
    <Wrapper>
      {cartCounter > 0 ? (
        <section>
          <h2 style={{ fontSize: "1.875rem" }}>place your order</h2>
          <div className="underline-checkout"></div>
          <div className="shipping-info">
            <div className="content-wrapper">
              <p style={{ fontSize: "1.875rem", marginBottom: "2rem" }}>
                shipping information
              </p>
              <form method="post">
                <div className="form-wrapper">
                  <label>first name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={(e) => ControlInputs(e)}
                  />
                </div>
                <div className="form-wrapper">
                  <label>last name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={(e) => ControlInputs(e)}
                  />
                </div>
                <Link to={`/`}>
                  <button
                    type="submit"
                    className="place-order"
                    onClick={orderShipping}
                  >
                    place your order
                  </button>
                </Link>
              </form>
            </div>
            <PriceCard />
          </div>
        </section>
      ) : (
        <>
          <h2>your cart is empty</h2>
          <div className="underline-checkout"></div>
        </>
      )}
    </Wrapper>
  );
}

export default Checkout;
