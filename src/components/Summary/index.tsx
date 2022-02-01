import incomeImg from 'src/assets/income.svg';
import outcomeImg from 'src/assets/outcome.svg';
import total from 'src/assets/total.svg';

import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>R$ 100,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Income" />
        </header>
        <strong>R$ - 50,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={total} alt="Income" />
        </header>
        <strong>R$ 50,00</strong>
      </div>
    </Container>
  );
}
