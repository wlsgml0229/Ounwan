import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ounwanAxios from "./utils/axiosSetting";

const root = ReactDOM.createRoot(document.getElementById("root"));
ounwanAxios.init();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
