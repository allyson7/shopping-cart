import { Button } from './components/Button';
import { Container } from './components/Container';
import './styles/global.css';

function App() {
  return (
    <Container>
      <span className="title">Meu Carrinho</span>
      <hr />
      <ul>
        <li>
          <div>
            <img src="http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000" alt="trufa" />
            <div>
              <span>Trufa de chocolate</span>
              <span>R$ 1,23</span>
              <span>R$ 1,11</span>
            </div>
          </div>
        </li>
      </ul>
      <hr />
      <div className="total">
        <span>Total</span>
        <span>R$ 10,00</span>
      </div>
      <hr />
      <Button>Finalizar compra</Button>
    </Container>
  );
}

export default App;
