import React from 'react';
import { capitalizeFirstLetter } from '../../../utils/utils';

type PropertyFeaturesProps = {
  type: string,
  bedrooms: number,
  maxAdults: number
};

const PropertyFeatures: React.FC<PropertyFeaturesProps> = ({ type, bedrooms, maxAdults }) => {
  const offerType = capitalizeFirstLetter(type);

  return (
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
};

export default PropertyFeatures;
