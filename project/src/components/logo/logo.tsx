import {Link, useLocation} from 'react-router-dom';
import { AppRoute } from '../../const';

type Props = {
  isFooter?: boolean;
};

function Logo({isFooter}: Props) {
  const location = useLocation();
  const isBaseName = location.pathname.length === 1;
  const linkClass = isFooter ? 'footer__logo-link' : 'header__logo-link';
  const imgClass = isFooter ? 'footer__logo' : 'header__logo';
  const imgWidth = isFooter ? '64' : '81';
  const imgHeight = isFooter ? '33' : '41';

  return (
    <div className="logo">
      {isBaseName ? (
        <Link to={AppRoute.Main} style={{pointerEvents: 'none'}} className={linkClass}>
          <img className={imgClass} src="img/logo.svg" alt="6 cities logo" width={imgWidth} height={imgHeight} />
        </Link>
      ) : (
        <Link to={AppRoute.Main} className={linkClass}>
          <img className={imgClass} src="img/logo.svg" alt="6 cities logo" width={imgWidth} height={imgHeight} />
        </Link>
      )}
    </div>
  );
}

export default Logo;
