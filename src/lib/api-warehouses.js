import axios from "axios";

const API_WAREHOUSES_URL = "http://localhost:8080/api/warehouses";

export const getAllWarehouse = async (fn) => {
  try {
    const res = await axios.get(API_WAREHOUSES_URL);

    return fn(res.data);
  } catch (error) {
    console.error(error);
  }
};

export const getWarehouseDetails = async (fn, id) => {
  try {
    const res = await axios.get(`${API_WAREHOUSES_URL}/${id}`);

    return fn(res.data);
  } catch (error) {
    console.error(error);
  }
};

export const getSingleWarehouseInventories = async (fn, id) => {
  try {
    const res = await axios.get(`${API_WAREHOUSES_URL}/${id}/inventories`);

    return fn(res.data);
  } catch (error) {
    console.error(error);
  }
};

export const deleteWarehouse = async (id) => {
  try {
    const res = await axios.delete(`${API_WAREHOUSES_URL}/${id}`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const postWarehouse = async (formValues) => {
  try {
    await axios.post(API_WAREHOUSES_URL, formValues);
  } catch (error) {
    console.error(error);
  }
};
