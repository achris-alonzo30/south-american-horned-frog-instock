import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
