import { Container, Content } from './styles';

import logoImg from 'src/assets/logo2.svg';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

export function Header(props: HeaderProps) {
  const { onOpenNewTransactionModal } = props;

  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="Logo" />
          <h1>Cash'za</h1>
        </div>
        <button type="button" onClick={onOpenNewTransactionModal}>
          {' '}
          Nova transação{' '}
        </button>
      </Content>
    </Container>
  );
}
