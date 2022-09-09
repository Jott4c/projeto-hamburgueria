import React from "react";

import Menu from "./components/Menu";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

import { GlobalStyle } from "./styles/global";
import { Main } from "./Styles";
import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState(products);

  const [cartProducts, setCartProducts] = useState([]);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  function handleAddCart(products, operador) {
    if (products.qtd) {
      operador ? products.qtd++ : products.qtd--;

      if (products.qtd < 1) {
        setCartProducts((oldProducts) =>
          oldProducts.filter((oldProduct) => oldProduct !== products)
        );
      }
      setCartProducts((oldProducts) => {
        return [
          ...oldProducts.map((oldProduct) => {
            if (oldProduct === products) {
              oldProduct.qtd = products.qtd;
            }
            return oldProduct;
          }),
        ];
      });
    } else {
      products.qtd = 1;
      setCartProducts((oldProducts) => [...oldProducts, products]);
    }
  }

  function handleSearch(inputValue) {
    setFilterProducts(
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(inputValue) ||
          product.category.toLowerCase().includes(inputValue)
      )
    );
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Menu
        handleSearch={handleSearch}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <>
        {inputValue ? (
          <p className="SearchResult">
            Resultado para: <span>{inputValue}</span>
          </p>
        ) : (
          <></>
        )}
      </>
      <Main>
        <ProductsList
          products={filterProducts}
          handleAddCart={handleAddCart}
          inputValue={inputValue}
        />
        <Cart
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          handleAddCart={handleAddCart}
        />
      </Main>
    </div>
  );
}

export default App;
