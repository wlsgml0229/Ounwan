import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ounwanAxios from "./utils/axiosSetting";
import axios from "axios";
axios.defaults.baseURL = "http://43.201.95.19:8080";
const root = ReactDOM.createRoot(document.getElementById("root"));
ounwanAxios.init();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
