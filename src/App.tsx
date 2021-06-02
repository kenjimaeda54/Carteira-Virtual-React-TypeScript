import React from 'react';
import GridLayout from './components/layout';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <GridLayout />
    </ThemeProvider>
  );
}

export default App;
