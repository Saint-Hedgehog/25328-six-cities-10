import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { PageCardClass, AppRoute, ImageSize, PageClass, Timer } from '../../../const';
import { Offer } from '../../../types/offers';
import { capitalizeFirstLetter } from '../../../utils/utils';
import BookmarkButton from '../../bookmark-button/bookmark-button';
import Price from '../../price/price';
import Rating from '../../rating/rating';

type OfferCardProps = {
  offer: Offer,
  cardClass: PageCardClass,
  onActiveCard?: (value: number | null) => void
};

const OfferCard: React.FC<OfferCardProps> = (props) => {
  const { offer, cardClass, onActiveCard } = props;
  const { id, type, isPremium, previewImage, title, price, rating } = offer;

  const offerType = capitalizeFirstLetter(type);
  const isFavoriteStyle = cardClass === PageCardClass.Favorite;
  const imageSize = isFavoriteStyle ? ImageSize.Small : ImageSize.Big;
  const { width, height } = imageSize;
  const cardInfoClass = classNames('place-card__info', {'favorites__card-info': isFavoriteStyle});

  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleActiveCard = () => {
    if (onActiveCard !== undefined) {
      timerRef.current = setTimeout(() => onActiveCard(id), Timer.OfferCard);
    }
  };

  const handleInactiveCard = () => {
    if (onActiveCard !== undefined) {
      onActiveCard(null);
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }
  };

  useEffect(
    () =>
      () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      }, []);

  return (
    <article onMouseEnter={handleActiveCard} onMouseLeave={handleInactiveCard} className={`${cardClass}__card place-card`} >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}

      <div className={`${cardClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image" src={previewImage} width={width} height={height} alt={title}/>
        </Link>
      </div>

      <div className={cardInfoClass}>
        <div className="place-card__price-wrapper">
          <Price pageClass={PageClass.OfferCard} price={price} />
          <BookmarkButton buttonClass={PageClass.OfferCard} offerId={offer.id} favoriteStatus={offer.isFavorite} />
        </div>
        <Rating pageClass={PageClass.OfferCard} rating={rating} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`} >{title}</Link>
        </h2>
        <p className="place-card__type">{offerType}</p>
      </div>
    </article>
  );
};

export default OfferCard;
