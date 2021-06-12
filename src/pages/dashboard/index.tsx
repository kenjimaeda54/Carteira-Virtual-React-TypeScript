import React, { useState, useMemo } from 'react';
import { Container, Content } from './style';
import ContentHeader from '../../components/content-header';
import Select from '../../components/select';
import gains from '../../data/gains';
import expenses from '../../data/expenses';
import OptionsMonth from '../../util/options-date';
import WallteBalance from '../../components/wallte-balance';
import happyIcon from '../../assets/happy.svg';
import MessageBox from '../../components/message-box';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1,
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear(),
  );

  const handleMonthSelected = (month: string) => {
    try {
      const monthSelected = Number(month);
      setMonthSelected(monthSelected);
    } catch (error) {
      throw new Error(' Invalid formated. Acceptable only 0 - 12 ');
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const yearSelected = Number(year);
      setYearSelected(yearSelected);
    } catch {
      throw new Error('Invalid formate. Acceptable only integer');
    }
  };

  const years = useMemo(() => {
    const yearUniq: number[] = [];

    [...gains, ...expenses].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      if (!yearUniq.includes(year)) {
        yearUniq.push(year);
      }
    });
    return yearUniq.map((item) => {
      return {
        value: item,
        label: item,
      };
    });
  }, []);
  const months = useMemo(() => {
    return OptionsMonth.map((item, index) => {
      return {
        value: index,
        label: item,
      };
    });
  }, [OptionsMonth]);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <Select
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <Select
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <Content>
        <WallteBalance
          title="Saldo"
          amount={150.0}
          color="#4E41F0"
          footerLabel="atualizado de acordo com as entradas e saídas"
          icon="dollar"
        />
        <WallteBalance
          title="Entradas"
          amount={5000.0}
          color="#F7931B"
          footerLabel="atualizado de acordo com as entradas e saídas"
          icon="arrowUp"
        />
        <WallteBalance
          title="Saídas"
          amount={4850.0}
          color="#E44C4E"
          footerLabel="atualizado de acordo com as entradas e saídas"
          icon="arrowDown"
        />
        <MessageBox
          title="Muito bem"
          icon={happyIcon}
          description="Sua carteira esta positiva"
          footerText="Você deveria investir seu saldo"
        />
      </Content>
    </Container>
  );
};
export default Dashboard;
