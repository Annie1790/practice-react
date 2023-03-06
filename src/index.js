import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./another_practice.css";

import Board from "./another_practice.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Board />
  </StrictMode>
);