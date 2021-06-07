import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;

export const Filters = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  .tag-filter {
    background: none;
    font-weight: 500;
    font-size: 13pt;
    margin: -9vh 2vw 0 0;
    color: ${(props) => props.theme.colors.white};
    /*valo do transition é em ms so tenho uma propriedade */
    transition: opacity 0.5s;
    opacity: 0.3;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  .tag-filter-recurring::after {
    content: '';
    display: block;
    width: 77px;
    height: 10px;
    background-color: ${(props) => props.theme.colors.success};
  }
  .tag-filter-eventual::after {
    content: '';
    display: block;
    width: 70px;
    height: 10px;
    background-color: ${(props) => props.theme.colors.warning};
  }
  .tag-active {
    opacity: 1;
  }
`;
