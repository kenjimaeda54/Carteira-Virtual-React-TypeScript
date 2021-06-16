import React from 'react';
import {
  Header,
  Container,
  LogoImg,
  Title,
  MenuHeader,
  MenuNavigation,
} from './style';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';

import logoimg from '../../assets/logo.svg';

const GridAside: React.FC = (): JSX.Element => (
  <Container>
    <Header>
      <LogoImg src={logoimg} alt="Imagem do meu lgo" />
      <Title> Minha carteira </Title>
    </Header>

    <MenuHeader>
      <MenuNavigation href="/dashboard">
        <MdDashboard />
        Dashboard
      </MenuNavigation>
      <MenuNavigation href="/list/entry-balance">
        <MdArrowUpward />
        Entradas
      </MenuNavigation>
      <MenuNavigation href="/list/exit-balance">
        <MdArrowDownward />
        Saídas
      </MenuNavigation>
      <MenuNavigation>
        <MdExitToApp />
        Sair
      </MenuNavigation>
    </MenuHeader>
  </Container>
);

export default GridAside;
