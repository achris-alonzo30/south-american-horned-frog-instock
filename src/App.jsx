import "./App.scss";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Warehouses } from "./pages/Warehouses/Warehouses";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
// import { WarehouseDetails } from "./components/WarehouseDetails/WarehouseDetails";
import { Inventory } from "./pages/Inventory/Inventory";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />}>
          <Route
            path="/warehouse/:warehouseId/edit"
            element={<EditWarehouse />}
          />
        </Route>
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
