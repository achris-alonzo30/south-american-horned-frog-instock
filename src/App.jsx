import "./App.scss";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Warehouses } from "./pages/Warehouses/Warehouses";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";

import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
