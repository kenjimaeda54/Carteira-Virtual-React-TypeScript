import styled, { keyframes } from 'styled-components';

interface ITagProps {
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

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.tertiary};
  margin: 10px 0;
  padding: 12px 10px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  animation: ${animate} 0.3s ease-in;

  &:hover {
    transform: translateX(10px);
    opacity: 0.5;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }
`;

export const Tag = styled.div<ITagProps>`
  /*com essa propriedade vai referenciar no elemento pai,caso possuir
     position relative   */
  position: absolute;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
  left: 0;
  height: 60%;
  width: 10px;
`;
