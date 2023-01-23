import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { AppRoute, City, LinkParameter } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setActiveCity } from '../../store/app-process/app-process';

type Props = {
  isFooter?: boolean,
};

const Logo: React.FC<Props> = ({ isFooter }) => {
  const dispatch = useAppDispatch();
  const currentPath = useLocation().pathname;
  const linkParameter = currentPath === AppRoute.Main ? LinkParameter.Disabled : LinkParameter.Active;
  const linkClass = isFooter ? 'footer__logo-link' : 'header__logo-link';
  const imgClass = isFooter ? 'footer__logo' : 'header__logo';
  const imgWidth = isFooter ? '64' : '81';
  const imgHeight = isFooter ? '33' : '41';

  return (
    <div className="logo">
      <Link
        onClick={() => {
          dispatch(setActiveCity(City.Paris));
        }}
        style={{ pointerEvents: linkParameter }}
        to={AppRoute.Main}
        className={linkClass}
      >
        <img className={imgClass} src="img/logo.svg" alt="6 cities logo" width={imgWidth} height={imgHeight} />
      </Link>
    </div>
  );
};

export default React.memo(Logo);
