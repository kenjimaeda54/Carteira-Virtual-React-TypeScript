import styled from 'styled-components';

export const Main = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10vh;
  /* com essas duas propriedades(height e overflow) garanto 
  overflow apenas no conteúdo que sair,evitando todo assim efeitos 
  colaterais    */
  height: calc(100vh - 55px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;
