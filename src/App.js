import "./App.css";
import React from 'react'
// import { Breadcrumb, Layout, Menu, theme } from "antd";
import Navbar from "./Components/Navbar.js";

// import type { MenuProps } from 'antd';
// import { Button, Dropdown, Space } from 'antd';
// import Carousel from "./Components/Carousel";
import CarouselFadeExample from "./Components/Carousel";

const App = () => {
  return (

      <>
      <Navbar />
      <CarouselFadeExample />
      </> 

  );
};

export default App;
