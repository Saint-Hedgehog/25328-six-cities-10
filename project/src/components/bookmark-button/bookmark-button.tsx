import { PageClass, ButtonSize } from '../../const';

type BookmarkButtonProps = {
  pageClass: PageClass,
  isFavorite: boolean;
}

function BookmarkButton({ pageClass, isFavorite }: BookmarkButtonProps): JSX.Element {
  const buttonSize = pageClass === PageClass.OfferCard ? ButtonSize.Small : ButtonSize.Big;
  const { width, height } = buttonSize;

  return (
    <button
      className={`${pageClass}__bookmark-button button ${isFavorite ? `${pageClass}__bookmark-button--active` : ''}`}
      type="button"
    >
      <svg
        className="place-card__bookmark-icon"
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}


export default BookmarkButton;
