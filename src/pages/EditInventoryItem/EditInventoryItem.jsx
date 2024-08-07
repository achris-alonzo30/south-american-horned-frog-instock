import "./EditInventoryItem.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import { getAllWarehouse } from "../../lib/api-warehouses";
import { useNavigate, useParams } from "react-router-dom";

import errorIcon from "../../assets/icons/error-24px.svg";

import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/CardHeader/CardHeader";
import { DynamicInput } from "../../components/DynamicInput/DynamicInput";
import { DynamicButton } from "../../components/DynamicButton/DynamicButton";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";


export const EditInventoryItem = () => {
  const { inventoryId } = useParams();
  const navigate = useNavigate();
  const [availableWarehouses, setAvailableWarehouses] = useState([]);

  const warehouseMap = {
    "Brooklyn Warehouse": "1",
    Washington: "2",
    Jersey: "3",
    SF: "4",
    "Santa Monica": "5",
    Seattle: "6",
    Miami: "7",
    Boston: "8",
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [warehouseId, setWarehouseId] = useState("");
  const [stockStatus, setStockStatus] = useState("");
  const [quantity, setQuantity] = useState("");

  const [emptyFields, setEmptyFields] = useState({});

  useEffect(() => {
    const fetchInventoryItem = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/inventories"
        );
        const items = response.data;

        const item = items.find((item) => item.id.toString() == inventoryId);

        if (item) {
          setName(item.item_name);
          setDescription(item.description);
          setCategory(item.category);
          setWarehouse(item.warehouse_name);
          setWarehouseId(warehouseMap[item.warehouse_name]);
          setStockStatus(item.status);
          setQuantity(item.quantity);
        } else {
          alert("Item not found");
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching inventory items", error);
        alert("Error fetching inventory items");
      }
    };
    getAllWarehouse(setAvailableWarehouses);
    fetchInventoryItem();
  }, [inventoryId]);

  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = true;
    if (!description) errors.description = true;
    if (!category) errors.category = true;
    if (!warehouse) errors.warehouse = true;
    if (!stockStatus) errors.stockStatus = true;
    if (!quantity) errors.quantity = true;

    setEmptyFields(errors);

    return Object.keys(errors).length === 0;
  };

  const warehouseChangeHandler = (event) => {
    const reverseMap = {
      1: "Brooklyn Warehouse",
      2: "Washington",
      3: "Jersey",
      4: "SF",
      5: "Santa Monica",
      6: "Seattle",
      7: "Miami",
      8: "Boston",
      "Brooklyn Warehouse": "1",
      Washington: "2",
      Jersey: "3",
      SF: "4",
      "Santa Monica": "5",
      Seattle: "6",
      Miami: "7",
      Boston: "8",
    };

    const mappedWarehouseID = reverseMap[event.target.value];
    setWarehouse(event.target.value);
    setWarehouseId(mappedWarehouseID);
  };

  const saveHandler = async (event) => {
    event.preventDefault();

    const parsedQuantity = parseInt(quantity);
    const updatedStockStatus =
      parsedQuantity === 0 ? "Out of Stock" : stockStatus;
    const updatedQuantity =
      updatedStockStatus === "Out of Stock" ? 0 : parsedQuantity;

    if (!validateForm()) {
      return;
    }

    const itemEditInfo = {
      id: inventoryId,
      warehouse_id: warehouseId,
      item_name: name,
      category: category,
      description: description,
      status: updatedStockStatus,
      quantity: updatedQuantity,
      warehouse_name: warehouse,
    };

    try {
      await axios.put(
        `http://localhost:8080/api/inventories/${inventoryId}`,
        itemEditInfo
      );
      alert("We have successfully edited your item information!");
      navigate(-1);
    } catch (error) {
      console.error("Item Edit Page", error);
    }
  };

  const cancelHandler = () => {
    navigate("/inventory");
  };

  if (!availableWarehouses.length) return <LoadingSpinner />;

  return (
    <main className="main">
      <Card>
        <CardHeader
          flexStyle="flexRow"
          browserName="Edit Inventory Item"
          tabletHeaderBorder={true}
          withArrow
        />
        <form className="edit-item__form" onSubmit={saveHandler}>
          <div className="details-sections">
            <div className="edit-item__form-section item-details">
              <h2 className="edit-item__subheader"> Item Details</h2>
              <label className="edit-item__label" htmlFor="item-name">
                Item Name
              </label>
              <input
                className={`edit-item__input ${
                  emptyFields.name ? "error" : ""
                }`}
                type="text"
                id="item-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Item Name"
              />
              <div
                className={`${
                  emptyFields.name ? "error-message" : "error-message_hide"
                }`}
              >
                <img className="error_icon" src={errorIcon} />
                This field is required
              </div>
              <label className="edit-item__label" htmlFor="item-desc">
                Description
              </label>
              <textarea
                className={`edit-item__textareaInput ${
                  emptyFields.description ? "error" : ""
                }`}
                id="item-desc"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Item Description"
              />
              <div
                className={`${
                  emptyFields.description
                    ? "error-message"
                    : "error-message_hide"
                }`}
              >
                <img className="error_icon" src={errorIcon} />
                This field is required
              </div>
              <label className="edit-item__label" htmlFor="wh-city">
                Category
              </label>
              <select
                className={`edit-item__select ${
                  emptyFields.category ? "error" : ""
                }`}
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                placeholder="Please Select"
              >
                <option>Select an Option</option>
                <option value="Electronics">Electronics</option>
                <option value="Gear">Gear</option>
                <option value="Apparel">Apparel</option>
                <option value="Accessories">Accessories</option>
                <option value="Health"> Health</option>
              </select>
              <div
                className={`${
                  emptyFields.category ? "error-message" : "error-message_hide"
                }`}
              >
                <img className="error_icon" src={errorIcon} />
                This field is required
              </div>
            </div>

            <div className="edit-item__form-section item-availability">
              <h2 className="edit-item__subheader"> Item Availability</h2>
              <label className="edit-item__label" htmlFor="item-status">
                Status
              </label>
              <div
                className={`item-status__container ${
                  emptyFields.stockStatus ? "error" : ""
                }`}
              >
                <DynamicInput
                  type="radio"
                  radioName="In Stock"
                  checked={stockStatus === "In Stock"}
                  onChange={() => setStockStatus("In Stock")}
                />
                <DynamicInput
                  type="radio"
                  radioName="Out of Stock"
                  checked={stockStatus === "Out of Stock"}
                  onChange={() => setStockStatus("Out of Stock")}
                />
              </div>
              <div
                className={`${
                  emptyFields.stockStatus
                    ? "error-message"
                    : "error-message_hide"
                }`}
              >
                <img className="error_icon" src={errorIcon} />
                This field is required
              </div>
              <div
                className={`${
                  stockStatus === "In Stock"
                    ? "ifStock--request_quantity"
                    : "ifStock--request_quantity--hide"
                }`}
              >
                <label className="edit-item__label" htmlFor="item-name">
                  Quantity
                </label>
                <input
                  className={`edit-item__input ${
                    emptyFields.quantity ? "error" : ""
                  }`}
                  type="text"
                  id="item-quantity"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  placeholder="Enter Item Quantity"
                />
                <div
                  className={`${
                    emptyFields.quantity
                      ? "error-message"
                      : "error-message_hide"
                  }`}
                >
                  <img className="error_icon" src={errorIcon} />
                  This field is required
                </div>
              </div>
              <label className="edit-item__label" htmlFor="item-status">
                Warehouse
              </label>
              <select
                className={`edit-item__select ${
                  emptyFields.warehouse ? "error" : ""
                }`}
                value={warehouse}
                onChange={warehouseChangeHandler}
                placeholder="Please Select"
              >
                <option>Select an Option</option>
                {availableWarehouses.map(({ warehouse_name, id }, index) => (
                  <option key={id} value={warehouse_name}>
                    {warehouse_name}
                  </option>
                ))}
              </select>
              <div
                className={`${
                  emptyFields.warehouse ? "error-message" : "error-message_hide"
                }`}
              >
                <img className="error_icon" src={errorIcon} />
                This field is required
              </div>
            </div>
          </div>

          <div className="cancel-submit__container">
            <DynamicButton variant="cancel" onClick={cancelHandler} />
            <DynamicButton type="submit" variant="save" />
          </div>
        </form>
      </Card>
    </main>
  );
};
