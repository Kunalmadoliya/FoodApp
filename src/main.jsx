// main.jsx or index.jsx

import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import App from "./App.jsx";
import "./index.css";
import FoodContext from "./context/FoodContext.jsx";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    <FoodContext>
      <BrowserRouter>
        <App />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </BrowserRouter>
    </FoodContext>
  </StrictMode>
);
