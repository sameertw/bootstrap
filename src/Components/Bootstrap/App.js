import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bootstrap from "./Bootstrap";
import Grid from './Grid';
import ColHelpers from './ColHelpers';
import Nesting from './Nesting';
import Margin from './Margin';
import Horizontal from './Horizontal';
import Vertical from './Vertical';
import FlexDirections from './FlexDirections';

const BootstrapApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bootstrap />}></Route>
        <Route path="/grid" element={<Grid />}></Route>
        <Route path="/col-helper" element={<ColHelpers />}></Route>
        <Route path="/nesting" element={<Nesting />}></Route>
        <Route path="/margin" element={<Margin />}></Route>
        <Route path="/horizontal" element={<Horizontal />}></Route>
        <Route path="/vertical" element={<Vertical />}></Route>
        <Route path="/flex-direction" element={<FlexDirections />}></Route>
        
        <Route path="*" element={<Bootstrap />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BootstrapApp;
