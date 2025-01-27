import { useAppSelector } from '../../hooks';

export default function BookmarkCounter() {
  const favoritesOffer = useAppSelector((state) => state.FAVORITES.favorites);

  return (
    <span className="header__favorite-count">
      {favoritesOffer === null ? 0 : favoritesOffer.length}
    </span>
  );
}
