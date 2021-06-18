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
  h1,
  span {
    font-size: 20px;
  }
  @media (max-width: 770px) {
    > span {
      font-size: 14px;
    }
    > h1 {
      word-wrap: break-word;
      font-size: 22px;
      > strong {
        display: flex;
        width: 100%;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    > h1 {
      display: flex;
      strong {
        position: initial;
        width: auto;
        font-size: 22px;
        margin-top: -2px;
      }
    }
    strong:after {
      display: inline-block;
      content: ' ';
      width: 5px;
    }
  }
`;
