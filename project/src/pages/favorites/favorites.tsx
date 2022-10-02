import React from 'react';
import FavoriteOffersList from '../../components/favorites/favorite-offers-list/favorite-offers-list';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import { PageCardClass } from '../../const';
import { Offers } from '../../types/offers';

type FavoritesProps = {
  offers: Offers;
}

const Favorites: React.FC<FavoritesProps> = ({ offers }) => (
  <div className="page">
    <Header />

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteOffersList offers={offers} cardClass={PageCardClass.Favorite} />
        </section>
      </div>
    </main>
    <footer className="footer container">
      <Logo isFooter/>
    </footer>
  </div>
);

export default Favorites;
