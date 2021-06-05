import React, { useMemo, useState, useEffect } from 'react';
import { Container, Content, Filters } from './style';
import ContentHeader from '../../components/content-header';
import Select from '../../components/select';
import HistoryListFinancies from '../../components/history-list-financies';
import gains from '../../data/gains';
import expenses from '../../data/expenses';

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
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<IListProps> = ({ match }) => {
  const [data, setData] = useState<IDataProps[]>([]);
  const { type } = match.params;
  /*com match.params consigo com desconstrução pegar type */

  const color = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#d62c2c';
  }, []);

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entrada' : 'Saída';
  }, []);

  const month = [
    { value: 1, label: 'Janeiro' },
    { value: 2, label: 'Fevereiro' },
    { value: 3, label: 'Março' },
    { value: 4, label: 'Abril' },
    { value: 5, label: 'Maio' },
    { value: 6, label: 'Junho' },
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
    { value: 10, label: 'Outubro' },
    { value: 11, label: 'Novembro' },
    { value: 12, label: 'Dezembro' },
  ];

  const year = [
    { value: 1, label: 2021 },
    { value: 3, label: 2020 },
    { value: 4, label: 2019 },
    { value: 5, label: 2018 },
    { value: 6, label: 2017 },
  ];

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
    /*chamo pelo nome do arquivo,neste arquivo não tem constante só export default */
  }, [type]);

  useEffect(() => {
    const response = listData.map((item) => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dateFormatted: item.date,
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
      };
    });
    setData(response);
  }, []);

  return (
    <Container>
      <ContentHeader title={title} lineColor={color}>
        <Select options={month} />
        <Select options={year} />
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
