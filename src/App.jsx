import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { WarehouseList } from './component/WarehouseList/WarehouseList'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WarehouseList />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
