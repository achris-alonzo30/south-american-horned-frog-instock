import { useState } from "react";

import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <>
      <Header></Header>
      <WarehouseDetails></WarehouseDetails>
      <Footer></Footer>
    </>
  );
}

export default App;
