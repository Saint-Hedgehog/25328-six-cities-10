import React from 'react';
import { PageClass } from '../../const';
import { getCountStars } from '../../utils/utils';

type RatingProps = {
  rating: number,
  pageClass: PageClass
};

const Rating: React.FC<RatingProps> = ({ rating, pageClass}) => {
  const starsCount = getCountStars(rating);

  return (
    <div className={`${pageClass}__rating rating`}>
      <div className={`${pageClass}__stars rating__stars`}>
        <span style={{ width: starsCount }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {
        pageClass === PageClass.Property ? (
          <span className="property__rating-value rating__value">{rating}</span>
        ) : null
      }
    </div>
  );
};

export default Rating;
