import "./App.css";
import React from 'react'
// import { Breadcrumb, Layout, Menu, theme } from "antd";
import Navbar from "./Components/Navbar.js";

// import type { MenuProps } from 'antd';
// import { Button, Dropdown, Space } from 'antd';
// import Carousel from "./Components/Carousel";
import CarouselFadeExample from "./Components/Carousel";
import Anim from "./Components/Anim";
import Product from "./pages/Product"

const App = () => {
  return (

      <>
      <Navbar />
      <CarouselFadeExample />
      <Anim />
      <Product />
      </> 

  );
};

export default App;
