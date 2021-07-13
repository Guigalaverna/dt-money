import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="income">R$ 12.000</td>
            <td>Trabalho</td>
            <td>13/06</td>
          </tr>
          <tr>
            <td>Alguel</td>
            <td className="outcome">R$ 100.00</td>
            <td>Casa</td>
            <td>13/06</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
