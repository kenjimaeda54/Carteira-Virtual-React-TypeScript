import React from 'react';
import { Container, ContainerCard } from './styles';
import {
  Line,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Tooltip,
} from 'recharts';

interface IHistoryBox {
  data: {
    month: string;
    amountOutput: number;
    amountEntry: number;
  }[];
  lineColorAmountOutput: string;
  lineColorAmountEntry: string;
}

const HistoryBox: React.FC<IHistoryBox> = ({
  data,
  lineColorAmountOutput,
  lineColorAmountEntry,
}) => (
  <Container>
    <h2> Histórico de saldo</h2>

    <ContainerCard>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
          <XAxis dataKey="month" stroke="#cecece" />
          <Tooltip />
          {/* tooltip e responsável por mostrar legenda nos pontos dos eixo */}
          <Line
            dataKey="amountOutput"
            name="Saídas"
            type="monotone"
            stroke={lineColorAmountOutput}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          ></Line>
          <Line
            dataKey="amountEntry"
            name="Entradas"
            type="monotone"
            stroke={lineColorAmountEntry}
            strokeWidth={5}
            dot={{ r: 5 }} //raio da bolinha
            activeDot={{ r: 8 }} //quando estiver ativo
          ></Line>
        </LineChart>
      </ResponsiveContainer>
    </ContainerCard>
  </Container>
);
export default HistoryBox;
