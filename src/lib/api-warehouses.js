import axios from "axios";

const API_WAREHOUSES_URL = "http://localhost:8080/api/warehouses";


export const getWarehouses = async(fn) => {
    try {
        const res = await axios.get(API_WAREHOUSES_URL);

        return fn(res.data);
    } catch (error) {
        console.error(error)
    }
}