import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import styled from "styled-components";
import WeatherBadge from "./WeatherBadge";
import LocalTime from "./LocalTime";

const LocationCardContainer = styled.div`
  display: flex;
  position: relative;
  border: 1px solid gray;
  margin: 4px;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 160px;
`;

const WeatherBadgeContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 1;
`;

const TimeBadgeContainer = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
`;

export default function LocationCard({ location }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(`${location.lng}`);
  const [lat] = useState(`${location.lat}`);
  const [zoom] = useState(6.5);

  const [MAPTILER_API_KEY] = useState(process.env.NEXT_PUBLIC_MAPTILER_API_KEY);

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/84ae0c2c-718b-49a5-a818-493c28f227bb/style.json?key=${MAPTILER_API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
    });

    map.current.addControl(new maplibregl.NavigationControl());

    new maplibregl.Marker({ color: "#fca5a5" })
      .setLngLat([7.0904, 50.7399])
      .addTo(map.current);
  }, [MAPTILER_API_KEY, lat, lng, zoom]);

  return (
    <LocationCardContainer>
      <MapContainer ref={mapContainer} />
      <WeatherBadgeContainer>
        <WeatherBadge location={location} />
      </WeatherBadgeContainer>
      <TimeBadgeContainer>
        <LocalTime timezone={location.timezone} />
      </TimeBadgeContainer>
    </LocationCardContainer>
  );
}
