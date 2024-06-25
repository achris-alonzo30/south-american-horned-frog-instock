
import "./App.scss";

import { 
  Route, 
  Routes, 
  BrowserRouter 
} from "react-router-dom";

import Header from "./components/Header/Header";
import { Warehouses } from "./pages/Warehouses/Warehouses";
import EditWarehouse from './components/EditWarehouse/EditWarehouse'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />}>
        <Route path='/warehouse/:warehouseId/edit' element={<EditWarehouse />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
