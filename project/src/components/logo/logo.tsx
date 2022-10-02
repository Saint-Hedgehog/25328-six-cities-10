import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { AppRoute } from '../../const';

type Props = {
  isFooter?: boolean;
};

const Logo: React.FC<Props> = ({ isFooter }) => {
  const currentPath = useLocation().pathname;
  const logoParameter = currentPath === AppRoute.Main ? 'none' : 'auto';
  const linkClass = isFooter ? 'footer__logo-link' : 'header__logo-link';
  const imgClass = isFooter ? 'footer__logo' : 'header__logo';
  const imgWidth = isFooter ? '64' : '81';
  const imgHeight = isFooter ? '33' : '41';

  return (
    <div className="logo">
      <Link to={AppRoute.Main} style={{ pointerEvents: logoParameter }} className={linkClass}>
        <img className={imgClass} src="img/logo.svg" alt="6 cities logo" width={imgWidth} height={imgHeight} />
      </Link>
    </div>
  );
};

export default Logo;
