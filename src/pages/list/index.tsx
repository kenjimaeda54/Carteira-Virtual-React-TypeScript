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
  const [data, setData] = useState<IDataProps[]>([]);
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

  const { type } = match.params;
  /*com match.params consigo com desconstrução pegar type */

  const color = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#d62c2c';
  }, []);

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entrada' : 'Saída';
  }, []);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
    /*chamo pelo nome do arquivo,neste arquivo não tem constante só export default */
  }, [type]);

  useEffect(() => {
    const filteredDate = listData.filter((value) => {
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
    setData(response);
  }, [yearSelected, monthSelected, listData, frequencySelected]);

  const years = useMemo(() => {
    const yearUniq: number[] = [];

    listData.forEach((item) => {
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
  }, []);

  const handleFrequencySelected = (params: string) => {
    const thereFrequencySelected = frequencySelected.findIndex(
      (item) => item === params,
    );
    if (thereFrequencySelected >= 0) {
      const backFrequency = frequencySelected.filter((item) => item !== params);
      setFrequencySelected(backFrequency);
    } else {
      setFrequencySelected((prev) => [...prev, params]);
    }
  };

  return (
    <Container>
      <ContentHeader title={title} lineColor={color}>
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
        {data.map((item) => (
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
