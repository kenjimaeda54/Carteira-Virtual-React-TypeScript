import React, { useMemo, useState, useEffect } from 'react';
import { Container, Content, Filters } from './style';
import ContentHeader from '../../components/content-header';
import Select from '../../components/select';
import HistoryListFinancies from '../../components/history-list-financies';
import gains from '../../data/gains';
import expenses from '../../data/expenses';
import CoinsFormated from '../../util/coins-formated';
import DateFormated from '../../util/date-formated';
import OptionsMonth from '../../util/options-date';

interface IListProps {
  match: {
    params: {
      type: string /*o type esta sendo enviado pelas rotas /filter/:type */;
    };
  };
}

/*eu estou dizendo a minha função que minha interface será desse tipo */
/* não preciso pegar uma interface com mesmos valores que meu objeto */
interface IDataProps {
  id: number;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<IListProps> = ({ match }) => {
  const [dataFilters, setDataFilters] = useState<IDataProps[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1),
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear()),
  );
  const [frequencySelected, setFrequencySelected] = useState<string[]>([
    'recorrente',
    'eventual',
  ]);

  const movimentBalance = match.params.type;
  /*com match.params consigo com desconstrução pegar type */

  const pageData = useMemo(() => {
    return movimentBalance === 'entry-balance'
      ? {
          title: 'Entrada',
          color: '#F7931B',
          data: gains,
        }
      : {
          title: 'Saída',
          color: '#d62c2c',
          data: expenses,
        };
  }, [movimentBalance]);

  useEffect(() => {
    const { data } = pageData;
    const filteredDate = data.filter((value) => {
      const date = new Date(value.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());
      return (
        month === monthSelected &&
        year === yearSelected &&
        frequencySelected.includes(value.frequency)
      );
    });

    const response = filteredDate.map((item, index) => {
      return {
        id: index,
        description: item.description,
        amountFormatted: CoinsFormated(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: DateFormated(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
      };
    });
    setDataFilters(response);
  }, [yearSelected, monthSelected, pageData, frequencySelected]);

  const years = useMemo(() => {
    const { data } = pageData;
    const yearUniq: number[] = [];

    data.forEach((item) => {
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
  }, [pageData]);

  const months = useMemo(() => {
    return OptionsMonth.map((item, index) => {
      return {
        value: index,
        label: item,
      };
    });
  }, [OptionsMonth]);

  const handleFrequencySelected = (params: string) => {
    const thereFrequencySelected = frequencySelected.findIndex(
      (value) => value === params,
    );
    if (thereFrequencySelected >= 0) {
      const backFrequencySelected = frequencySelected.filter(
        (value) => value !== params,
      );
      setFrequencySelected(backFrequencySelected);
    } else {
      setFrequencySelected((itens) => [...itens, params]);
    }
  };

  return (
    <Container>
      <ContentHeader title={pageData.title} lineColor={pageData.color}>
        <Select
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <Select
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <Filters>
        <button
          type="button"
          className={`tag-filter tag-filter-recurring ${
            frequencySelected.includes('recorrente') && 'tag-active'
          } `}
          onClick={() => handleFrequencySelected('recorrente')}
        >
          Recorrente
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-eventual ${
            frequencySelected.includes('eventual') && 'tag-active'
          }`}
          onClick={() => handleFrequencySelected('eventual')}
        >
          Eventual
        </button>
      </Filters>

      <Content>
        {dataFilters.map((item) => (
          <HistoryListFinancies
            key={item.id}
            color={item.tagColor}
            title={item.description}
            subTitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};
export default List;
