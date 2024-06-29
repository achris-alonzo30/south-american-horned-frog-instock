import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Warehouses } from "./pages/Warehouses/Warehouses";
import EditWarehouseItem from "./components/EditWarehouseItem/EditWarehouseItem";
import EditInventoryItem from "./components/EditInventoryItem/EditInventoryItem";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";

import { WarehouseDetails } from "./pages/WarehouseDetails/WarehouseDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewWarehouse from "./pages/NewWarehouse/NewWarehouse";

import { Inventory } from "./pages/Inventory/Inventory";
import { InventoryDetails } from "./pages/InventoryDetails/InventoryDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/warehouse/post" element={<NewWarehouse />} />
        <Route path="/warehouse/:warehouseId" element={<WarehouseDetails />} />
        <Route path="/warehouse/:warehouseId/edit" element={<EditWarehouseItem />} />
       
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/post" element={<AddInventoryItem />} />
        <Route path="/inventory/:inventoryId" element={<InventoryDetails />} />
        <Route path="/inventory/:inventoryId/edit" element={<EditInventoryItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
