import styled from 'styled-components';
//cuidado é styled

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  background-color: ${(props) => props.color};
  width: 32%; //são 3 então será no total 96%
  margin: 10px 0px;
  height: 150px;
  padding: 10px 20px;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  > img {
    position: absolute;
    height: 110%;
    top: -10px;
    right: -40px;
    opacity: 0.2;
  }
  span {
    font-size: 14px;
    font-weight: 500;
  }
  small {
    font-size: 10px;
    position: absolute;
    bottom: 10px;
  }
`;
