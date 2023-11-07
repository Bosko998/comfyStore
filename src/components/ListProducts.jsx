import { useState } from "react";
import { useGlobalContext } from "../context";
import Wrapper from "../assets/wrappers/ListProductsWrapper";
import { Link } from "react-router-dom";

function ListProducts({ products: { data: products, meta }, searchTerm }) {
  const { currentPage, setCurrentPage, layout, activeLayoutRef } =
    useGlobalContext();
  const buttons = ["prev", "1", "2", "3", "next"];
  const handleNumber = (e) => {
    const selectedPage = e.target.innerHTML;
    if (selectedPage === "prev") {
      setCurrentPage(currentPage === "1" ? "3" : (currentPage - 1).toString());
    } else if (selectedPage === "next") {
      setCurrentPage(
        currentPage === "3" ? "1" : (parseInt(currentPage) + 1).toString()
      );
    } else {
      setCurrentPage(selectedPage);
    }
  };
  const determineButtonClassAndPage = (button) => {
    if (button === "prev") {
      const newPage =
        currentPage === "1" ? "3" : (parseInt(currentPage) - 1).toString(); //Move one number previous
      return { className: "btn", page: newPage };
    } else if (button === "next") {
      const newPage =
        currentPage === "3" ? "1" : (parseInt(currentPage) + 1).toString(); //Move one number next
      return { className: "btn", page: newPage };
    } else {
      return {
        className: currentPage === button ? "active btn" : "btn",
        page: button,
      };
    }
  };
  return (
    <Wrapper>
      <div
        className={
          layout == "secondBtnLayout"
            ? "listProducts singleLinelist"
            : "listProducts"
        }
      >
        {products.map((item) => {
          const { attributes, id } = item;
          const { image, title, price, company } = attributes;
          const formattedNumber = (price / 100).toFixed(2);

          return (
            <Link
              to={`${id}`}
              className={
                layout == "secondBtnLayout"
                  ? "singleProduct singleLineProduct"
                  : "singleProduct"
              }
              key={id}
            >
              <img
                src={image}
                alt="featuredImg"
                className={layout == "secondBtnLayout" ? "lineImg" : "img"}
              />
              {layout == "secondBtnLayout" ? (
                <>
                  <div className="contentProduct">
                    <h4>{title}</h4>
                    <p
                      style={{
                        color: `#f8f8f2`,
                        fontSize: "1rem",
                        textAlign: "left",
                      }}
                    >
                      {company}
                    </p>
                  </div>
                  <div style={{ margin: "0 -0.1rem 0 auto" }}>
                    <p
                      style={{
                        color: `#f8f8f2`,
                        fontSize: "1.125rem",
                        fontWeight: "500",
                      }}
                    >
                      ${formattedNumber}
                    </p>
                  </div>
                </>
              ) : (
                <div className="contentProduct">
                  <h4>{title}</h4>
                  <p>${formattedNumber}</p>
                </div>
              )}
            </Link>
          );
        })}
      </div>
      <div className="page-wrapper">
        <div className="page-number">
          {buttons.map((button, index) => {
            const { className, page } = determineButtonClassAndPage(button);
            return (
              <Link
                key={index}
                onClick={(e) => handleNumber(e)}
                to={`?page=${page}`}
              >
                <button className={className} style={{ paddingLeft: "1rem" }}>
                  {button}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default ListProducts;
