import 'leaflet/dist/leaflet.css';
import { Marker } from 'leaflet';
import React, { useRef } from 'react';
import { City, MapClass } from '../../const';
import { Offers } from '../../types/offers';
import { getLocation } from '../../utils/utils';
import useMap from '../../hooks/use-map';
import useChangeLocation from '../../hooks/use-change-location';
import useAddMarker from '../../hooks/use-add-marker';
import useRemoveMarker from '../../hooks/use-remove-marker';

type MapProps = {
  activeCity: City,
  activeCityOffers: Offers,
  activeCardId: number | null,
  mapClass: MapClass
};

const Map: React.FC<MapProps> = (props) => {
  const { activeCity, activeCityOffers, activeCardId, mapClass } = props;
  const activeLocation = getLocation(activeCity, activeCityOffers, mapClass);

  const mapRef = useRef(null);
  const prevActiveCityRef = useRef<City>(activeCity);
  const prevMarkersRef = useRef<Marker[]>([]);
  const prevActiveId = useRef<number | null>(activeCardId);
  const map = useMap(mapRef, activeLocation);

  useRemoveMarker( prevMarkersRef, map, activeCardId, prevActiveId );
  useChangeLocation( prevActiveCityRef, prevMarkersRef, activeCity, activeLocation, map );
  useAddMarker( prevMarkersRef, activeCityOffers, map, activeCardId );

  return (
    <section className={mapClass} ref={mapRef}></section>
  );
};

export default React.memo(Map);
