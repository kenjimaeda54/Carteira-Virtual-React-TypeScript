import React, { useState, useMemo, useCallback } from 'react';
import { Container, Content } from './style';
import ContentHeader from '../../components/content-header';
import Select from '../../components/select';
import gains from '../../data/gains';
import expenses from '../../data/expenses';
import OptionsMonth from '../../util/options-date';
import WallteBalance from '../../components/wallte-balance';
import happyIcon from '../../assets/happy.svg';
import sad from '../../assets/sad.svg';
import oops from '../../assets/oops-img.svg';
import grinning from '../../assets/grinning.svg';
import MessageBox from '../../components/message-box';
import PieCharBox from '../../components/pie-char-box/index';
import HistoryBox from '../../components/history-box';
import BarChartBox from '../../components/bar-char-box';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1,
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear(),
  );

  const handleMonthSelected = useCallback((month: string) => {
    try {
      const monthSelected = Number(month);
      setMonthSelected(monthSelected);
    } catch (error) {
      throw new Error(' Invalid formated. Acceptable only 0 - 12 ');
    }
  }, []);

  const handleYearSelected = useCallback((year: string) => {
    try {
      const yearSelected = Number(year);
      setYearSelected(yearSelected);
    } catch {
      throw new Error('Invalid formate. Acceptable only integer');
    }
  }, []);

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
      const month = date.getMonth();

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

  const totalGains = useMemo(() => {
    let total = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth();
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
    if (totalGains === 0 && totalExpenses === 0) {
      return {
        title: 'Ops',
        description: 'Neste mês,não ha registros de entradas e saídas',
        footerText:
          'Parece que você não fez nenhuma entrada de registro e saídas neste mes',
        icon: oops,
      };
    } else if (balance < 0) {
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
  }, [balance, totalGains, totalExpenses]);
  const { title, description, footerText, icon } = messageUser;

  const relationExpensesGains = useMemo(() => {
    const total = totalGains + totalExpenses;
    const percentTotalGains = Number(((totalGains / total) * 100).toFixed(1));
    const percentTotalExpenses = Number(
      ((totalExpenses / total) * 100).toFixed(1),
    );

    const data = [
      {
        name: 'Entradas',
        value: totalGains,
        percent: percentTotalGains ? percentTotalGains : 0,
        color: '#E44C4E',
      },
      {
        name: 'Saídas',
        value: totalExpenses,
        percent: percentTotalExpenses ? percentTotalExpenses : 0,
        color: '#F7931B',
      },
    ];
    return data;
  }, [totalGains, totalExpenses]);

  const historyBoxBalance = useMemo(() => {
    return OptionsMonth.map((_, month) => {
      let amountEntry = 0;
      gains.forEach((gains) => {
        const date = new Date(gains.date);
        const gainYear = date.getFullYear();
        const gainMonth = date.getMonth();

        if (gainMonth === month && gainYear === yearSelected) {
          try {
            amountEntry += Number(gains.amount);
          } catch {
            throw new Error('AmountEntry invalid.This should be number ');
          }
        }
      });

      let amountOutput = 0;

      expenses.forEach((gains) => {
        const date = new Date(gains.date);
        const expensesYear = date.getFullYear();
        const expensesMonth = date.getMonth();

        if (expensesMonth === month && expensesYear === yearSelected) {
          try {
            amountOutput += Number(gains.amount);
          } catch {
            throw new Error('AmountEntry invalid.This should be number ');
          }
        }
      });

      return {
        month: OptionsMonth[month].substr(0, 3), //retorna fev,jan
        amountOutput,
        amountEntry,
        monthNumber: month,
      };
    }).filter((date) => {
      const monthCurrent = new Date().getMonth();
      const yearCurrent = new Date().getFullYear();

      return (
        (yearSelected === yearCurrent && date.monthNumber <= monthCurrent) ||
        yearSelected < yearCurrent
      );
    });
  }, [yearSelected]);

  const relationshipIntervalExpenseCurrentEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses
      .filter((expense) => {
        const date = new Date(expense.date);
        const year = date.getFullYear();
        const month = date.getMonth();
        return yearSelected === year && month === monthSelected;
      })
      .forEach((value) => {
        if (value.frequency === 'eventual') {
          return (amountEventual += Number(value.amount));
        }
        if (value.frequency === 'recorrente') {
          return (amountRecurrent += Number(value.amount));
        }
      });

    const total = amountRecurrent + amountEventual;
    const relationshipExpenseRecurrent = Number(
      ((amountRecurrent / total) * 100).toFixed(1),
    );
    const relationshipExpensesEventual = Number(
      ((amountEventual / total) * 100).toFixed(1),
    );

    return [
      {
        name: 'Eventual',
        amount: amountEventual,
        percent: relationshipExpensesEventual
          ? relationshipExpensesEventual
          : 0,
        color: '#E44C4E',
      },
      {
        name: 'Recorrente',
        amount: amountRecurrent,
        percent: relationshipExpenseRecurrent
          ? relationshipExpenseRecurrent
          : 0,
        color: '#F7931B',
      },
    ];
  }, [yearSelected, monthSelected]);

  const relationshipIntervalGainsCurrentEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    gains
      .filter((gains) => {
        const date = new Date(gains.date);
        const year = date.getFullYear();
        const month = date.getMonth();
        return yearSelected === year && month === monthSelected;
      })
      .forEach((value) => {
        if (value.frequency === 'eventual') {
          return (amountEventual += Number(value.amount));
        }
        if (value.frequency === 'recorrente') {
          return (amountRecurrent += Number(value.amount));
        }
      });

    const total = amountRecurrent + amountEventual;
    const relationshipGainsRecurrent = Number(
      ((amountRecurrent / total) * 100).toFixed(1),
    );
    const relationshipGainsEventual = Number(
      ((amountEventual / total) * 100).toFixed(1),
    );

    return [
      {
        name: 'Eventual',
        amount: amountEventual,
        percent: relationshipGainsEventual ? relationshipGainsEventual : 0,
        color: '#E44C4E',
      },
      {
        name: 'Recorrente',
        amount: amountRecurrent,
        percent: relationshipGainsRecurrent ? relationshipGainsRecurrent : 0,
        color: '#F7931B',
      },
    ];
  }, [yearSelected, monthSelected]);

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
        <PieCharBox data={relationExpensesGains} />
        <HistoryBox
          data={historyBoxBalance}
          lineColorAmountOutput="#F7931B"
          lineColorAmountEntry="#E44C4E"
        />
        <BarChartBox
          title="Saídas"
          data={relationshipIntervalExpenseCurrentEventual}
        />
        <BarChartBox
          title="Entradas"
          data={relationshipIntervalGainsCurrentEventual}
        />
      </Content>
    </Container>
  );
};
export default Dashboard;
