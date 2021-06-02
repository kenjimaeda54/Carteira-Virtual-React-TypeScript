import React from 'react';
import GridAside from '../asside';
import Content from '../content';
import MainHeader from '../main-header';
import { Layout } from './layout';

const GridLayout: React.FC = () => {
  return (
    <div>
      <Layout>
        <MainHeader />
        <GridAside />
        <Content />
      </Layout>
    </div>
  );
};
export default GridLayout;
