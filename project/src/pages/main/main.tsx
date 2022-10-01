import React from 'react';
import { PageCardClass } from '../../const';
import { useAppSelector } from '../../hooks';
import { getActiveCityOffers } from '../../utils/utils';
import MainOffersEmpty from '../../components/main/main-offers-empty/main-offers-empty';
import MainOffers from '../../components/main/main-offers/main-offers';
import CitiesTabs from '../../components/main/cities-tabs/cities-tabs';
import Header from '../../components/header/header';

const Main: React.FC = () => {
  const { offers, activeCity } = useAppSelector((state) => state);
  const activeCityOffers = getActiveCityOffers(activeCity, offers);
  const offersCount = activeCityOffers.length;
  const isEmptyOffers = !offersCount;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${isEmptyOffers ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesTabs activeCity={activeCity} />
          </section>
        </div>
        <div className="cities">
          {isEmptyOffers
            ? <MainOffersEmpty activeCity={activeCity} />
            : <MainOffers offersCount={offersCount} activeCityOffers={activeCityOffers} cardClass={PageCardClass.Main} activeCity={activeCity} />}
        </div>
      </main>
    </div>
  );
};

export default Main;
