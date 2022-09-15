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
  onActive?: () => void;
  onInactive?: () => void;
};

function OfferCard(props: OfferCardProps): JSX.Element {
  const { offer, cardClass, onActive, onInactive } = props;
  const { id, type, isPremium, previewImage, title, price, isFavorite } = offer;

  const offerType = capitalizeFirstLetter(type);
  const isFavoriteStyle = cardClass === PageCardClass.Favorite;
  const imageSize = isFavoriteStyle ? ImageSize.Small : ImageSize.Big;
  const { width, height } = imageSize;

  return (
    <article onMouseEnter={onActive} onMouseLeave={onInactive} className={`${cardClass}__card place-card`} >
      {
        isPremium ? (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        ) : null
      }

      <div className={`${cardClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Room}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={width}
            height={height}
            alt={title}
          />
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
}

export default OfferCard;
