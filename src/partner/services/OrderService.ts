import { loginService } from "src/common/services";

const headersConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: ``,
  },
};
const postConfig = { method: "post", body: "", ...headersConfig };
const putConfig = { method: "put", body: "", ...headersConfig };
const getConfig = { method: "get", ...headersConfig };

export interface IOrderService {
  markOrderAsPaid: (orderId: string) => Promise<string>;
  markOrderAsUnpaid: (orderId: string) => Promise<string>;
}

export const OrderService: IOrderService = {
  markOrderAsPaid: async (orderId: string) => {
    postConfig.headers.Authorization = `Bearer ${loginService.getJWT()}`;
    postConfig.body = JSON.stringify({ action: "mark_as_paid" });
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/v1/orders/${orderId}/actions`,
      postConfig,
    );
    const data = await res.json();
    if (data.statusCode !== 201) {
      throw new Error(data.message);
    }
    return data.data;
  },
  markOrderAsUnpaid: async (orderId: string) => {
    postConfig.headers.Authorization = `Bearer ${loginService.getJWT()}`;
    postConfig.body = JSON.stringify({ action: "mark_as_not_paid" });
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/v1/orders/${orderId}/actions`,
      postConfig,
    );
    const data = await res.json();
    if (data.statusCode !== 201) {
      throw new Error(data.message);
    }
    return data.data;
  },
};
