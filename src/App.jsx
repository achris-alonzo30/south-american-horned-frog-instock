import "./App.scss";

import { useState } from "react";
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
  const [isNewWarehouse, setIsNewWarehouse] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Warehouses isNewWarehouse={isNewWarehouse} />}
        />
        <Route
          path="/warehouse/post"
          element={
            <NewWarehouse
              isNewWarehouse={isNewWarehouse}
              setIsNewWarehouse={setIsNewWarehouse}
            />
          }
        />
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
