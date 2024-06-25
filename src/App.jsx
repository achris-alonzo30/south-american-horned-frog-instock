import "./App.scss";

import { 
  Route, 
  Routes, 
  BrowserRouter } from "react-router-dom";

import { Warehouses } from "./pages/Warehouses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Warehouses />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
