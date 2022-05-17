import { Button } from "./components/Button";
import { CartContainer } from "./components/CartContainer";
import React, { useState } from "react";

import "./styles/global.css";
import acima10 from "./json/acima-10-reais.json";
import abaixo10 from "./json/abaixo-10-reais.json";
import shoppingCart from "./assets/image/shopping-cart.png";

function App() {
  const [object, setObject] = useState(abaixo10);
  const [freeShipping, setFreeShipping] = useState(false);
  const total = object.totalizers[0].value + object.totalizers[1].value;

  function handleObject() {
    if (object === abaixo10) {
      setObject(acima10);
      setFreeShipping(true);
    } else {
      setObject(abaixo10);
      setFreeShipping(false);
    }
  }

  return (
    <CartContainer>
      <div className="head">
        <span className="title">Meu Carrinho</span>
        <button
          className="toggle"
          title="Alternar carrinho"
          onClick={handleObject}
        >
          <img src={shoppingCart} alt="Carrinho de compras" />
        </button>
      </div>
      <hr />
      <div className="items-list">
        <ul>
          {object.items.map(items => {
            return (
              <li className="item">
                <div className="img">
                  <img src={items.imageUrl} alt="trufa" />
                </div>
                <span className="product-title">{items.name}</span>
                <input
                  className="quantity"
                  type="text"
                  value={items.unitMultiplier + " " + items.measurementUnit}
                />
                <div className="price">
                  <span className="discount">
                    {" "}
                    desconto {Math.abs(items.priceTags[0].value)}% R${" "}
                    {items.price / 100}
                  </span>
                  <span>R$ {items.sellingPrice / 100}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="total-container">
        <div className="subtotal total">
          <span>Subtotal</span>
          <span>R$ {object.totalizers[0].value / 100}</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>R$ {total / 100}</span>
        </div>
        {freeShipping && (
          <div className="free-shipping">
            <span>Parabéns, sua compra tem frete grátis!</span>
          </div>
        )}
      </div>
      <hr />
      <div className="button-container">
        <Button>Finalizar compra</Button>
      </div>
    </CartContainer>
  );
}

export default App;
