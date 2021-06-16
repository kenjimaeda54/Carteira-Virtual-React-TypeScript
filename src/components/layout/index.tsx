import React from 'react';
import GridAside from '../asside';
import Content from '../content';
import MainHeader from '../main-header';
import { Layout } from './style';

const GridLayout: React.FC = ({ children }) => (
  <Layout>
    <MainHeader />
    <GridAside />
    <Content>{children}</Content>
    {/* para realizar o deep ou seja passar varias props preciso estar com
        componente aberto */}
  </Layout>
);

export default GridLayout;
