import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";
import { customFetch } from "../utils";
import Wrapper from "../assets/wrappers/OrdersWrapper";
const singleProductQuery = (id) => {
  return {
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await customFetch.get(`orders`);
      return data;
    },
  };
};
export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn("You must logged in to view orders");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
      return null;
    }
  };
function Orders() {
  return (
    <Wrapper>
      <h2>your order is empty</h2>
      <div className="underline-order"></div>
    </Wrapper>
  );
}

export default Orders;
