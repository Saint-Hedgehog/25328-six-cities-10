import { useState, Fragment } from 'react';
import { PageCardClass } from '../../const';
import { Offers } from '../../types/offers';
import OfferCard from './offer-card/offer-card';


type OffersListProps = {
  offers: Offers;
  cardClass: PageCardClass;
};

function OffersList({ offers, cardClass }: OffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Заглушка для переменной activeCard
  if (activeCard === undefined) {
    return <div />;
  }

  return (
    <Fragment>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          cardClass={cardClass}
          onActive={() => setActiveCard(offer.id)}
          onInactive={() => setActiveCard(null)}
        />)
      )}
    </Fragment>
  );
}

export default OffersList;
