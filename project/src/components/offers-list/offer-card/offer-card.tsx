import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PageCardClass, AppRoute, ImageSize, PageClass } from '../../../const';
import { Offer } from '../../../types/offers';
import { capitalizeFirstLetter } from '../../../utils/utils';
import BookmarkButton from '../../bookmark-button/bookmark-button';
import Price from '../../price/price';
import Rating from '../../rating/rating';

type OfferCardProps = {
  offer: Offer;
  cardClass: PageCardClass;
  onActiveCard?: (value: number | null) => void;
};

const TIMER = 500;

const OfferCard: React.FC<OfferCardProps> = (props) => {
  const { offer, cardClass, onActiveCard } = props;
  const { id, type, isPremium, previewImage, title, price, isFavorite } = offer;

  const offerType = capitalizeFirstLetter(type);
  const isFavoriteStyle = cardClass === PageCardClass.Favorite;
  const imageSize = isFavoriteStyle ? ImageSize.Small : ImageSize.Big;
  const { width, height } = imageSize;

  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleActiveCard = () => {
    if (onActiveCard !== undefined) {
      timerRef.current = setTimeout(() => onActiveCard(offer.id), TIMER);
    }
  };

  const handleInactiveCard = () => {
    if (onActiveCard !== undefined) {
      onActiveCard(null);
      clearTimeout(timerRef.current);
    }
  };

  useEffect(
    () =>
      () =>
        clearTimeout(timerRef.current), []);

  return (
    <article onMouseEnter={handleActiveCard} onMouseLeave={handleInactiveCard} className={`${cardClass}__card place-card`} >
      {
        isPremium ? (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        ) : null
      }

      <div className={`${cardClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image" src={previewImage} width={width} height={height} alt={title}/>
        </Link>
      </div>

      <div className={`place-card__info ${isFavoriteStyle ? 'favorites__card-info' : ''}`} >
        <div className="place-card__price-wrapper">
          <Price pageClass={PageClass.OfferCard} price={price} />
          <BookmarkButton pageClass={PageClass.OfferCard} isFavorite={isFavorite} />
        </div>
        <Rating pageClass={PageClass.OfferCard} rating={offer.rating} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`} >{title}</Link>
        </h2>
        <p className="place-card__type">{offerType}</p>
      </div>
    </article>
  );
};

export default OfferCard;
