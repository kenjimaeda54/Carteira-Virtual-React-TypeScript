import React from 'react';
import GridLayout from './components/layout';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Dashboard from './pages/dashboard';
import dark from './styles/themes/dark';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <GridLayout>
        <Dashboard />
        {/* meu componente precisa estar aberto é passar dentro outro componente*/}
      </GridLayout>
    </ThemeProvider>
  );
}

export default App;
