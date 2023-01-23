import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { PageClass, PageCardClass, MapClass } from '../../const';
import { fetchOfferAction, fetchNearOffersAction, fetchRewiesAction } from '../../store/api-actions';
import { getOffer, getNearOffers, getOfferDataLoadStatus } from '../../store/offer-data/selectors';
import { clearOfferData, setOfferDataLoadStatus } from '../../store/offer-data/offer-data';
import { getActiveCity } from '../../store/app-process/selectors';
import { clearReviewData } from '../../store/review-data/review-data';
import { getReviews } from '../../store/review-data/selectors';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import OffersList from '../../components/offers-list/offers-list';
import PropertyHost from '../../components/property/property-host/property-host';
import PropertyInside from '../../components/property/property-inside/property-inside';
import Rating from '../../components/rating/rating';
import Price from '../../components/price/price';
import PropertyFeatures from '../../components/property/property-features/property-features';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import ImagesList from '../../components/property/images-list/images-list';
import PropertyReviews from '../../components/property/property-review/property-review';
import Loading from '../loading/loading';
import NotFound from '../not-found/not-found';

const Property: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    const promiseOffer = dispatch(fetchOfferAction(id));
    const promiseNearOffers = dispatch(fetchNearOffersAction(id));
    const promiseReviews = dispatch(fetchRewiesAction(id));

    Promise.allSettled([promiseOffer, promiseNearOffers, promiseReviews])
      .then(() => dispatch(setOfferDataLoadStatus(false)));

    return () => {
      promiseOffer.abort();
      promiseNearOffers.abort();
      promiseReviews.abort();
      dispatch(clearOfferData());
      dispatch(clearReviewData());
    };
  }, [id, dispatch]);

  const activeCity = useAppSelector(getActiveCity);
  const activeOffer = useAppSelector(getOffer);
  const nearOffers = useAppSelector(getNearOffers);
  const reviews = useAppSelector(getReviews);

  const isDataLoading = useAppSelector(getOfferDataLoadStatus);
  const isNotFoundOffer = activeOffer === null;

  if (isDataLoading) {
    return <Loading />;
  }

  if (isNotFoundOffer) {
    return <NotFound />;
  }

  const offersList = [activeOffer, ...nearOffers];
  const { type, isPremium, title, price, bedrooms, maxAdults, goods, description, isFavorite, rating, images, host } = activeOffer;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <ImagesList imagesList={images} />
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <BookmarkButton buttonClass={PageClass.Property} offerId={activeOffer.id} favoriteStatus={isFavorite}/>
              </div>
              <Rating pageClass={PageClass.Property} rating={rating} />
              <PropertyFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
              <Price pageClass={PageClass.Property} price={price} />
              <PropertyInside goods={goods} />
              <PropertyHost host={host} description={description} />
              <PropertyReviews reviews={reviews} offerId={activeOffer.id} />
            </div>
          </div>
          <Map activeCity={activeCity} activeCityOffers={offersList} activeCardId={activeOffer.id} mapClass={MapClass.Property}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={nearOffers} cardClass={PageCardClass.Property} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Property;
