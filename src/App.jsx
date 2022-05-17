import { Button } from 'components/Button';
import { CartContainer } from 'components/CartContainer';
import './styles/global.css';
import React from 'react';
import object from "./json/acima-10-reais.json";

function App() {
  return (
    <CartContainer>
      <div className="head">
        <span className="title">Meu Carrinho</span>
      </div>
      <hr />
      <div className="items-list">
        <ul>
          {
            object.items.map(items => {
              return (
                <li className="item">
                  <div className="img">
                    <img src={items.imageUrl} alt="trufa" />
                  </div>
                  <div>
                    <span className="product-title">{items.name}</span>
                    <span className="discount">R$ {items.price/100}</span>
                    <span>R$ {(items.sellingPrice/100)}</span>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <hr />
      <div className="total-container">
        <div className="total">
          <span>Total</span>
          <span>R$ {(object.totalizers[0].value+object.totalizers[1].value)/100}</span>
        </div>
        {
          object.totalizers[0].value+object.totalizers[1].value > 10 &&
          <div className="free-shipping">
            <span>Parabéns, sua compra tem frete grátis!</span>
          </div>
        }
      </div>
      <hr />
      <div className="button-container">
        <Button>Finalizar compra</Button>
      </div>
    </CartContainer>
  );
}

export default App;
