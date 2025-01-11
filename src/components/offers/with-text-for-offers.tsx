type TextForOffersType = {
  type: 'mainPage' | 'nearPlaces';
  children: React.ReactNode;
};

export default function TextForOffers({ type, children }: TextForOffersType) {
  return (
    <>
      {type === 'mainPage' ? (
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          {children}
        </section>
      ) : type === 'nearPlaces' ? (
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">{children}</div>
        </section>
      ) : null}
    </>
  );
}
