import React, { MouseEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, City } from '../../../../const';
import { useAppDispatch } from '../../../../hooks';
import { setActiveCity } from '../../../../store/app-process/app-process';
import { getRandomCity } from '../../../../utils/utils';

const GoToCityButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const city = useRef<City>(getRandomCity()).current;

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link
          onClick={(_evt: MouseEvent<HTMLAnchorElement>) => {
            dispatch(setActiveCity(city));
          }}
          to={AppRoute.Main}
          className="locations__item-link"
        >
          <span>{city}</span>
        </Link>
      </div>
    </section>
  );
};

export default GoToCityButton;
