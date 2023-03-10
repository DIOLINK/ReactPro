import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { ListNavigation } from './ListNavigation';
import { ListRoutes } from './ListRoutes';
import { routes } from './routes';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React_Logo" />
            <ListNavigation routes={routes} />
          </nav>
          <ListRoutes routes={routes} />
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
