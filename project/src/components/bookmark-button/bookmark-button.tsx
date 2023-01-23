import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { PageClass, ButtonSize, AppRoute, AuthorizationStatus, Timer, FavoriteAction, FavoriteActionInfo, RequestStatus, TOAST_TYPE } from '../../const';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { postUserFavoriteAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type BookmarkButtonProps = {
  buttonClass: PageClass,
  offerId: number,
  favoriteStatus: boolean
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ buttonClass, offerId, favoriteStatus }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(favoriteStatus);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toastIdRef = useRef<number | string | null>(null);
  const timerIdRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isNoAuthorized = authorizationStatus === AuthorizationStatus.NoAuth;
  const actionType = isFavorite ? FavoriteAction.Delete : FavoriteAction.Add;
  const actionTypeInfo = isFavorite ? FavoriteActionInfo.Removed : FavoriteActionInfo.Add;
  const buttonSize = buttonClass === PageClass.OfferCard ? ButtonSize.Small : ButtonSize.Big;
  const btnClass = classNames(`${buttonClass}__bookmark-button button`, { [`${buttonClass}__bookmark-button--active`]: isFavorite });

  const onClick = async () => {
    toast.dismiss();
    setIsLoading(true);
    toastIdRef.current = toast.loading(FavoriteActionInfo.Loading);

    const responseData = await dispatch(postUserFavoriteAction({
      id: offerId,
      status: actionType
    }));

    if (responseData.meta.requestStatus === RequestStatus.Fulfilled) {
      setIsFavorite((prevState) => !prevState);
      toast.update(toastIdRef.current, {
        render: actionTypeInfo,
        type: TOAST_TYPE,
        isLoading: false,
        autoClose: Timer.ToastClose
      });
    } else {
      toast.dismiss(toastIdRef.current);
    }

    timerIdRef.current = setTimeout(() => {
      setIsLoading(false);
      timerIdRef.current = undefined;
    }, Timer.Favorite);
  };

  const handleClick = (_evt: MouseEvent<HTMLButtonElement>) => {
    if (isNoAuthorized) {
      dispatch(redirectToRoute(AppRoute.Login));
      return;
    }

    onClick();
  };

  useEffect(
    () =>
      () => {
        if (timerIdRef.current) {
          clearTimeout(timerIdRef.current);
        }
      }, []);

  const { width, height } = buttonSize;

  return (
    <button onClick={handleClick} className={btnClass} type="button" disabled={isLoading}>
      <svg className={`${buttonClass}__bookmark-icon`} width={width} height={height} >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};


export default BookmarkButton;
