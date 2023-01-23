import React, {MouseEvent} from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../const';
import { useAppDispatch } from '../../../../hooks';
import { setActiveCity } from '../../../../store/app-process/app-process';

type FavoriteCityProps = {
  city: string
}
const FavoriteCity: React.FC<FavoriteCityProps> = ({ city }) => {
  const dispatch = useAppDispatch();

  return (

    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link onClick={(_evt: MouseEvent<HTMLAnchorElement>) => {
          dispatch(setActiveCity(city));
        }}
        className="locations__item-link"
        to={AppRoute.Main}
        >
          <span>{city}</span>
        </Link>
      </div>
    </div>
  );
};

export default FavoriteCity;
