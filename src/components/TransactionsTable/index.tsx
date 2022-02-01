import { useEffect } from 'react';
import { api } from 'src/services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((data) => console.log(data));
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
          <tr>
            <td>Raspagem de saco</td>
            <td className="deposit">R$ 12.000</td>
            <td>Estetica</td>
            <td>31/01/2022</td>
          </tr>
          <tr>
            <td>Raspagem de saco</td>
            <td className="deposit">R$ 12.000</td>
            <td>Estetica</td>
            <td>31/01/2022</td>
          </tr>
          <tr>
            <td>Raspagem de saco</td>
            <td className="withdraw">R$ - 12.000</td>
            <td>Estetica</td>
            <td>31/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
