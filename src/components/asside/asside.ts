import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  padding-left: 2vw;
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
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 2px;
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

  &:hover {
    opacity: 0.7;
  }

  > svg {
    margin: auto 0.5vw;
  }
`;
