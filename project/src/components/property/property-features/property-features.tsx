import React from 'react';

type PropertyFeaturesProps = {
  offerType: string;
  bedrooms: number,
  maxAdults: number
}

const PropertyFeatures: React.FC<PropertyFeaturesProps> = ({ offerType, bedrooms, maxAdults}) => (
  <ul className="property__features">
    <li className="property__feature property__feature--entire">
      {offerType}
    </li>
    <li className="property__feature property__feature--bedrooms">
      {`${bedrooms} Bedrooms`}
    </li>
    <li className="property__feature property__feature--adults">
      {`Max ${maxAdults} adults`}
    </li>
  </ul>
);

export default PropertyFeatures;
