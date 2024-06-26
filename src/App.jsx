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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<EditWarehouse />}>
          {/* <Route
            path="/editwarehouse/:warehouseId"
            element={<EditWarehouse />}
          /> */}
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
