import { useState } from "react";

import "./App.scss";

import Header from "./components/Header/Header";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditWarehouse from './components/EditWarehouse/EditWarehouse'

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
        <Route path='/warehouse/:warehouseId/edit' element={<EditWarehouse />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
