import React from 'react';
import {
  Header,
  Container,
  LogoImg,
  Title,
  MenuHeader,
  MenuNavigation,
} from './asside';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';

import logoimg from '../../assets/logo.svg';

const GridAside: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoimg} alt="Imagem do meu lgo" />
        <Title> Minha carteira </Title>
      </Header>

      <MenuHeader>
        <MenuNavigation href="#">
          <MdDashboard />
          Dashboard
        </MenuNavigation>
        <MenuNavigation href="#">
          <MdArrowUpward />
          Entradas
        </MenuNavigation>
        <MenuNavigation href="#">
          <MdArrowDownward />
          Saídas
        </MenuNavigation>
        <MenuNavigation href="#">
          <MdExitToApp />
          Sair
        </MenuNavigation>
      </MenuHeader>
    </Container>
  );
};
export default GridAside;
