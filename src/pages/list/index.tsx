import React, { useMemo, useState, useEffect } from 'react';
import { Container, Content, Filters } from './style';
import ContentHeader from '../../components/content-header';
import Select from '../../components/select';
import HistoryListFinancies from '../../components/history-list-financies';
import gains from '../../data/gains';
import expenses from '../../data/expenses';
import CoinsFormated from '../../util/coins-formated';
import DateFormated from '../../util/date-formated';

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
  const { type } = match.params;
  /*com match.params consigo com desconstrução pegar type */

  const color = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#d62c2c';
  }, []);

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entrada' : 'Saída';
  }, []);
  const month = [
    { value: 6, label: 'Junho' },
    { value: 2, label: 'Fevereiro' },
    { value: 1, label: 'Janeiro' },
    { value: 3, label: 'Março' },
    { value: 4, label: 'Abril' },
    { value: 5, label: 'Maio' },
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
    { value: 10, label: 'Outubro' },
    { value: 11, label: 'Novembro' },
    { value: 12, label: 'Dezembro' },
  ];

  const year = [
    { value: 2018, label: 2018 },
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2017, label: 2017 },
  ];

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
    /*chamo pelo nome do arquivo,neste arquivo não tem constante só export default */
  }, [type]);

  useEffect(() => {
    const filteredDate = listData.filter((value) => {
      const date = new Date(value.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());
      return month === monthSelected && year === yearSelected;
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
  }, [yearSelected, monthSelected, listData]);

  return (
    <Container>
      <ContentHeader title={title} lineColor={color}>
        <Select
          options={month}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <Select
          options={year}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <Filters>
        <button type="button" className="tag-filter tag-filter-recurring">
          Recorrente
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
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
