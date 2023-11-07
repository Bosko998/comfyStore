import React from "react";
import { useGlobalContext } from "../context";
import Wrapper from "../assets/wrappers/PriceCardWrapper";
function PriceCard() {
  const { logged } = useGlobalContext();
  return (
    <Wrapper>
      <div className="card-body">
        <div className="amount-div">
          <p className="subtotal">subtotal</p>
          <p className="subtotal-price">$100</p>
        </div>
        <div className="underline"></div>
        <div className="amount-div">
          <p className="shipping">shipping</p>
          <p className="shipping-price">$100</p>
        </div>
        <div className="underline"></div>
        <div className="amount-div">
          <p className="tax">tax</p>
          <p className="tax">$20</p>
        </div>
        <div className="underline"></div>
        <div className="amount-div" style={{ marginBottom: "2rem" }}>
          <p>order total</p>
          <p>$100</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default PriceCard;
