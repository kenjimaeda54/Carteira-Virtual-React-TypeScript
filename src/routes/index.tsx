import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useContextAth } from '../hooks/auth';
import AthRoutes from './ath.routes';
import App from './app.routes';

const Routes: React.FC = () => {
  const { logged } = useContextAth();
  return <BrowserRouter>{logged ? <App /> : <AthRoutes />}</BrowserRouter>;
};
export default Routes;
