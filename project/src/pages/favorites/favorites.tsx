import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteListAction } from '../../store/api-actions';
import classNames from 'classnames';
import { getFavoriteList, getFavoriteLoadStatus } from '../../store/favorite-data/selectors';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import FavoriteListEmpty from '../../components/favorites/favorite-list-empty/favorite-list-empty';
import FavoriteList from '../../components/favorites/favorite-list/favorite-list';
import Loading from '../loading/loading';

const Favorites: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const promise = dispatch(fetchFavoriteListAction());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const isDataLoading = useAppSelector(getFavoriteLoadStatus);
  const favoriteList = useAppSelector(getFavoriteList);
  const IsEmptyFavoriteOffers = !favoriteList.length;

  const divClass = classNames('page', { 'page--favorites-empty': IsEmptyFavoriteOffers });
  const mainClass = classNames('page__main page__main--favorites', { 'page__main--favorites-empty': IsEmptyFavoriteOffers });
  const sectionClass = classNames('favorites favorites__section', { 'favorites--empty': IsEmptyFavoriteOffers });

  if (isDataLoading) {
    return <Loading />;
  }

  return (
    <div className={divClass}>
      <Header />
      <main className={mainClass}>
        <div className="page__favorites-container container">
          <section className={sectionClass}>
            {IsEmptyFavoriteOffers ? <FavoriteListEmpty /> : <FavoriteList />}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo isFooter/>
      </footer>
    </div>
  );
};

export default Favorites;
