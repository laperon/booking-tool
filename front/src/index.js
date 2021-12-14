import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// // import { render } from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// // import reportWebVitals from './reportWebVitals';


import { render } from "react-dom";
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import App from "./App";
import Admin from "./routes/admin";
import Locations from "./routes/locations";
import HeaderMenu from './blocks/HeaderMenu';
import Orders from './routes/orders';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <HeaderMenu />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="locations" element={<Locations />} />
      <Route path="orders" element={<Orders />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);