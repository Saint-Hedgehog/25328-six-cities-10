import FavoriteOffersList from '../../components/favorites/favorite-offers-list/favorite-offers-list';
import Logo from '../../components/logo/logo';
import { PageCardClass } from '../../const';
import { Offers } from '../../types/offers';

type FavoritesProps = {
  offers: Offers;
}

function Favorites({ offers }: FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoriteOffersList offers={offers} cardClass={PageCardClass.Favorite} />
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo isFooter/>
      </footer>
    </div>
  );
}

export default Favorites;
