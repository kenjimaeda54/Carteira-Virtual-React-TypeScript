import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 250px auto; /*vertical */
  grid-template-rows: 70px auto; /*linha  */
  grid-template-areas:
    'AS   MH'
    'AS   CT';
  height: 100vh;
`;
