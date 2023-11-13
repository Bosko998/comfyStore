import { useState } from "react";
import { useLoaderData, Link, Navigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/SingleProductWrapper";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../context";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
const singleProductQuery = (id) => {
  return {
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await customFetch.get(`products/${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleProductQuery(id));
    return { id };
  };
function SingleProduct() {
  const [inputValue, setInputValue] = useState(1);
  const {
    pickedColor,
    setPickedColor,
    cartCounter,
    setCartCounter,
    setSingleItemData,
    singleItemData,
  } = useGlobalContext();
  const { id } = useLoaderData();
  const { data } = useQuery(singleProductQuery(id));
  const { attributes } = data?.data;
  const formattedSum = (attributes.price / 100).toFixed(2);
  var options = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  let attributeColor = "";
  const handleColor = (index, attribute) => {
    let newObject = {
      className: `circle${index}`,
    };
    if (pickedColor === index) {
      newObject.className = `circle${pickedColor} active`;
      attributeColor = attribute;
    }
    return newObject;
  };
  const handleItem = () => {
    attributes.index = cartCounter;
    try {
      setCartCounter(inputValue + cartCounter);
      // if (singleItemData[cartCounter - 1]?.index === attributes.index - 1) {
      // }
      setSingleItemData([
        ...singleItemData,
        {
          index: cartCounter,
          inputValue,
          attributeColor,
          ...attributes,
          formattedSum,
          options,
        },
      ]);
      toast.success("Item added to cart");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };
  if (!data) return <Navigate to="/" />;
  return (
    <Wrapper>
      <div className="breadcrumbs">
        <Link to={"/"}>home</Link>
        <p>{`>`}</p>
        <Link to={"/products"}>products</Link>
      </div>
      <div className="main-wrapper">
        <img src={attributes.image} alt="pic" />
        <div className="content-wrapper">
          <div className="text-wrapper">
            <h2>{attributes.title}</h2>
            <h3>{attributes.company}</h3>
            <p className="sum">{formattedSum}$</p>
            <p className="text">{attributes.description}</p>
          </div>
          <div className="colors-wrapper">
            <h3>colors</h3>
            <div className="circle-colors">
              {attributes.colors.map((attribute, index) => {
                const { className } = handleColor(index, attribute);
                return (
                  <div
                    key={index}
                    style={{
                      background: attribute,
                      height: "1.5rem",
                      width: "1.5rem",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    className={className}
                    onClick={() => setPickedColor(index)}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="amount-wrapper">
            <h3>amount</h3>
            <select
              id="selectAmount"
              onChange={(e) => setInputValue(parseInt(e.target.value))}
            >
              {options.map((option) => {
                return <option key={option}>{option}</option>;
              })}
            </select>
          </div>
          <button className="addBtn" onClick={handleItem}>
            add to bag
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default SingleProduct;
