import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AthRoutes from './ath.routes';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <AthRoutes />
    </BrowserRouter>
  );
};
export default Routes;
