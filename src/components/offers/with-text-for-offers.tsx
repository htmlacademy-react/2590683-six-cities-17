import { NEAR_PLACES_TITLE } from '../../consts';

type TextForOffersType = {
  type: 'mainPage' | 'nearPlaces';
  children: React.ReactNode;
};

export default function TextForOffers({ type, children }: TextForOffersType) {
  if (type === 'mainPage') {
    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        {children}
      </section>
    );
  }

  if (type === 'nearPlaces') {
    return (
      <section className="near-places places">
        <h2 className="near-places__title">{NEAR_PLACES_TITLE}</h2>
        <div className="near-places__list places__list">{children}</div>
      </section>
    );
  }

  return null;
}
