import { Button } from './components/Button';
import { Container } from './components/Container';
import './styles/global.css';
import React from 'react';

function App() {
  return (
    <Container>
      <span className="title">Meu Carrinho</span>
      <hr />
      <div className="items-list">
        <ul>
          <li>
            <div className="item">
              <div className="img">
                <img src="http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000" alt="trufa" />
              </div>
              <div>
                <span className="product-title">Trufa de chocolate</span>
                <span className="discount">R$ 1,23</span>
                <span>R$ 1,11</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <hr />
      <div className="total-container">
        <div className="total">
          <span>Total</span>
          <span>R$ 10,00</span>
        </div>
        <div className="free-shipping">
          <span>Parabéns, sua compra tem frete grátis!</span>
        </div>
      </div>
      <hr />
      <Button>Finalizar compra</Button>
    </Container>
  );
}

export default App;
