import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Warehouses } from "./pages/Warehouses/Warehouses";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import EditInventoryItem from "./components/EditInventoryItem/EditInventoryItem";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";

import { WarehouseDetails } from "./pages/WarehouseDetails/WarehouseDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewWarehouse from "./pages/NewWarehouse/NewWarehouse";

import { Inventory } from "./pages/Inventory/Inventory";
import NewWarehouseForm from "./components/NewWarehouseForm/NewWarehouseForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route
          path="/warehouse/:warehouseId/edit"
          element={<EditWarehouse />}
        />
        <Route path="/warehouse/:warehouseId" element={<WarehouseDetails />} />
        <Route path="/warehouse/post" element={<NewWarehouse />} />
        <Route path="/inventory/:itemId/" element={<EditInventoryItem />} />
        <Route path="/inventory/add-new-item" element={<AddInventoryItem />} />
        <Route path="/inventory" element={<Inventory />} />



        {/* <Route path="/" element={<Warehouses />} />
        <Route path="/warehouse/:warehouseId" element={<WarehouseDetails />} />
        <Route
          path="/warehouse/:warehouseId/edit"
          element={<EditWarehouse />}
        />

        <Route path="/warehouse/:warehouseId" element={<WarehouseDetails />} />

        <Route path="/inventory" element={<Inventory />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
