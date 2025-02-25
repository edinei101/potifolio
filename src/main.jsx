import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importe o BrowserRouter
import App from "./App";
import "./styles/global.scss";

// Cria a raiz do React no elemento com id "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza o aplicativo dentro do BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
