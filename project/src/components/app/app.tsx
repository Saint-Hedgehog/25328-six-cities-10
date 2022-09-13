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

type AppProps = {
  offers: Offers;
  favoriteOffers: Offers;
  nearPlacesOffers: Offers;
  reviews: Reviews;
}

function App(props: AppProps): JSX.Element {
  const { offers, favoriteOffers, nearPlacesOffers, reviews } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main offers={offers} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites offers={favoriteOffers} />
          </PrivateRoute>
        }
        />
        <Route path={`${AppRoute.Room}/:id`} element={
          <Property offers={offers} nearPlacesOffers={nearPlacesOffers} reviews={reviews} />
        }
        />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
