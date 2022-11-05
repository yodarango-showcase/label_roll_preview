import React from "react";
import ReactDOM from "react-dom/client";
import { RollPreview } from "./roll";
import "./index.css";
import { Roll2 } from "./roll_2";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RollPreview />
  </React.StrictMode>
);
