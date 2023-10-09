import "./Map.scss";
import {useEffect, useRef} from "react";
import mapboxgl from "mapbox-gl";
import mapBoxStyle from "./mapboxstyle.json";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export const Map = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return;
    const zoom = 12;
    const position = [55.5589471, -21.3404731];
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: mapBoxStyle,
      center: position,
      zoom: zoom,
    });
    new mapboxgl.Marker()
      .setLngLat(position)
      .addTo(mapRef.current);
    mapRef.current.scrollZoom.disable();
    mapRef.current.on('load', async () => {
      mapRef.current.addControl(new mapboxgl.NavigationControl({}));
    });
  });

  return (
    <div className="map-container">
      <div ref={mapContainerRef} className="map"></div>
    </div>
  );
};

export default Map;
