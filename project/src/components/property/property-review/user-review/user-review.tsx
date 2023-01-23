import React from 'react';
import { PageClass } from '../../../../const';
import { Reviews } from '../../../../types/reviews';
import { getFormatDate } from '../../../../utils/utils';
import Rating from '../../../rating/rating';

type UserReviewProps = {
  reviews: Reviews;
}

const UserReview: React.FC<UserReviewProps> = ({ reviews }) => (
  <ul className="reviews__list">
    {reviews.map((review) => {
      const { rating, date, id, comment } = review;
      const { avatarUrl, name } = review.user;
      const commentDate = getFormatDate(date);

      return (
        < li key={id} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img src={avatarUrl} className="reviews__avatar user__avatar" width="54" height="54" alt="Reviews avatar"/>
            </div>
            <span className="reviews__user-name">{name}</span>
          </div>
          <div className="reviews__info">
            <Rating pageClass={PageClass.Reviews} rating={rating} />
            <p className="reviews__text">{comment}</p>
            <time className="reviews__time" dateTime={date}>{commentDate}</time>
          </div>
        </li >
      );
    }
    )}
  </ul>
);

export default UserReview;
