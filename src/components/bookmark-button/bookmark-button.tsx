import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteStatusAction } from '../../store/api-actions';
import { OfferInterface } from '../../types/places-type';
import { useCallback } from 'react';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { toast } from 'react-toastify';

type BookmarkButtonTypeProps = {
  type: string;
  offer: OfferInterface;
};

export default function BookmarkButton({
  type,
  offer,
}: BookmarkButtonTypeProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isFavorite = offer.isFavorite;

  const changeFavoriteStatusHandler = useCallback(async () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    try {
      await dispatch(
        changeFavoriteStatusAction({
          id: offer.id,
          status: isFavorite ? 0 : 1,
        })
      ).unwrap();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Change favorite status: Something went wrong';
      toast.error(errorMessage);
    }
  }, [authStatus, dispatch, isFavorite, navigate, offer.id]);

  const buttonSize =
    type === 'place-card'
      ? { width: 18, height: 19 }
      : { width: 31, height: 33 };

  return (
    <button
      className={`${type}__bookmark-button button ${
        isFavorite &&
        authStatus === AuthorizationStatus.Auth &&
        `${type}__bookmark-button--active`
      }`}
      type="button"
      onClick={() => void changeFavoriteStatusHandler()}
    >
      <svg
        className={`${type}__bookmark-icon`}
        width={buttonSize.width}
        height={buttonSize.height}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
