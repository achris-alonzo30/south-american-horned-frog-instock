import "./App.scss";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
