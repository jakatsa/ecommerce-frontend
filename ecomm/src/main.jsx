import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import product provider
import ProductProvider from "./context/ProductContext.jsx";
//import sidebar provider
import { SideBarProvider } from "./context/SideBarContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <SideBarProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </SideBarProvider>
);
