import { useEffect, useState } from 'react';
import { api } from 'src/services/api';
import { Container } from './styles';

type Transaction = {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
};
export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  function FormatValue(amount: number) {
    const newValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(amount);

    return newValue;
  }
  function FormatDate(createdAt: string) {
    const parsedDate = new Date(createdAt);
    const newDate = new Intl.DateTimeFormat('pt-BR').format(parsedDate);

    return newDate;
  }

  useEffect(() => {
    api
      .get('transactions')
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {FormatValue(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{FormatDate(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
