import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ prod }) => {
  const [number, setNumber] = React.useState(1);

  const buttonErrorHandler = () => {
    setNumber(6);
  };

  class ErrorMessage extends Error {
    constructor(message) {
      super(message);
      this.name = "ErrorMessage";
    }
  }

  if (number > 5) {
    throw new ErrorMessage("Under Construction");
  }

  const navigate = useNavigate();
  const productDetailHandler = () => {
    navigate("1");
  };
  return (
    <React.Fragment>
      <div style={{ padding: "1rem" }}>
        <h4>{prod.name}</h4>
        <p>{prod.price}</p>
        <button onClick={productDetailHandler}>See Detail</button>
        <br />
        <button onClick={buttonErrorHandler}>Undirected Path</button>
      </div>
    </React.Fragment>
  );
};

export default Product;
