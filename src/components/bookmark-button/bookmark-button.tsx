import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteStatusAction } from '../../store/api-actions';
import { OfferInterface } from '../../types/places-type';
import { memo, useMemo } from 'react';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../consts';

type BookmarkButtonTypeProps = {
  type: string;
  offer: OfferInterface;
};

const BookmarkButton = memo(function BookmarkButton({
  type,
  offer,
}: BookmarkButtonTypeProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const favoriteOffers = useAppSelector((state) => state.FAVORITES.favorites);
  const isFavorite = useMemo(() => {
    return (
      favoriteOffers !== null &&
      favoriteOffers?.length &&
      favoriteOffers?.some((place) => place.id === offer.id)
    );
  }, [favoriteOffers, offer]);

  const changeFavoriteStatusHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();

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
      );
    } catch (error) {
      console.error('Failed to update favorite status:', error);
    }
  };

  const buttonWidth = () => {
    return type === 'place-card' ? 18 : 31;
  };
  const buttonHeight = () => {
    return type === 'place-card' ? 19 : 33;
  };

  return (
    <button
      className={`${type}__bookmark-button button ${
        isFavorite &&
        authStatus === AuthorizationStatus.Auth &&
        `${type}__bookmark-button--active`
      }`}
      type="button"
      onClick={changeFavoriteStatusHandler}
    >
      <svg
        className={`${type}__bookmark-icon`}
        width={buttonWidth()}
        height={buttonHeight()}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">
        {`${isFavorite ? 'In bookmarks' : 'To bookmarks'}`}
      </span>
    </button>
  );
});

export default BookmarkButton;
