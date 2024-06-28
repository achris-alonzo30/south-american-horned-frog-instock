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

export const getSingleInventory = async (fn, id) => {
  try {
    const res = await axios.get(`${API_INVENTORIES_URL}/${id}`);
    return fn(res.data);
  } catch (error) {
    console.error(error);
  }
};

export const deleteInventory = async (id) => {
  try {
    const res = await axios.delete(`${API_INVENTORIES_URL}/${id}`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
