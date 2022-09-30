import 'leaflet/dist/leaflet.css';
import { Marker } from 'leaflet';
import React, { useRef } from 'react';
import { City } from '../../const';
import { Offers } from '../../types/offers';
import { getActiveCityLocation } from '../../utils/utils';
import useMap from '../../hooks/useMap';
import useChangeLocation from '../../hooks/useChangeLocation';
import useMarker from '../../hooks/useMarker';

type MapProps = {
  activeCity: City;
  activeCityOffers: Offers;
};

const Map: React.FC<MapProps> = (props) => {
  const { activeCityOffers, activeCity } = props;
  const activeCityLocation = getActiveCityLocation(activeCity, activeCityOffers);
  const mapRef = useRef(null);
  const map = useMap(mapRef, activeCityLocation);
  const prevActiveCityRef = useRef<City>(activeCity);
  const prevMarkersRef = useRef<Marker[]>([]);

  useChangeLocation(
    prevActiveCityRef,
    prevMarkersRef,
    activeCity,
    activeCityLocation,
    map
  );

  useMarker(prevMarkersRef, activeCityOffers, map);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
};

export default Map;
