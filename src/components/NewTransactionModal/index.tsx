import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import incomeImg from 'src/assets/income.svg';
import outcomeImg from 'src/assets/outcome.svg';
import closeImg from 'src/assets/close.svg';

import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { api } from 'src/services/api';

type NewTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function NewTransactionModal(props: NewTransactionModalProps) {
  const { isOpen, onClose } = props;
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransactio(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" type="button" onClick={onClose}>
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransactio}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
