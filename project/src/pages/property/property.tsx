import React from 'react';
import { useParams } from 'react-router-dom';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import OffersList from '../../components/offers-list/offers-list';
import FormReview from '../../components/property/form-review/form-review';
import PropertyHost from '../../components/property/property-host/property-host';
import PropertyInside from '../../components/property/property-inside/property-inside';
import PropertyImage from '../../components/property/property-image/property-image';
import UserReview from '../../components/property/user-review/user-review';
import Rating from '../../components/rating/rating';
import { PageClass, ImagePropertyCount, PageCardClass } from '../../const';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import { capitalizeFirstLetter } from '../../utils/utils';
import NotFound from '../not-found/not-found';
import Price from '../../components/price/price';
import PropertyFeatures from '../../components/property/property-features/property-features';
import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import { getOffers } from '../../store/app-data/selectors';

type PropertyProps = {
  nearPlacesOffers: Offers;
  reviews: Reviews
}

const Property: React.FC<PropertyProps> = ({ nearPlacesOffers, reviews }) => {
  const offers = useAppSelector(getOffers);
  const { id } = useParams();
  const activeOffer = offers.find((offer) => offer.id === Number(id));
  const reviewsCount = reviews.length;

  if (!activeOffer) {
    return <NotFound />;
  }

  const images = activeOffer.images.slice(ImagePropertyCount.Start, ImagePropertyCount.End);

  const { type, isPremium, title, price, bedrooms, maxAdults, goods, description, isFavorite, rating } = activeOffer;
  const offerType = capitalizeFirstLetter(type);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((src) => <PropertyImage key={src} src={src} />)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium ? (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                ) : null
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <BookmarkButton pageClass={PageClass.Property} isFavorite={isFavorite} />
              </div>
              <Rating pageClass={PageClass.Property} rating={rating} />
              <PropertyFeatures offerType={offerType} bedrooms={bedrooms} maxAdults={maxAdults} />
              <Price pageClass={PageClass.Property} price={price} />
              <PropertyInside goods={goods} />
              <PropertyHost host={activeOffer.host} description={description} />
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
                <UserReview reviews={reviews} />
                <FormReview />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={nearPlacesOffers} cardClass={PageCardClass.Property} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Property;
