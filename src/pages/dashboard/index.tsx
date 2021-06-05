import React from 'react';
import { Container } from './style';
import ContentHeader from '../../components/content-header';
import Select from '../../components/select';

const Dashboard: React.FC = () => {
  const options = [
    { value: 'Rafael', label: 'Rafael' },
    { value: 'Ricardo', label: 'Ricardo' },
    { value: 'Erika', label: 'Erika' },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#fff">
        <Select options={options} />
      </ContentHeader>
    </Container>
  );
};
export default Dashboard;
