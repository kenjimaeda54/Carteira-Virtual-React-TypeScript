import React from 'react';
import { ThemeProviderContext } from './hooks/theme';
import { AthContext } from './hooks/auth';
import ReactDOM from 'react-dom';
import App from './App';

//para sua aplicação enxergar os context precisa na raiz
//chamar o context,com AhtContext estou disponibilizando todo
//context o ao projeto
ReactDOM.render(
  <React.StrictMode>
    <ThemeProviderContext>
      <AthContext>
        <App />
      </AthContext>
    </ThemeProviderContext>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
