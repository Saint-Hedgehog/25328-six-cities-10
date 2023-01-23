import React from 'react';
import classNames from 'classnames';
import { Host } from '../../../types/offers';

type PropertyHostProps = {
  host: Host,
  description: string
};

const PropertyHost: React.FC<PropertyHostProps> = ({ host, description }) => {
  const { avatarUrl, name, isPro } = host;
  const avatarClass = classNames('property__avatar-wrapper user__avatar-wrapper', {'property__avatar-wrapper--pro': isPro});

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={avatarClass}>
          <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {name}
        </span>
        {
          isPro ? (
            <span className="property__user-status">Pro</span>
          ) : null
        }
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PropertyHost;
