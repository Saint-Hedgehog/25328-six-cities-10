import React from 'react';
import { AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { getAuthorizationStatus } from '../../../store/user-process/selectors';
import { Reviews } from '../../../types/reviews';
import { getSortedReviews } from '../../../utils/utils';
import FormReview from './form-review/form-review';
import UserReview from './user-review/user-review';

type PropertyReviewsProps = {
  offerId: number,
  reviews: Reviews
};

const PropertyReviews: React.FC<PropertyReviewsProps> = ({ offerId, reviews }) => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isShowForm = authorizationStatus === AuthorizationStatus.Auth;
  const sortedReviews = getSortedReviews(reviews);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortedReviews.length}</span></h2>
      <UserReview reviews={sortedReviews} />
      { isShowForm ? <FormReview offerId={offerId} /> : null }
    </section>
  );
};

export default PropertyReviews;
