import React, { useState, useMemo } from 'react';
import { Container, Content } from './style';
import ContentHeader from '../../components/content-header';
import Select from '../../components/select';
import gains from '../../data/gains';
import expenses from '../../data/expenses';
import OptionsMonth from '../../util/options-date';
import WallteBalance from '../../components/wallte-balance';
import happyIcon from '../../assets/happy.svg';
import sad from '../../assets/sad.svg';
import grinning from '../../assets/grinning.svg';
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

  const totalExpenses = useMemo(() => {
    let total = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (monthSelected === month && yearSelected === year) {
        try {
          //nos estamos trabalhando com forEach,try vai deixar
          //mais performance e vamos lançar erro caso não consiga formatar
          total += Number(item.amount);
        } catch {
          throw new Error('Invalid amount! Amount need be number');
        }
      }
    });
    return total;
    //ficar atento as dependências,se esquecer o valor pode ocorrer
    //de não atualizar
  }, [expenses, monthSelected, yearSelected]);

  console.log(totalExpenses);

  const totalGains = useMemo(() => {
    let total = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (monthSelected === month && yearSelected === year) {
        try {
          //nos estamos trabalhando com forEach,try vai deixar
          //mais performance e vamos lançar erro caso não consiga formatar
          total += Number(item.amount);
        } catch {
          throw new Error('Invalid amount! Amount need be number');
        }
      }
    });
    return total;
    //ficar atento as dependências,se esquecer o valor pode ocorrer
    //de não atualizar
  }, [expenses, monthSelected, yearSelected]);

  const balance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const messageUser = useMemo(() => {
    if (balance < 0) {
      return {
        title: 'Que triste',
        description: 'Neste mes você gastou mais que deveria',
        footerText:
          'Verifique seus gastos e tente cortar algumas coisas desnecessárias',
        icon: sad,
      };
    } else if (balance > 0) {
      return {
        title: 'Muito bem',
        description: 'Sua carteira esta positiva',
        footerText: 'Continue assim. Considere investir o seu saldo',
        icon: happyIcon,
      };
    } else {
      return {
        title: 'Ufaa',
        description: 'Neste mes você gastou exatamente que ganhou',
        footerText: 'Tenho cuidado.Na próxima tenta poupar seu dinheiro',
        icon: grinning,
      };
    }
  }, [balance]);
  const { title, description, footerText, icon } = messageUser;

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
          amount={balance}
          color="#4E41F0"
          footerLabel="atualizado de acordo com as entradas e saídas"
          icon="dollar"
        />
        <WallteBalance
          title="Entradas"
          amount={totalGains}
          color="#F7931B"
          footerLabel="atualizado de acordo com as entradas e saídas"
          icon="arrowUp"
        />
        <WallteBalance
          title="Saídas"
          amount={totalExpenses}
          color="#E44C4E"
          footerLabel="atualizado de acordo com as entradas e saídas"
          icon="arrowDown"
        />
        <MessageBox
          title={title}
          icon={icon}
          description={description}
          footerText={footerText}
        />
      </Content>
    </Container>
  );
};
export default Dashboard;
