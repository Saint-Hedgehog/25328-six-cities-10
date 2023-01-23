import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import PrivateRouteLogin from '../private-route-login/private-route-login';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Property from '../../pages/property/property';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';

const App: React.FC = () => (
  <HistoryRouter history={browserHistory}>
    <Routes>
      <Route path={AppRoute.Main} element={<Main />} />
      <Route path={AppRoute.Login} element={
        <PrivateRouteLogin>
          <Login />
        </PrivateRouteLogin>
      }
      />
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute>
          <Favorites />
        </PrivateRoute>
      }
      />
      <Route path={`${AppRoute.Room}/:id`} element={<Property />} />
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  </HistoryRouter>
);

export default App;
