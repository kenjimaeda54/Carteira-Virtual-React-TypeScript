import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 48%;
  min-height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
`;

export const SideLeft = styled.aside`
  display: flex;
  flex: 1;
  padding: 30px 0;
  > h2 {
    margin-bottom: 10px;
    padding-left: 16px;
  }
`;

export const LegendContainer = styled.ul`
  padding-top: 50px;
  margin-left: -85px;
  list-style: none;
  height: 175px;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;
export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 7px;
  padding-right: -16px;

  > div {
    background-color: ${(props) => props.color};
    height: 40px;
    border-radius: 5px;
    font-size: 15px;
    padding: 2px;
    line-height: 40px;
    text-align: center;
  }
  span {
    margin-left: 5px;
  }
`;

export const SideRight = styled.main`
  flex: 1;
  min-height: 250px;
  display: flex;
  justify-content: center;
`;
