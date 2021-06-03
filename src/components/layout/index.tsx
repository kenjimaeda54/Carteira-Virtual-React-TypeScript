import React from 'react';
import GridAside from '../asside';
import Content from '../content';
import MainHeader from '../main-header';
import { Layout } from './layout';

const GridLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Layout>
        <MainHeader />
        <GridAside />
        <Content>{children}</Content>
        {/* para realizar o deep ou seja passar varias props preciso estar com
        componente aberto */}
      </Layout>
    </div>
  );
};
export default GridLayout;
