import React, { Fragment } from 'react';
import { InputRatingOption } from '../../../../../const';

type FormRatingInputProps = {
  isDisabled: boolean,
  rating: number | null,
}

const FormRatingInput: React.FC<FormRatingInputProps> = ({ isDisabled, rating }) => (
  <Fragment>
    {InputRatingOption.map((option) => {
      const isChecked = rating === option.rating;

      return (
        <Fragment key={`${option.rating}${rating}`}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            type="radio"
            value={option.rating}
            id={`${option.rating}-stars`}
            disabled={isDisabled}
            defaultChecked={isChecked}
          />
          <label
            htmlFor={`${option.rating}-stars`}
            className="reviews__rating-label form__rating-label"
            title={option.title}
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>);
    }
    )}
  </Fragment>
);

export default React.memo(FormRatingInput);
