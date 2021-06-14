import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  display: flex;
  justify-content: flex-start;
`;
export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 10px;
  }
`;
export const LegendContainer = styled.ul`
  list-style: none;
  height: 150px;
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
  padding: 0 10px;
  margin-bottom: 7px;

  > div {
    background-color: ${(props) => props.color};
    height: 40%;
    border-radius: 5px;
    font-size: 15px;
    padding: 5px;
    line-height: 40px;
    text-align: center;
  }
  span {
    margin-left: 5px;
  }
`;
export const SideRight = styled.main`
  display: flex;
  flex: 1; //vai ocupar todo campo disponível;
  justify-content: center;
  align-items: center;
  margin-left: -50px;
`;
