import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./more_practice.css";

import App from "./more_practice.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);