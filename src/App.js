import "./App.css";
import React from 'react'
// import { Breadcrumb, Layout, Menu, theme } from "antd";
import Navbar from "./Components/Navbar.js";

// import type { MenuProps } from 'antd';
// import { Button, Dropdown, Space } from 'antd';
// import Carousel from "./Components/Carousel";
import CarouselFadeExample from "./Components/Carousel";
import Product from "./pages/Product"
import Footerforpages from "./Components/Footerforpages"
import Gridsys from "./Components/Gridsys.js"

const App = () => {
  return (

      <>
      <Navbar />
      <CarouselFadeExample />
      <Gridsys />
      <Footerforpages />
      </> 

  );
};

export default App;
