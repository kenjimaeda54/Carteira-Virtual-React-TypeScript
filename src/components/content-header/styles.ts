import styled from 'styled-components';

interface ITitleColor {
  lineColor: string;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15vh;
`;

export const TitleContent = styled.div<ITitleColor>`
  > h1 {
    color: ${(props) => props.theme.colors.white};
    &::after {
      /* precisa do display block para pegar */
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid ${(props) => props.lineColor};
    }
  }
  @media (max-width: 500px) {
    > h1 {
      margin-left: -50px;
      font-size: 28px;
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
`;
