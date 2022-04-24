import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const productListHandler = () => {
    navigate("/product");
  };

  return (
    <div className='App'>
    <header className='App-header'>
      <h1>React Quiz Eps. 1</h1>
    </header>
    <main>
      <section>
      <button onClick={productListHandler}>Product List</button>
      </section>
      <footer></footer>
    </main>
  </div>
  )
}

export default Home;