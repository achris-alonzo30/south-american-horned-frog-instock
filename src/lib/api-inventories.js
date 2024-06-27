import axios from "axios";

const API_INVENTORIES_URL = "http://localhost:8080/api/inventories";

export const getAllInventories = async (fn) => {
  try {
    const res = await axios.get(API_INVENTORIES_URL);

    return fn(res.data);
  } catch (error) {
    console.error(error);
  }
};
