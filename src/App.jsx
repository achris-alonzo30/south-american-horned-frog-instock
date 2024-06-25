import "./App.scss";

import { 
  Route, 
  Routes, 
  BrowserRouter } from "react-router-dom";

import { Homepage } from "./pages/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
