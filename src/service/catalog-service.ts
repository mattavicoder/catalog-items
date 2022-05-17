import { Item } from "../models-interfaces/Item";
import AxiosRequests from "./generic/axios-service";

const ItemApi = {
  list: () => AxiosRequests.get("items"),
  details: (id: string) => AxiosRequests.get(`items/${id}`),
  create: (activity: Item) => AxiosRequests.post("items", activity),
};

export default ItemApi;
