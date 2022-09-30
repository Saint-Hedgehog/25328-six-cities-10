import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Property from '../../pages/property/property';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading/loading';

type AppProps = {
  favoriteOffers: Offers;
  nearPlacesOffers: Offers;
  reviews: Reviews;
}

const App: React.FC<AppProps> = (props) => {
  const { favoriteOffers, nearPlacesOffers, reviews } = props;

  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);

  if (isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites offers={favoriteOffers} />
          </PrivateRoute>
        }
        />
        <Route path={`${AppRoute.Room}/:id`} element={<Property nearPlacesOffers={nearPlacesOffers} reviews={reviews} />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
