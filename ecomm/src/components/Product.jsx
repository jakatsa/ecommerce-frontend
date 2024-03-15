import React from "react";

export const Product = ({ product }) => {
  return (
    <div className="w-full h-{300px} bg-pink-200 " key={product.title}>
      {product.title}
    </div>
  );
};
