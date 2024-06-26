import "./App.scss";

import { 
  Route, 
  Routes, 
  BrowserRouter 
} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Warehouses } from "./pages/Warehouses/Warehouses";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import { WarehouseDetails } from "./pages/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehouseDetails />}>
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
