import React, { useMemo } from 'react';
import { Container, Content, Filters } from './style';
import ContentHeader from '../../components/content-header';
import Select from '../../components/select';
import HistoryListFinancies from '../../components/history-list-financies';

interface IListProps {
  match: {
    params: {
      type: string /*o type esta sendo enviado pelas rotas /filter/:type */;
    };
  };
}

const List: React.FC<IListProps> = ({ match }) => {
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
        <HistoryListFinancies
          color="#E44C4E"
          title="Conta de Luz"
          subTitle="4/06/2021"
          amount="R$24,30"
        />
      </Content>
    </Container>
  );
};
export default List;
