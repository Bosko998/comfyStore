import { useReducer, useState, useEffect } from "react";
import { useNavigate, Form, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchProductsWrapper";
import { PiCirclesFourFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "../context";

const defaultState = {
  product: "",
  category: "all",
  company: "all",
  sort: "a-z",
  progress: "100000",
  shipping: false,
};

function SearchProducts({ products: { data, meta }, searchTerm }) {
  const [isFilter, setIsFilter] = useState(false);
  useEffect(() => {
    const queryString = `?search=${state.product}&category=${
      state.category
    }&company=${state.company}&order=${state.sort}&price=${state.progress}${
      state.shipping ? "&shipping=on" : ""
    }`;
    if (isFilter) {
      navigate(queryString);
    }
  }, [isFilter]);
  let navigate = useNavigate();
  const sortBy = ["a-z", "z-a", "high", "low"];
  const numProducts = meta.pagination.total;
  const { layout, setLayout } = useGlobalContext();

  const reducer = (state, action) => {
    if (action.type === "GET_ITEMS" || action.type === "SEARCH_ITEMS") {
      const newState = { ...state, ...action.payload };
      // const { product, category, company, sort, progress, shipping } = newState;
      if (action.type === "SEARCH_ITEMS") {
        // const queryString = `?search=${product}&category=${category}&company=${company}&order=${sort}&price=${progress}${
        //   shipping ? "&shipping=on" : ""
        // }`;
        setIsFilter(!isFilter);
        //navigate(queryString);
      }
      return newState;
    }
    if (action.type === "RESET_ITEMS") {
      return defaultState;
    }
    if (action.type === "NO_VALUE") {
      return state;
    }
    throw new Error("No matching action type");
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newValue = { ...state, [name]: value };
    dispatch({ type: "GET_ITEMS", payload: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPayload = { ...state, id: new Date().getTime().toString() };
    dispatch({ type: "SEARCH_ITEMS", payload: newPayload });
  };

  return (
    <Wrapper>
      <Form method="post" className="search-div" onSubmit={handleSubmit}>
        <div className="content-div">
          <label>search products</label>
          <input
            type="text"
            name="product"
            id="product"
            value={state.product}
            onChange={handleChange}
          />
        </div>
        <div className="content-div">
          <label>select category</label>
          <select
            name="category"
            id="category"
            defaultValue="all"
            onChange={handleChange}
          >
            {meta.categories.map((category, index) => {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div className="content-div">
          <label>search company</label>
          <select name="company" id="company" onChange={handleChange}>
            {meta.companies.map((company, index) => {
              return <option key={index}>{company}</option>;
            })}
          </select>
        </div>
        <div className="content-div-sort">
          <label>sort by</label>
          <select name="sort" id="sort" onChange={handleChange}>
            {sortBy.map((company, index) => {
              return <option key={index}>{company}</option>;
            })}
          </select>
        </div>

        <div className="progress-div">
          <div className="progress-div-content">
            <label>select price</label>
            <p>1,000.00</p>
          </div>
          <input
            type="range"
            name="progress"
            id="progress"
            min="0"
            defaultValue="100000"
            max="100000"
            onChange={handleChange}
          />
          <div className="sub-content">
            <p>0</p>
            <p>Max: 1,000.00</p>
          </div>
        </div>
        <div className="shipping-div">
          <p>free shipping</p>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            onChange={handleChange}
          />
        </div>
        <div className="btn-div">
          <button type="submit" className="search-button">
            search
          </button>
          <button
            type="reset"
            className="reset-button"
            onClick={() => {
              dispatch({ type: "RESET_ITEMS" });
            }}
          >
            reset
          </button>
        </div>
      </Form>
      <div className="count-wrapper">
        <p>{numProducts} product</p>
        <div className="icons">
          <button
            className={layout === "active" ? "activeLayout" : "firstBtnLayout"}
            onClick={() => {
              setLayout("active");
            }}
          >
            <PiCirclesFourFill />
          </button>
          <button
            className={
              layout === "secondBtnLayout" ? "activeLayout" : "secondBtnLayout"
            }
            onClick={() => setLayout("secondBtnLayout")}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
      <div className="underline"></div>
    </Wrapper>
  );
}

export default SearchProducts;
