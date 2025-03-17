import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import AppRouter from "./router/router";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
