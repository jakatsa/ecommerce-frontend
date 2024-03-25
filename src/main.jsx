import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import product provider
import ProductProvider from "./context/ProductContext.jsx";
//import sidebar provider
import SidebarProvider from "./context/SideBarContext.jsx";
import CartProvider from "./context/CartContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
