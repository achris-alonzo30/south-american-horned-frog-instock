import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { Warehouses } from "./pages/Warehouses/Warehouses";
import { NewWarehouse } from "./pages/NewWarehouse/NewWarehouse";
import { WarehouseDetails } from "./pages/WarehouseDetails/WarehouseDetails";
import { EditWarehouseItem } from "./pages/EditWarehouseItem/EditWarehouseItem";

import { Inventory } from "./pages/Inventory/Inventory";
import { NewInventory } from "./pages/NewInventory/NewInventory";
import { InventoryDetails } from "./pages/InventoryDetails/InventoryDetails";
import { EditInventoryItem } from "./pages/EditInventoryItem/EditInventoryItem";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/warehouse/post" element={<NewWarehouse />} />
        <Route path="/warehouse/:warehouseId" element={<WarehouseDetails />} />
        <Route
          path="/warehouse/:warehouseId/edit"
          element={<EditWarehouseItem />}
        />

        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/post" element={<NewInventory />} />
        <Route path="/inventory/:inventoryId" element={<InventoryDetails />} />
        <Route
          path="/inventory/:inventoryId/edit"
          element={<EditInventoryItem />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
