import React from "react";
import Product from "../components/Product";
import productList_DUMMY from "../utils/data";

const ProductList = () => {
  const products = productList_DUMMY;

  return (
      <div>
          {products.map((item) => {
              return <Product key={item.id} prod={item} />
          })}
      </div>
  );
};

export default ProductList;
