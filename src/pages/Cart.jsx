import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CartWrapper";
import { useGlobalContext } from "../context";
import PriceCard from "../components/PriceCard";
import { useEffect } from "react";

function Cart() {
  const {
    cartCounter,
    setCartCounter,
    singleItemData,
    logged,
    newPayload,
    setNewPayload,
  } = useGlobalContext();

  const removeItem = (index) => {
    const removedItem = newPayload[index];
    const updatedPayload = [...newPayload];
    // Decrease cartCounter by the amount of the removed item
    setCartCounter((prevCounter) => prevCounter - removedItem.inputValue);
    // Remove the item from the updated payload
    updatedPayload.splice(index, 1);
    // Update the state with the updated payload
    setNewPayload(updatedPayload);
  };

  useEffect(() => {
    const updatedPayload = [];
    singleItemData.forEach((item) => {
      const existingItem = updatedPayload.find(
        (newItem) =>
          newItem.title === item.title &&
          newItem.attributeColor === item.attributeColor
      );

      if (existingItem) {
        existingItem.inputValue += item.inputValue;
      } else {
        updatedPayload.push({ ...item, amount: 1 });
      }
    });
    setNewPayload(updatedPayload);
  }, [singleItemData, setNewPayload]);

  const controlAmount = (value, index) => {
    const updatedPayload = [...newPayload];
    const updatedItem = updatedPayload[index];
    console.log(updatedPayload);
    // Update inputValue
    updatedItem.inputValue = value;
    // Calculate the change in amount
    const amountChange = value - updatedItem.inputValue;

    // Update cartCounter by the amount change
    setCartCounter((prevCounter) => prevCounter + amountChange);
    console.log(cartCounter);
    // Update the state with the updated payload
    setNewPayload(updatedPayload);
  };
  return (
    <Wrapper>
      {cartCounter === 0 ? (
        <>
          <h2>your cart is empty</h2>
          <div className="underline-cart"></div>
        </>
      ) : (
        <>
          <h2>shopping cart</h2>
          <div className="underline"></div>
          <div className="content-section">
            <div className="content-wrapper-div">
              {newPayload.map((item, index) => (
                <section key={index}>
                  <div
                    className="underline"
                    style={{ display: index === 0 ? "none" : "block" }}
                  ></div>
                  <section className="content-wrapper">
                    <div className="img-container">
                      <img src={item.image} alt="image" />
                    </div>
                    <div className="content">
                      <h3 className="title">{item.title}</h3>
                      <p>{item.company}</p>
                      <div className="color-wrapper">
                        <p>Color: </p>
                        <div
                          className="color-item"
                          style={{ background: `${item.attributeColor} ` }}
                        ></div>
                      </div>
                    </div>
                    <div className="amont-wrapper">
                      <p>amount</p>
                      <select
                        name="select"
                        id="select"
                        value={item.inputValue}
                        onChange={(e) => controlAmount(e.target.value, index)}
                      >
                        {item.options.map((option, optionIndex) => (
                          <option key={optionIndex}>{option}</option>
                        ))}
                      </select>
                      <button
                        className="removeBtn"
                        onClick={() => removeItem(index)}
                      >
                        remove
                      </button>
                    </div>
                    <p>${item.formattedSum}</p>
                  </section>
                </section>
              ))}
            </div>
            <PriceCard />
            <Link to={logged.loggedUser ? "/checkout" : "/login"}>
              <button className="proceed" type="submit">
                {logged.loggedUser ? "place your order" : "please login"}
              </button>
            </Link>
          </div>
        </>
      )}
    </Wrapper>
  );
}

export default Cart;
