import React, { MouseEvent, useEffect } from 'react';
import classNames from 'classnames';
import { CityTitle, DEFAULT_CITY, LinkParameter } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setActiveCity } from '../../../store/app-process/app-process';
import { getActiveCity } from '../../../store/app-process/selectors';
import { Link, useLocation } from 'react-router-dom';

const CitiesTabs: React.FC = () => {
  const activeCity = useAppSelector(getActiveCity);
  const dispatch = useAppDispatch();

  const location = useLocation();
  const hashLocation: string = location.hash;

  useEffect(() => {
    let city = decodeURI(window.location.hash);

    if (!city) {
      city = DEFAULT_CITY;
    }

    // for (let i = 0; i < CityTitle.length; i++) {
    //   dispatch(setActiveCity(CityTitle[i]));
    // }
    // dispatch(setActiveCity(city));

    // CityTitle.map((cityName) => dispatch(setActiveCity(cityName)));

    // dispatch(setActiveCity(cityName))
  }, [dispatch, hashLocation]);

  return (
    <ul className="locations__list tabs__list">
      {CityTitle.map((cityName) => {
        const isActive = activeCity === cityName;
        const linkParameter = isActive ? LinkParameter.Disabled : LinkParameter.Active;
        const linkClass = classNames('locations__item-link tabs__item', { 'tabs__item--active': isActive });

        return (
          <li key={cityName} className="locations__item">
            <Link
              onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
                // evt.preventDefault();
                dispatch(setActiveCity(cityName));
              }}
              style={{ pointerEvents: linkParameter }}
              className={linkClass}
              to={`#${cityName}`}
            >
              <span>{cityName}</span>
            </Link>
          </li>
        );
      }
      )}
    </ul>
  );
};

export default CitiesTabs;
