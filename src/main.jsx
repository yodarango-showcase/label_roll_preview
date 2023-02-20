import React from "react";
import ReactDOM from "react-dom/client";
import { RollPreview } from "./roll";
// import { PreviewRoll } from "./old_version/preview_roll";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RollPreview />
    {/*<PreviewRoll />*/}
  </React.StrictMode>
);
