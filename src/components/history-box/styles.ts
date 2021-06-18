import styled, { keyframes } from 'styled-components';

interface ILegendProps {
  color: string;
}

const animate = keyframes`
   0%{
      transform: translateX(-100px);
      opacity:0;

   }
   50%{
     opacity: .3;

   }
   100%{
     transform: translateX(0px);
     opacity: 1;
   }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.tertiary};
  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 7px;
  animation: ${animate} 0.3s;
`;

export const ContainerCard = styled.div`
  flex: 1;
  height: 260px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 20px;
    padding-left: 20px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    font-size: 12px;

    > h2 {
      margin-left: -18px;
      width: 100%;
    }
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 16px;
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  margin-left: 7px;

  > div {
    background-color: ${(props) => props.color};
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
  }
  > span {
    margin-left: 5px;
  }

  @media (max-width: 1280px) {
    > div {
      width: 30px;
      height: 30px;
    }
  }
  @media (max-width: 770px) {
    > div {
      font-size: 11px;
    }
  }
`;
