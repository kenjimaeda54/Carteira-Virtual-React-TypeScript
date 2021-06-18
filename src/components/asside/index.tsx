import React, { useState } from 'react';
import {
  Header,
  Container,
  LogoImg,
  Title,
  MenuHeader,
  MenuNavigation,
  MenuButton,
  ToggleMenu,
  ToggleFooter,
} from './style';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdMenu,
  MdClose,
} from 'react-icons/md';
import { useContextAth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import logoimg from '../../assets/logo.svg';
import Toggle from '../togle';

const GridAside: React.FC = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  const { signOut } = useContextAth();
  const [openMenu, setOpenMenu] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === 'dark' ? true : false,
  );

  const goOut = () => signOut();

  const openCloseMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  return (
    <Container openModal={openMenu}>
      <Header>
        <ToggleMenu onClick={openCloseMenu}>
          {openMenu ? <MdClose /> : <MdMenu />}
        </ToggleMenu>
        <LogoImg src={logoimg} alt="Imagem do meu lgo" />
        <Title> Minha carteira </Title>
      </Header>

      <MenuHeader>
        <MenuNavigation href="/">
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
        <MenuButton onClick={goOut}>
          <MdExitToApp />
          Sair
        </MenuButton>
      </MenuHeader>
      <ToggleFooter visibleToggle={openMenu}>
        <Toggle
          labelLeft="light"
          labelRight="dark"
          checked={darkTheme}
          onChange={handleTheme}
        />
      </ToggleFooter>
    </Container>
  );
};

export default GridAside;
