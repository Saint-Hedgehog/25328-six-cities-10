import React from 'react';
import Header from '../../components/header/header';

const NotFound: React.FC = () => (
  <div className="page page--gray page--main">
    <Header isHideUserSection />

    <main className="page__main page__main--index page__main--index-empty">
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <h1>404.
                <br />
                <small>Page not found</small>
              </h1>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  </div>
);

export default NotFound;
