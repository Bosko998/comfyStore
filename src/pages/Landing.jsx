import { useLoaderData } from "react-router-dom";
import React from "react";
import LandingPage from "../components/LandingPage";
import FeaturedProducts from "../components/FeaturedProducts";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const productSearchUrl =
  "https://strapi-store-server.onrender.com/api/products";

const searchProductsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${productSearchUrl}`);
      return response.data;
    },
  };
};
export const loader =
  (QueryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "all";
    await QueryClient.ensureQueryData(searchProductsQuery(searchTerm));
    return { searchTerm };
  };
function Landing() {
  const { searchTerm } = useLoaderData();
  const { data: items } = useQuery(searchProductsQuery(searchTerm));
  return (
    <>
      <LandingPage items={items.data} />
      <FeaturedProducts items={items.data} />
    </>
  );
}

export default Landing;
