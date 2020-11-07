import React, {useState, useRef, useEffect} from 'react'
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import Container from '@material-ui/core/Container';

const Map = () => {
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

  const intializeMap = ({ setMap, mapContainer }) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidXllbnRydW9uZyIsImEiOiJjanVjcGN0b3IwaG5xNDNwZHJ3czRlNmJhIn0.u7o0VUuXY5f-rs4hcrwihA';

    // Initalize map with base style
    const initMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/uyentruong/ckfbjtpi45eqp19myy1pon6r3",
      center: [22.253043, 60.451436],
      zoom: 9
    });
    // Scale control
    const scale = new mapboxgl.ScaleControl({
      maxWidth: 80,
      unit: 'metric'
    });
    initMap.addControl(scale, 'bottom-right');


    // Add navigation control
    const nav = new mapboxgl.NavigationControl();
    initMap.addControl(nav, 'bottom-right');


    initMap.on("load", () => {
      setMap(initMap);
      initMap.resize();
    });
  }

  useEffect(() => {
        !map && intializeMap({setMap, mapContainer});
    }, [map])

  return (
    <React.Fragment>
      <Container className="mapContainer"
        ref={mapContainer} /> 
    </React.Fragment>
  )
}

export default Map;