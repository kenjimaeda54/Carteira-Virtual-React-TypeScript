import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import {
  Container,
  SideLeft,
  LegendContainer,
  Legend,
  SideRight,
} from './styles';

interface IPieCharBoxProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieCharBox: React.FC<IPieCharBoxProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        {data.map((item, index) => {
          return (
            <Legend key={index} color={item.color}>
              <div>{item.percent ? `${item.percent}%` : 0}</div>
              <span>{item.name}</span>
            </Legend>
          );
        })}
      </LegendContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="percent">
            {/*renderizar componente em map,não esquece e entre (<Cell />)  */}
            {data.map((item, index) => (
              <Cell key={index} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);
export default PieCharBox;
