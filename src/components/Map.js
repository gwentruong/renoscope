import React, {useState, useRef, useEffect} from 'react'
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import Container from '@material-ui/core/Container';

const bounds = [
    [24.782813,60.128574],
    [25.254512,60.29785]
]

const Map = ({addressCoords}) => {
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);
    const [buildingInfo, setBuildingInfo] = useState(null);

  const intializeMap = ({ setMap, mapContainer }) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidXllbnRydW9uZyIsImEiOiJjanVjcGN0b3IwaG5xNDNwZHJ3czRlNmJhIn0.u7o0VUuXY5f-rs4hcrwihA';

    // Initalize map with base style
    const initMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/uyentruong/ckfbjtpi45eqp19myy1pon6r3",
      center: addressCoords,
      zoom: 14,
      maxBounds: bounds
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

    setMap(initMap);
  }

  const addDataLayer = () => {
    const buildingLayer = 'helsinki_building-8jfoy8'

    if (map) {
        map.on("load", () => {
            map.resize();

            map.addSource('building', {
                type: 'vector',
                url: 'mapbox://uyentruong.8figw6eg'
            });

            map.addLayer({
                id: 'building-basic',
                type: 'fill',
                source: 'building',
                'source-layer': buildingLayer,
                layout: {
                    visibility: 'visible'
                },
                paint: {
                    'fill-color': '#ff69b4',
                    'fill-opacity': 0.7,
                }
            });

            let feat = map.queryRenderedFeatures(
                addressCoords,
                { layers: ['building-basic'] }
            );

            if (feat) {
                setBuildingInfo(feat)
            }
        });
    }
  }

  useEffect(() => {
        !map && intializeMap({setMap, mapContainer});
        addDataLayer();
    }, [map])

  return (
    <React.Fragment>
      <div className="mapContainer"
        ref={mapContainer} /> 
    </React.Fragment>
  )
}

export default Map;