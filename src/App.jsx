import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditWarehouse from './components/EditWarehouse'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path='/warehouse/:warehouseId/edit' element={<EditWarehouse />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
