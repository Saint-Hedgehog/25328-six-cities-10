import { PageClass } from '../../const';

type PriceProps = {
  price: number;
  pageClass: PageClass,
}

function Rating({ price, pageClass }: PriceProps): JSX.Element {
  return (
    <div className={`${pageClass}__price`}>
      {
        pageClass === PageClass.Property ? (
          <>
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </>
        ) : (
          <>
            <b className="place-card__price-value">&euro;{price}&nbsp;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </>
        )
      }
    </div>
  );
}

export default Rating;
