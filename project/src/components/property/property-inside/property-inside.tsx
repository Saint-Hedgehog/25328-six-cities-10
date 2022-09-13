type PropertyInsideProps = {
  goods: string[];
}

function PropertyInside({ goods }: PropertyInsideProps): JSX.Element {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((service) => (
          <li
            key={service}
            className="property__inside-item"
          >
            {service}
          </li>
        )
        )}
      </ul>
    </div>
  );
}

export default PropertyInside;
