import React from 'react';
import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from './styles';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';
import CoinsFormated from '../../util/coins-formated';

interface IBarChartBoxProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChartBox: React.FC<IBarChartBoxProps> = ({ data, title }) => {
  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>
        <LegendContainer>
          {data.map((item, index) => {
            return (
              <Legend key={index} color={item.color}>
                <div>{item.percent}%</div>
                <span>{item.name}</span>
              </Legend>
            );
          })}
        </LegendContainer>
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount" name="valor">
              {data.map((indicator, id) => (
                <Cell key={id} fill={indicator.color} />
              ))}
            </Bar>
            <Tooltip
              formatter={(value: number) => CoinsFormated(Number(value))}
              cursor={{ fill: 'none' }}
            />
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};
export default BarChartBox;
