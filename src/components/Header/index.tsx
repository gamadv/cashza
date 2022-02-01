import { Container, Content } from './styles';

import logoImg from 'src/assets/logo2.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="Logo" />
          <h1>Cash'za</h1>
        </div>
        <button type="button"> Nova transação </button>
      </Content>
    </Container>
  );
}
