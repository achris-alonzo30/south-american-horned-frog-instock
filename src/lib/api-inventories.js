import axios from "axios";

const API_INVENTORIES_URL = "http://localhost:8080/api/inventories";

export const getAllInventories = async (fn, sortBy, orderBy) => {
  try {
    const res = await axios.get(API_INVENTORIES_URL, {
      params: {
        sort_by: sortBy,
        order_by: orderBy
      }
    });

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
