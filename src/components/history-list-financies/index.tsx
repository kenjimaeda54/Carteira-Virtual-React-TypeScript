import React from 'react';
import { Container, Tag } from './style';

interface IHistoryListFinanciesProps {
  color: string;
  amount: string;
  title: string;
  subTitle: string;
}

const HistoryListFinancies: React.FC<IHistoryListFinanciesProps> = ({
  color,
  amount,
  title,
  subTitle,
}) => {
  return (
    <Container>
      <Tag color={color} />
      <div>
        <span> {title} </span>
        <small> {subTitle} </small>
      </div>
      <h3> {amount}</h3>
    </Container>
  );
};
export default HistoryListFinancies;
