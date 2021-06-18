import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 200px auto; /*vertical */
  grid-template-rows: 70px auto; /*linha  */
  grid-template-areas:
    'AS   MH'
    'AS   CT';
  height: 100vh;
  min-height: 340px;
  @media (max-width: 600px) {
    grid-template-columns: 100%; /*vertical */
    grid-template-rows: 70px auto; /*linha  */
    grid-template-areas:
      'MH'
      'CT';
  }
`;
