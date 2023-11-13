import React from "react";
import { useGlobalContext } from "../context";
import Wrapper from "../assets/wrappers/PriceCardWrapper";
function PriceCard() {
  const { newPayload } = useGlobalContext();
  const tax = 20;
  const price = newPayload.map((item) => {
    return [parseFloat(item.formattedSum), parseInt(item.inputValue)];
  });
  const sum = price.reduce((accumulator, currentArray) => {
    return accumulator + currentArray[0] * currentArray[1];
  }, 0);
  return (
    <Wrapper>
      <div className="card-body">
        <div className="amount-div">
          <p className="subtotal">subtotal</p>
          <p className="subtotal-price">{sum} $</p>
        </div>
        <div className="underline"></div>
        <div className="amount-div">
          <p className="shipping">shipping</p>
          <p className="shipping-price">{sum} $</p>
        </div>
        <div className="underline"></div>
        <div className="amount-div">
          <p className="tax">tax</p>
          <p className="tax">{tax} $</p>
        </div>
        <div className="underline"></div>
        <div className="amount-div" style={{ marginBottom: "2rem" }}>
          <p>order total</p>
          <p>{sum + tax} $</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default PriceCard;
