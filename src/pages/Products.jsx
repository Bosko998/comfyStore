import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SearchProducts from "../components/SearchProducts";
import ListProducts from "../components/ListProducts";
import { customFetch } from "../utils";
const searchProductsQuery = (pageNumber) => {
  return {
    queryKey: ["products", pageNumber],
    queryFn: async () => {
      const response = await customFetch.get(`/products${pageNumber}`);
      const products = response.data;
      return products;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.search || "";
    await queryClient.ensureQueryData(searchProductsQuery(searchTerm));
    return { searchTerm };
  };
function Products() {
  const { searchTerm } = useLoaderData();
  const { data } = useQuery(searchProductsQuery(searchTerm));
  return (
    <>
      <SearchProducts products={data} searchTerm={searchTerm} />
      <ListProducts products={data} />
    </>
  );
}

export default Products;
