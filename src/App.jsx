import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Warehouses } from "./pages/Warehouses/Warehouses";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import { WarehouseDetails } from "./pages/WarehouseDetails/WarehouseDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewWarehouse from "./pages/NewWarehouse/NewWarehouse";

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
        <Route path="/warehouse/:warehouseId" element={<WarehouseDetails />} />
        <Route path="/warehouse/post" element={<NewWarehouse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
