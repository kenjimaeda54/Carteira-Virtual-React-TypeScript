import styled, { css } from 'styled-components';

interface IContainerProps {
  openModal: boolean;
}

interface ToggleFooter {
  visibleToggle: boolean;
}

export const Container = styled.div<IContainerProps>`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  padding-left: 2vw;
  position: relative;

  @media (max-width: 750px) {
    padding-left: 7px;
    width: 170px;
    position: fixed;
    z-index: 2;
    height: ${(props) => (props.openModal ? '100vh' : '70px')};
    //overflow-y garante que o conteúdo o que sobrar da navegação
    //vai sumir e interessante,porque preciso utilizar verificação condicional com if
    overflow-y: hidden;
    ${(props) =>
      !props.openModal &&
      css`
        border: none;
        border-bottom: ${(props) => props.theme.colors.gray};
      `};
  }
`;

export const Header = styled.div`
  display: flex;
  width: 30vw;
  align-items: center;
  margin: 7vh auto;
`;
export const LogoImg = styled.img`
  margin: auto 1vw;
  height: 27px;
  width: 27px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: -5px;
  font-size: 16.5px;

  @media (max-width: 750px) {
    display: none;
  }
`;
export const MenuHeader = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const MenuNavigation = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.info};
  margin: 7px 1vw;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    margin: auto 0.5vw;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  font-size: 16px;
  background: none;
  border: none;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.info};
  margin: 7px 1vw;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    margin: auto 0.5vw;
  }
`;

export const ToggleMenu = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 22px;
  background-color: ${(props) => props.theme.colors.warning};
  color: ${(props) => props.theme.colors.white};
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -40px;
  }
`;

export const ToggleFooter = styled.footer<ToggleFooter>`
  display: none;
  position: absolute;
  bottom: 30px;

  @media (max-width: 600px) {
    display: ${(props) => (props.visibleToggle ? 'flex' : 'none')};
    justify-content: center;
  }
`;
